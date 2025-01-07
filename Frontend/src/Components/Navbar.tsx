import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Services/Auth";
import { ProfilePanelContext } from "../Services/ProfilePanalAuth";
import { useContext } from "react";
import { UserContext } from "../Services/User";

type NavbarProps = {
    view?: "home" | "login" | "signup" | "admin" | "employer"
    setView?: (view: "home" | "login" | "signup" | "employer") => void;
}

const Navbar = ({ view, setView }: NavbarProps) => {
    const { isLoggedIn, logOut } = useContext(AuthContext)
    const { isOpen, onClose, doOpen } = useContext(ProfilePanelContext)
    const navigate = useNavigate();
    
    const userContext = useContext(UserContext)
    if(!userContext){
        throw new Error("no user!")
    }
    const { setUser } = userContext

    const handleProfileClick = () => {
        if (isOpen) {
            onClose()
        } else {
            doOpen()
        }
    }

    const handleLogout = () => {
        setUser((prevUser) => ({
            ...prevUser, // Spread the existing user properties
            role: "", // Update the role property
          }));
        logOut()
        if(setView) setView("home")
        navigate("/")
    }

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
                        {view === "admin"?
                        <button onClick={handleLogout}>Logout</button>:
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

