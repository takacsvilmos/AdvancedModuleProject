import { CompanyType } from "../../Services/CompanyTypes"
import { useState } from "react"
import JobOffer from "../JobContainer/JobContainer"
import JobCard from "../JobCard/JobCard"
import "../JobScreen.css"


export type CompanyProps = {
    company: CompanyType 
    jobs: JobOffer[] 
}

const Company = ({ company, jobs}: CompanyProps) => {

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
        <div className="companyCard">
            <div>
                <h1>Company: {company.name}</h1>
                <p>Headcourters: {company.location}</p>
                <p>Area of expertise: {company.area}</p>
            </div>
            <div>
                <p>Found in: {company.foundIn}</p>
                <p>Company number: {company.company_number}</p>
                <p>About us: {company.description}</p>

            </div>
            <div>
                {company.job_offers.length > 0 && (
                    <>
                        <button onClick={handleToggle}>
                            {showOffers ? "Hide offers" : "Show offers"}
                        </button>
                        {showOffers && jobs.map((job) => (<div className="jobSreenCard"><JobCard offer={job}/><button>Apply with CV</button></div>))}
                    </>
                )}
            </div>
        </div>
    )
}
export default Company