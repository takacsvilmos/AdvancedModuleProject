import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Services/Auth";
import { ProfilePanelContext } from "../../Services/ProfilePanalAuth";
import "./UserCV.css"
import { UserContext } from "../../Services/User";
import EditableWorkExp from "./EditableWorkExp";
import PersonalData from "./PersonalData";
import Introductionedit from "./Introductionedit";

const UserCv = () => {
    const navigate = useNavigate()
    const { isOpen, onClose, doOpen } = useContext(ProfilePanelContext)
    const { logOut } = useContext(AuthContext)
    const userContext = useContext(UserContext)
    if (!userContext) {
        throw new Error("No User")
    }

    const { user } = userContext


    const handleProfileClick = () => {

        if (isOpen) {
            onClose()
        } else {
            doOpen()
        }


    }
    const handleLogout = () => {
        logOut();
        navigate("/")

    };
    const backToHome = () => {
        navigate("/")
    }
    return (
        <div>
            <div className="navbar">
                <h1>BlueJobs</h1>

                <div>
                    <button onClick={handleProfileClick}>Profile</button>
                    <button onClick={handleLogout}>Logout</button>
                    <button onClick={backToHome}>Home</button>
                </div>

            </div>
            <div className="CV-container">
                <div className="leftsidecv">
                    {<PersonalData personalData={user}/>}
                </div>
                <div className="rightsidecv">
                    <div className="intro-container">
                        <h1>Introduction</h1>
                        {<Introductionedit user={user}/>}
                    </div>
                    <div className="workexp-container">
                        <h2 className="headline workexp"><i className="fa fa-suitcase"></i>Work Experience</h2>
                        {user.workexperience.map((experience)=>(<EditableWorkExp key={experience.id} experience = {experience}/>))}
                    </div>
                    <button>Save changes</button>
                </div>




            </div >
        </div>
    );
};

export default UserCv;
