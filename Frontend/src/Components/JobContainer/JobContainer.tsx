import JobCard from "../JobCard/JobCard"
import "./JobContainer.css"
import { useNavigate } from "react-router-dom";
import { useContext} from "react";
import { JobContext } from "../../Services/JobContext"
import { AuthContext } from "../../Services/Auth";



type JobOffer = { id: number, name: string, location: string, rating: number, recommendedFor: string, date: string, description: string, company_id:number };
export const jobOffers: JobOffer[] = [
    { id: 1, name: "Plubmers in need", location: "Budapest", rating: 4, recommendedFor: "plumbers", date: "MA", description: "blabla", company_id: 1 },
    { id: 2, name: "Lumberjack needed", location: "Budapest", rating: 4, recommendedFor: "plumbers", date: "MA", description: "blabla", company_id: 2},
    { id: 3, name: "Builders needed", location: "Budapest", rating: 4, recommendedFor: "plumbers", date: "MA", description: "blabla", company_id: 3},
    { id: 4, name: "Longt term job", location: "Budapest", rating: 4, recommendedFor: "plumbers", date: "MA", description: "blabla" ,company_id: 4},
    { id: 5, name: "Short term job", location: "Budapest", rating: 4, recommendedFor: "plumbers", date: "MA", description: "blabla", company_id: 5},
    { id: 6, name: "Short term cook position", location: "Budapest", rating: 4, recommendedFor: "plumbers", date: "MA", description: "blabla", company_id: 5}]





const JobContainer = () => {
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
            alert('Login first!')
        }
        
    }

    return (       
        <div className="jobContainer">
            {jobOffers.map((job, index) => (
                <button key={index} onClick={() => handleClick(job)}><JobCard key={index} offer={job} /></button>

            ))}
            
        </div>
        
    );
};
export default JobContainer