import { JobContext } from "../Services/JobContext";
import { useContext, useState } from "react";
import ProfilePanel from "./ProfilePanel/ProfilePanel";
import Company from "./Company/Company";
import "./JobScreen.css";
import "./ProfilePanel/ProfilePanel.css"
import Navbar from "./Navbar";



const JobScreen = () => {
    const jobContext = useContext(JobContext);

    if (!jobContext) {
        throw new Error("No Data")
    }

    const { currentJob } = jobContext;

    if (!currentJob) {

        return <div>No job selected. Please go back and select a job.</div>;
 }
   

    const selectedCompany = companies.find((company) => company?.id === currentJob.company_id); // all employerData
    const selectedJobs = selectedCompany?.job_offers.filter(job => job?.id !== currentJob.id); 
    if (!selectedJobs) {
        return "No jobs"
    }

    

    return (
        <>
            <Navbar />
            <div className="jobScreenContainer">
                
                <div className="jobScreenCompany">
                    {selectedCompany ? (
                        <Company company={selectedCompany} jobs={selectedJobs} />
                    ) : (
                        <p>Company not found</p>
                    )}
                </div>
                <div className="jobScreenJob">
                    <h1>Job description</h1>
                    <p>{currentJob.name}</p>
                    <p>Rating: {currentJob.rating}</p>
                    <p>Looking for: {currentJob.recommendedFor}</p>
                    <p>Where: {currentJob.location}</p>
                    <p>Created: {currentJob.date}</p>
                    <p>{currentJob.description}</p>
                    <button>Apply with CV</button>
                </div>
            </div>
            <ProfilePanel />
        </>
    );
}
export default JobScreen