import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ProfilePanelContext } from "../../Services/ProfilePanalAuth"
import "./ProfilePanel.css"


const ProfilePanel = () =>{
const {isOpen} = useContext(ProfilePanelContext)

    return(
        <>
        <div className={`profile-panel ${isOpen ? "open" : ""}`} id="myprofile_panel">
                    <h1>MyProfilePanel</h1>                    
                    <p>Description...</p>
                    <div>
                        <button>Add CV</button>
                        <button>Profile manager</button>
                    </div>
                </div>
        </>
        )
 

}
export default ProfilePanel


