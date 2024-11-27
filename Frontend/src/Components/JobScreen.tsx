import { JobContext } from "../Services/JobContext";
import { useContext } from "react";
import { ProfilePanelContext } from "../Services/ProfilePanalAuth";
import { AuthContext } from "../Services/Auth";
import { useNavigate } from "react-router-dom";
import ProfilePanel from "./ProfilePanel/ProfilePanel";
import Company from "./Company/Company";
import { CompanyType } from "../Services/CompanyTypes";
import JobOffer, { jobOffers } from "./JobOffer/JobOffer";
import "./JobScreen.css";

import "./ProfilePanel/ProfilePanel.css"



const JobScreen = () => {
    const jobContext = useContext(JobContext);
    const { isOpen, onClose, doOpen } = useContext(ProfilePanelContext);
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()

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




    if (!jobContext) {
        throw new Error("JobContext must be used within a JobContext.Provider");
    }

    const { currentJob } = jobContext;

    if (!currentJob) {
        return <div>No job selected. Please go back and select a job.</div>;
    }
    const handleProfileClick = () => {

        if (isOpen) {
            onClose()
        } else {
            doOpen()
        }


    }
    const handleLogout = () => {
        logOut();
        navigate("/")

    };
    const backToHome = () => {
        navigate("/")
    }

    const selectedCompany = companies.find((company) => company?.id === currentJob.company_id);
    const selectedJobs = selectedCompany?.job_offers.filter(job => job.id !== currentJob.id);
    if (!selectedJobs) {
        return "No jobs"
    }

    return (
        <>
            <div className="navbar">
                <h1>BlueJobs</h1>

                <div>
                    <button onClick={handleProfileClick}>Profile</button>
                    <button onClick={handleLogout}>Logout</button>
                    <button onClick={backToHome}>Home</button>
                </div>

            </div>
            <div className="jobScreenContainer">
                <div className="jobScreenCompany">
                    <>
                        {selectedCompany ? (
                            <Company company={selectedCompany} jobs={selectedJobs} />
                        ) : (
                            <p>Company not found</p>
                        )}
                    </>

                </div>
                <div className="jobScreenJob">
                    <div><h1>Job description</h1></div>
                    <div>{currentJob.name}</div>
                    <div>Rating: {currentJob.rating}</div>
                    <div>Looking for: {currentJob.recommendedFor}</div>
                    <div>Where: {currentJob.location}</div>
                    <div>Created: {currentJob.date}</div>
                    <p>{currentJob.description}</p>
                    <div><button>Apply with CV</button></div>
                </div>
            </div>

            <ProfilePanel />
        </>
    )
}
export default JobScreen