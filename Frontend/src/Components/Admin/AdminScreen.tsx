import "./AdminScreen.css"
import JobCard from "../JobCard/JobCard";
import CompanyCard from "../CompanyCard/CompanyCard";
import { useState, useEffect } from "react";
import { JobOffer } from "../../Services/JobContext";
import { FetchJobOffers } from "../../Api";

type CompanyType = {
    id: number,
    name: string,
    location: string,
    company_number: number,
    area: string,
    foundIn: string,
    description: string,
    job_offers: JobOffer[]
}

type View = "Companies" | "Joboffers" | "Applicant"

const AdminScreen = () => {
    const [jobOfferData, setJobOfferData] = useState<JobOffer[]>([]);
    const [companies, setCompanies] = useState<CompanyType[]>([
        { id: 1, name: "Oil Co", location: "Elm street", company_number: 23762, area: "Oil-rigs", foundIn: "2015", description: "We specialize in  off-shore oil rigs on the seas of England ", job_offers: [] },
        { id: 2, name: "Lumber Co", location: "Kossuth street", company_number: 23763, area: "Lumber", foundIn: "2014", description: "We specialize in wood related work ", job_offers: [] },
        { id: 3, name: "Construction Co", location: "Petofi street", company_number: 23764, area: "Construction", foundIn: "2013", description: "We specialize in buildings", job_offers: [] },
        { id: 4, name: "LongJobs Co", location: "Adi street", company_number: 23765, area: "Freelance longterm", foundIn: "2012", description: "We specialize in long term workforce ", job_offers: [] },
        { id: 5, name: "ShortJobs Co", location: "Balassi street", company_number: 23766, area: "Freelance shor-term", foundIn: "2011", description: "We specialize in short term workforce ", job_offers: [] }

    ])
    const [view, setView] = useState<View>("Companies")

    const handleJobClick = (job: JobOffer) => {
        setJobOfferData((prevItems) => prevItems.filter((item) => item !== job));
        alert(`${job?.name} is deleted`)
    }
    const handleCompClick = (comp: CompanyType) => {
        setCompanies((prevItems) => prevItems.filter((item) => item !== comp));
        alert(`${comp?.name} is deleted`)
    }

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