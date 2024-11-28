import "./AdminScreen.css"
import JobCard from "../JobCard/JobCard";
import CompanyCard from "../CompanyCard/CompanyCard";
import { useState } from "react";

type CompanyType = {
    id: number,
    name: string,
    location: string,
    company_number: number,
    area: string,
    foundIn: string,
    description: string,
    job_offers: JobOffer[]
} | null;
type JobOffer = { id: number, name: string, location: string, rating: number, recommendedFor: string, date: string, description: string }

//api hívásból ez jön majd!
const jobOffers: JobOffer[] = [
    { id: 1, name: "Asd-kft", location: "Budapest", rating: 4, recommendedFor: "plumbers", date: "MA", description: "blabla" },
    { id: 2, name: "Asd1-kft", location: "Budapest", rating: 4, recommendedFor: "plumbers", date: "MA", description: "blabla" },
    { id: 3, name: "Asd2-kft", location: "Budapest", rating: 4, recommendedFor: "plumbers", date: "MA", description: "blabla" },
    { id: 4, name: "Asd3-kft", location: "Budapest", rating: 4, recommendedFor: "plumbers", date: "MA", description: "blabla" },
    { id: 5, name: "Asd4-kft", location: "Budapest", rating: 4, recommendedFor: "plumbers", date: "MA", description: "blabla" },
]

const c_description: string = "We specialize in  off-shore oil rigs on the seas of England "
const c_description2: string = "We specialize in wood related work "
const c_description3: string = "We specialize in buildings"
const c_description4: string = "We specialize in long term workforce "
const c_description5: string = "We specialize in short term workforce "


const company: CompanyType = { id: 1, name: "Oil Co", location: "Elm street", company_number: 23762, area: "Oil-rigs", foundIn: "2015", description: c_description, job_offers: [] }
const company2: CompanyType = { id: 2, name: "Lumber Co", location: "Kossuth street", company_number: 23763, area: "Lumber", foundIn: "2014", description: c_description2, job_offers: [] }
const company3: CompanyType = { id: 3, name: "Construction Co", location: "Petofi street", company_number: 23764, area: "Construction", foundIn: "2013", description: c_description3, job_offers: [] }
const company4: CompanyType = { id: 4, name: "LongJobs Co", location: "Adi street", company_number: 23765, area: "Freelance longterm", foundIn: "2012", description: c_description4, job_offers: [] }
const company5: CompanyType = { id: 5, name: "ShortJobs Co", location: "Balassi street", company_number: 23766, area: "Freelance shor-term", foundIn: "2011", description: c_description5, job_offers: [jobOffers[4], jobOffers[5]] }

const companies: CompanyType[] = [
    company,
    company2,
    company3,
    company4,
    company5
]

type View = "Companies" | "Joboffers" | "Applicant"

const AdminScreen = () => {
    const [view, setView] = useState<View>("Companies")

    const handleJobClick = (job: any) => {
        alert(`${job.name} is deleted`)
    }
    const handleCompClick = (comp: any) => {
        alert(`${comp.name} is deleted`)
    }

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
                        {view === "Companies" && companies.map((c, index) => (
                            <button onClick={() => handleCompClick(c)}><CompanyCard key={index} company={c} /></button>
                        ))}
                        {view === "Joboffers" && jobOffers.map((job, index) => (
                            <button onClick={() => handleJobClick(job)}><JobCard key={index} offer={job} /></button>
                        ))}
                        
                    </div>
                </div>

            </div>
        </div>
    )
}
export default AdminScreen