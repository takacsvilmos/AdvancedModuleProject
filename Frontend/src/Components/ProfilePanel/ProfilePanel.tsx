import { useContext, useEffect } from "react"
import { UserContext } from "../../Services/User";
import { ProfilePanelContext } from "../../Services/ProfilePanalAuth"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Services/Auth";
import { EmployerContext } from "../../Services/Employer";

import "./ProfilePanel.css"
import { fetchEmployerData } from "../../Api";


const ProfilePanel = () =>{
const {isOpen, onClose} = useContext(ProfilePanelContext)
const {isLoggedIn} = useContext(AuthContext)
const userContext = useContext(UserContext)
const employerContext = useContext(EmployerContext)
const navigate = useNavigate()

    if(!isLoggedIn){
        onClose()
    }
    
    if (!userContext) {
        throw new Error("No User")
    }

    const { user } = userContext

    const handleCv = () =>{
        navigate(`/usercv/${user?.username}`)
    }
    const handleManager = () =>{
        navigate(`/employermanager`)
    }
    const handleCreateJobOffer = ()=>{
        navigate("/joboffercreation");
        console.log("will go to job offer creation page");
    }
    const handleEditJobOffer = ()=>{
        navigate("/jobofferedit");
    }


    return(
        <>
        <div className={`profile-panel ${isOpen ? "open" : ""}`} id="myprofile_panel">
                    <h1>{employerContext?.employer?.companyName || "Company"}'s panel</h1>                    
                    <p>{employerContext?.employer?.description}</p>
                    <div>
                        {user?.role === "Employer" ? 
                        <div><button onClick={handleCreateJobOffer}>Create job offer</button>
                        <button onClick={handleEditJobOffer}>Edit job offer</button>
                        </div>: 
                        <button onClick={handleCv}>Add CV</button>
                        }
                        <button onClick={handleManager}>Profile manager</button>
                    </div>
                </div>
        </>
        )
 

}
export default ProfilePanel


