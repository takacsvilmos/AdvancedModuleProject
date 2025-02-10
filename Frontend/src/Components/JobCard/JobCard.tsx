import "./JobCard.css"
/* import { JobOffer } from "../../Services/JobContext"; */
import { JobOffer } from "../../Services/Employer";



type JobCardProps = {
    offer: JobOffer;
}

const JobCard = ({ offer }: JobCardProps) => {
    return (
        <div className="jobcard">
            <div>
                <h1>{offer?.name}</h1>
                <p>{offer?.location}</p>
                <p>{offer?.rating}</p>
            </div>
            <div>
                <p>{offer?.recommendedFor}</p>
                <p>{offer?.date}</p>
            </div>
        </div>
    );
};
export default JobCard