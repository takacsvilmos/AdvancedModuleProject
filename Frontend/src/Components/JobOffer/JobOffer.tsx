import JobCard from "../JobCard/JobCard"
import "./JobOffer.css"
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { JobContext } from "../../Services/JobContext"
import { AuthContext } from "../../Services/Auth";

type JobOffer = { id: number, name: string, location: string, rating: number, recommendedFor: string, date: string, description: string }
const jobOffers: JobOffer[] = [
    { id: 1, name: "Asd-kft", location: "Budapest", rating: 4, recommendedFor: "plumbers", date: "MA", description: "blabla" },
    { id: 2, name: "Asd1-kft", location: "Budapest", rating: 4, recommendedFor: "plumbers", date: "MA", description: "blabla" },
    { id: 3, name: "Asd2-kft", location: "Budapest", rating: 4, recommendedFor: "plumbers", date: "MA", description: "blabla" },
    { id: 4, name: "Asd3-kft", location: "Budapest", rating: 4, recommendedFor: "plumbers", date: "MA", description: "blabla" },
    { id: 5, name: "Asd4-kft", location: "Budapest", rating: 4, recommendedFor: "plumbers", date: "MA", description: "blabla" },
]

const JobOffer = () => {
    const navigate = useNavigate()
    const jobContext = useContext(JobContext);
    const { isLoggedIn } = useContext(AuthContext)

    if (!jobContext) {
        throw new Error("JobContext must be used within a JobContext.Provider");
    }

    const { setCurrentJob } = jobContext;

    const handleClick = (job: any) => {
        if(isLoggedIn){
            setCurrentJob(job)
            navigate(`/joboffer/${job.id}`)
        }else{
            alert('Login first!!!!!!!!!!!!!!')
        }
        
    }

    return (
        <div className="jobContainer">
            {jobOffers.map((job, index) => (
                <button onClick={() => handleClick(job)}><JobCard key={index} offer={job} /></button>

            ))}
        </div>
    );
};
export default JobOffer