import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Services/Auth";
import { ProfilePanelContext } from "../Services/ProfilePanalAuth";
import { useContext } from "react";

type NavbarProps = {
    view?: "home" | "login" | "signup" | "admin"
    setView?: (view: "home" | "login" | "signup") => void;
}

const Navbar = ({ view, setView }: NavbarProps) => {
    const { isLoggedIn, logOut } = useContext(AuthContext)
    const { isOpen, onClose, doOpen } = useContext(ProfilePanelContext)
    const navigate = useNavigate();

    const handleProfileClick = () => {
        if (isOpen) {
            onClose()
        } else {
            doOpen()
        }
    }

    const handleLogout = () => {
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

