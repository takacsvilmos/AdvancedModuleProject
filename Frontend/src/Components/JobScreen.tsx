import { JobContext } from "../Services/JobContext";
import { useContext } from "react";
import { ProfilePanelContext } from "../Services/ProfilePanalAuth";
import { AuthContext } from "../Services/Auth";
import { useNavigate } from "react-router-dom";
import ProfilePanel from "./ProfilePanel/ProfilePanel";


import "./ProfilePanel/ProfilePanel.css"



const JobScreen = () => {
    const jobContext = useContext(JobContext);
    const { isOpen, onClose, doOpen} = useContext(ProfilePanelContext);
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    if (!jobContext) {
        throw new Error("JobContext must be used within a JobContext.Provider");
    }

    const { currentJob } = jobContext;

    if (!currentJob) {
        return <div>No job selected. Please go back and select a job.</div>;
    }
    const handleProfileClick = () =>{

        if(isOpen) {
            onClose()
        } else{
            doOpen()
        }
        
        
    }
    const handleLogout = () => {
        logOut();
        navigate("/")
        
    };
    const backToHome=()=>{
        navigate("/")
    }

    return (
        <>
            <div className="navbar">
                <h1>BlueJobs</h1>

                <div>
                    <button onClick={handleProfileClick}>Profile</button>
                    <button onClick={handleLogout}>Logout</button>
                    <button onClick={backToHome}>Home</button>
                </div>

            </div>
            <div>
                <h1>{currentJob.name}</h1>
                <div>Offer description:</div>
                <div>Rating: {currentJob.rating}</div>
                <div>Looking for: {currentJob.recommendedFor}</div>
                <div>Where: {currentJob.location}</div>
                <div>Created: {currentJob.date}</div>
                <p>{currentJob.description}</p>
            </div>
            <ProfilePanel />
        </>
    )
}
export default JobScreen