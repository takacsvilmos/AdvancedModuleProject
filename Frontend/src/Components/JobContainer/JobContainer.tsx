import JobCard from "../JobCard/JobCard";
import "./JobContainer.css";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { JobContext } from "../../Services/JobContext";
import { AuthContext } from "../../Services/Auth";
import { FetchJobOffers } from "../../Api";
/* import { JobOffer } from "../../Services/JobContext"; */
import { JobOffer } from "../../Services/Employer";

const JobContainer = () => {
    const navigate = useNavigate();
    const jobContext = useContext(JobContext);
    const { isLoggedIn } = useContext(AuthContext);
    const [jobOfferData, setJobOfferData] = useState<JobOffer[]>([]);

    if (!jobContext) {
        throw new Error("JobContext must be used within a JobContext.Provider");
    }

    const { setCurrentJob } = jobContext;

    useEffect(() => {
        const jobOffersInHome = async () => {
            try {
                const response = await FetchJobOffers();
                setJobOfferData(response);
            } catch (error) {
                console.error(error);
            }
        };
        jobOffersInHome();
    }, []);

    const handleClick = (job: JobOffer) => {
        if (isLoggedIn) {
            setCurrentJob(job);
            navigate(`/joboffer/${job?.id}`);
        } else {
            alert("Login first!");
        }
    };
    //console.log(jobContext.currentJob)

    return (
        <div className="jobContainer">
            {jobOfferData.map((job, index) => (
                <button key={index} onClick={() => handleClick(job)}>
                    <JobCard key={index} offer={job} />
                </button>
            ))}
        </div>
    );
};

export default JobContainer;