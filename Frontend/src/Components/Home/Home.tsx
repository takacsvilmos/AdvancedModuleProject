import { useState, useContext } from "react";
import "./Home.css";
import SignUp from "../Login/SignUp";
import Login from "../Login/Login";
import { AuthContext } from "../../Services/Auth";
import { ProfilePanelContext } from "../../Services/ProfilePanalAuth";
import ProfilePanel from "../ProfilePanel/ProfilePanel";
import JobOffer from "../JobOffer/JobOffer";
import { UserContext } from "../../Services/User";
type View = "home" | "login" | "signup"

const Home = () => {
    const [view, setView] = useState<View>("home");
    const { isLoggedIn, logOut } = useContext(AuthContext);
    const { isOpen, onClose, doOpen } = useContext(ProfilePanelContext);
    const userContext = useContext(UserContext);

    if (!userContext) {
        throw new Error("No User");
    }

    const { user } = userContext;


    const handleClickLogin = () => {
        setView("login");
    };

    const handleClickSignUp = () => {
        setView("signup");
    };

    const handleHomeClick = () => {
        setView("home");
    };

    const handleLogout = () => {
        logOut();
        handleHomeClick();
    };
    console.log(isOpen);

    const handleProfileClick = () => {

        if (isOpen) {
            onClose()
        } else {
            doOpen()
        }
    }

    return (
        <>
            <div className="navbar">
                <h1>BlueJobs</h1>
                <div>
                    {view !== "home" && (
                        <button onClick={handleHomeClick}>Back to home</button>
                    )}
                    {isLoggedIn ? (
                        <div>
                            <button onClick={handleProfileClick}>Profile</button>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    ) : (
                        <div>
                            {view !== "login" && (
                                <button onClick={handleClickLogin}>Go to login!</button>
                            )}
                            {view !== "signup" && (
                                <button onClick={handleClickSignUp}>Sign Up!</button>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className="content">
                {isLoggedIn ? view === "home" && <h1>Welcome {user.name}!</h1> : view === "home" && <h1>HomePage</h1>}
                {view !== "signup" && view !== "login" && <JobOffer />}
                {view === "signup" && <SignUp setView={setView} />}
                {view === "login" && <Login setView={setView} />}
            </div>
            <ProfilePanel />
        </>
    );
};

export default Home;
