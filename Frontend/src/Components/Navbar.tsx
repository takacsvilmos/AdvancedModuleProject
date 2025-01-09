import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Services/Auth";
import { ProfilePanelContext } from "../Services/ProfilePanalAuth";
import { useContext, useEffect } from "react";
import { UserContext } from "../Services/User";
import { fetchEmployerData } from "../Api";
import { EmployerContext } from "../Services/Employer";

type NavbarProps = {
    view?: "home" | "login" | "signup" | "admin" | "employer"
    setView?: (view: "home" | "login" | "signup" | "employer") => void;
}

const Navbar = ({ view, setView }: NavbarProps) => {
    const { isLoggedIn, logOut } = useContext(AuthContext)
    const { isOpen, onClose, doOpen } = useContext(ProfilePanelContext)
    const navigate = useNavigate();
    const employerContext = useContext(EmployerContext);
    const userContext = useContext(UserContext);

    if (!userContext) {
        throw new Error("no user!")
    }

    useEffect(()=>{
        console.log(userContext?.user);
    }, [])

    const handleProfileClick = () => {
        if (isOpen) {
            onClose()
        } else {
            doOpen()
        }
        const fetchData = async () => {
            const data = await fetchEmployerData(userContext?.user?.email);
            employerContext?.setEmployer(data);
        };
        fetchData();
        console.log("employer:", employerContext?.employer?.companyName);
    }

    const handleLogout = () => {
        userContext.setUser((prevUser) => ({
            ...prevUser, // Spread the existing user properties
            role: "", // Update the role property
            username: "", // Provide default value
            email: "",       // Provide default value
        }));
        logOut();
        if (setView) setView("home");
        navigate("/");
    };

    const handleHomeClick = () => {
        if (setView) {
            setView("home");
        } else {
            navigate("/");
        }
    }

    const handleLoginClick = () => {
        if (setView) setView("login")
        console.log("should set view to login but button is still");
    }

    const handleSignUpClick = () => {
        if (setView) setView("signup")
    }


    return (
        <div className="navbar">
            <h1>BlueJobs</h1>
            <div>
                {isLoggedIn ? (
                    <div>
                        {view === "admin" ?
                            <button onClick={handleLogout}>Logout</button> :
                            <>
                                <button onClick={handleProfileClick}>Profile</button>
                                <button onClick={handleLogout}>Logout</button>
                                <button onClick={handleHomeClick}>Home</button></>}
                    </div>
                ) : (
                    <div>
                        <button onClick={handleLoginClick}>Login</button>
                        <button onClick={handleSignUpClick}>Sign Up</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar

