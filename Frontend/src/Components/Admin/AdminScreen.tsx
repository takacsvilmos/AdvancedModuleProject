import "./AdminScreen.css"
import JobCard from "../JobCard/JobCard";
import CompanyCard from "../CompanyCard/CompanyCard";
import { useState, useEffect } from "react";
import { JobOffer } from "../../Services/JobContext";
import { FetchJobOffers, FetchAllEmployers, FetchAllApplicant } from "../../Api";
import { EmployerData } from "../../Services/Employer";
import { ApplicantData } from "../../Services/User";


type View = "Companies" | "Joboffers" | "Applicant"

const AdminScreen = () => {
    const [jobOfferData, setJobOfferData] = useState<JobOffer[]>([]);
    const [companies, setCompanies] = useState<EmployerData[]>([])
    const [applicantData, setApplicantData] = useState<ApplicantData[]>([])
    const [view, setView] = useState<View>("Joboffers")

    const handleJobClick = (job: JobOffer) => {
        setJobOfferData((prevItems) => prevItems.filter((item) => item !== job));
        alert(`${job?.name} is deleted`)
    }
    const handleCompClick = (comp: EmployerData) => {
        setCompanies((prevItems) => prevItems.filter((item) => item !== comp));
        alert(`${comp?.companyName} is deleted`)
    }

    useEffect(() => {
        const jobOffersInHome = async () => {
            try {
                const response = await FetchJobOffers()
                const response1 = await FetchAllEmployers()
                const response2 = await FetchAllApplicant()
                console.log(response1)
                setJobOfferData(response)
                setCompanies(response1)
                setApplicantData(response2)
            } catch (error) {
                console.error(error)
            }
        };
        jobOffersInHome()
    }, [])
    
    console.log(applicantData)

    return (
        <div className="ittvannak">
            <button onClick={() => setView("Companies")}>Companies</button>
            <button onClick={() => setView("Joboffers")}>Joboffers</button>
            <button onClick={() => setView("Applicant")}>Applyers</button>
            <div className="admin-container">
                <div>
                    <h2>All {view}</h2>
                    <p>Here you can manage all {view}.</p>
                    <div className="card-container">
                        {view === "Companies" && companies.map((comp, index) => (
                            <button onClick={() => handleCompClick(comp)}><CompanyCard key={index} company={comp} /></button>
                        ))}
                        {view === "Joboffers" && jobOfferData.map((job, index) => (
                            <button onClick={() => handleJobClick(job)}><JobCard key={index} offer={job} /></button>
                        ))}

                    </div>
                </div>

            </div>
        </div>
    )
}
export default AdminScreen