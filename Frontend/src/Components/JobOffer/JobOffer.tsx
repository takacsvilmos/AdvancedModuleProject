import JobCard from "../JobCard/JobCard"
import "./JobOffer.css"

type JobOffer = {name: string, location: string, rating: number, recommendedFor: string, date: string}
const jobOffers: JobOffer [] = [{name: "Asd-kft", location: "Budapest", rating: 4, recommendedFor: "plumbers", date: "MA"},
    {name: "Asd1-kft", location: "Budapest", rating: 4, recommendedFor: "plumbers", date: "MA"},
    {name: "Asd2-kft", location: "Budapest", rating: 4, recommendedFor: "plumbers", date: "MA"},
    {name: "Asd3-kft", location: "Budapest", rating: 4, recommendedFor: "plumbers", date: "MA"},
    {name: "Asd4-kft", location: "Budapest", rating: 4, recommendedFor: "plumbers", date: "MA"},
]

const JobOffer = () => {
    return (
        <div className="jobContainer">
            {jobOffers.map((job, index) => (
                <button><JobCard key={index} offer={job} /></button>
                
            ))}
        </div>
    );
};
export default JobOffer