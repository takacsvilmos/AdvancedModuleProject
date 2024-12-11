import { useContext } from "react"
import { UserContext } from "../../Services/User";
import { ProfilePanelContext } from "../../Services/ProfilePanalAuth"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Services/Auth";

import "./ProfilePanel.css"


const ProfilePanel = () =>{
const {isOpen, onClose} = useContext(ProfilePanelContext)
const {isLoggedIn} = useContext(AuthContext)
const userContext = useContext(UserContext)
const navigate = useNavigate()

    if(!isLoggedIn){
        onClose()
    }
    
    if (!userContext) {
        throw new Error("No User")
    }

    const { user } = userContext

    const handleCv = () =>{
        navigate(`/usercv/${user.id}`)
    }
    const handleManager = () =>{
        navigate(`/usermanager/${user.id}`)
    }
    return(
        <>
        <div className={`profile-panel ${isOpen ? "open" : ""}`} id="myprofile_panel">
                    <h1>{user.name}'s panel</h1>                    
                    <p>Description...</p>
                    <div>
                        <button onClick={handleCv}>Add CV</button>
                        <button onClick={handleManager}>Profile manager</button>
                    </div>
                </div>
        </>
        )
 

}
export default ProfilePanel


