import { useState } from "react"
import { EmployerData, JobOffer } from "../../Services/Employer"
import { EmployerData, JobOffer } from "../../Services/Employer"
import JobCard from "../JobCard/JobCard"
import CompanyCard from "../CompanyCard/CompanyCard"
import "../JobScreen.css"


export type CompanyProps = {
    company: EmployerData
    jobs: JobOffer[]
}

const Company = ({ company, jobs }: CompanyProps) => {

    const [showOffers, setShowOffers] = useState(false);

    const handleToggle = () => {
        setShowOffers((prev) => !prev);
    };


    if (!company) {
        return (
            <div>no company data</div>
        )
    }


    return (
        <div>
            <CompanyCard company={company}/>
            <div>
                {jobs.length > 0 && (
                    <>
                        <button onClick={handleToggle}>
                            {showOffers ? "Hide offers" : "Show offers"}
                        </button>
                        {showOffers && jobs.map((job) => (<div className="jobSreenCard"><JobCard offer={job} /><button>Apply with CV</button></div>))}
                    </>
                )}
            </div>
        </div>
    )
}
export default Company