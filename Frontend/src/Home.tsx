import { useState, useContext } from "react";
import "./Home.css";
import SignUp from "./SignUp";
import Login from "./Login";
import { AuthContext } from "./Services/Auth";

type View = "home" | "login" | "signup"

const Home = () => {
    const [view, setView] = useState<View>("home");
    const { isLoggedIn, logOut } = useContext(AuthContext);

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
                            <button onClick={() => { alert("Profile Page") }}>Profile</button>
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
                {isLoggedIn? view === "home" && <h1>Welcome!</h1>:view === "home" && <h1>HomePage</h1>}
                {view === "signup" && <SignUp setView={setView}/>}
                {view === "login" && <Login setView={setView}/>}
            </div>
        </>
    );
};

export default Home;
