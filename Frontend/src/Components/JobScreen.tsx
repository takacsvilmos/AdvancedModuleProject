import { JobContext } from "../Services/JobContext";
import { useContext } from "react";
import ProfilePanel from "./ProfilePanel/ProfilePanel";


import "./ProfilePanel/ProfilePanel.css"
import Navbar from "./Navbar";



const JobScreen = () => {
    const jobContext = useContext(JobContext);

    if (!jobContext) {
        throw new Error("No Data")
    }

    const { currentJob } = jobContext;

    if (!currentJob) {
        return <div>No job selected. Please go back and select a job.</div>
    }
   

    return (
        <>
           <Navbar /> 
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