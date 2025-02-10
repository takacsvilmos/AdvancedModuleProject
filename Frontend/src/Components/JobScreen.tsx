import { JobContext } from "../Services/JobContext";
import { JobOffer } from "../Services/Employer";
import { useContext, useState, useEffect } from "react";
import { FetchJobOffers } from "../Api";
import { FetchCompanies } from "../Api";
import ProfilePanel from "./ProfilePanel/ProfilePanel";
import Company from "./Company/Company";
import "./JobScreen.css";
import "./ProfilePanel/ProfilePanel.css";
import Navbar from "./Navbar";
import { EmployerData } from "../Services/Employer";

const JobScreen = () => {
    const jobContext = useContext(JobContext);
    const [jobOffers, setJobOffers] = useState<JobOffer[]>([]);
    const [companies, setCompanies] = useState<EmployerData[]>([]);
    const [selectedCompany, setSelectedCompany] = useState<EmployerData | null>(null);
    const [selectedJobs, setSelectedJobs] = useState<JobOffer[]>([]);

    if (!jobContext) {
        throw new Error("No Data");
    }

    const { currentJob } = jobContext;

    if (!currentJob) {
        return <div>No job selected. Please go back and select a job.</div>;
    }

   
    useEffect(() => {
        const getAllOffers = async () => {
            try {
                const response = await FetchJobOffers();                            
                setJobOffers(response);
                
                
                const filteredJobs = response.filter(
                    (job: JobOffer) => job.employerId === currentJob.employerId
                );                
                setSelectedJobs(filteredJobs);
            } catch (error) {
                console.error(error);
            }
        };
        getAllOffers();
    }, []);
    

    
    useEffect(() => {
        const getAllEmployers = async () => {
            try {
                const response = await FetchCompanies();                
                setCompanies(response);

                
                const company = response.find(
                    (company: EmployerData) => company.id === currentJob.employerId
                );                
                setSelectedCompany(company);
            } catch (error) {
                console.error(error);
            }
        };
        getAllEmployers();
    }, []);

    

    /* if (!selectedJobs || selectedJobs.length === 0) {
        return "No jobs";
    } */

    /* console.log("Selected Jobs:", selectedJobs);
    console.log("Selected Company:", selectedCompany); */
    console.log(companies)

    return (
        <>
            <Navbar />
            <div className="jobScreenContainer">
                <div className="jobScreenCompany">
                    {selectedCompany ? (
                        <Company company={selectedCompany} jobs={selectedJobs} />
                    ) : (
                        <p>Company not found</p>
                    )}
                </div>
                <div className="jobScreenJob">
                    <h1>Job description</h1>
                    <p>{currentJob.name}</p>
                    <p>Rating: {currentJob.rating}</p>
                    <p>Looking for: {currentJob.recommendedFor}</p>
                    <p>Where: {currentJob.location}</p>
                    <p>Created: {currentJob.date}</p>
                    <p>{currentJob.description}</p>
                    <button>Apply with CV</button>
                </div>
            </div>
            <ProfilePanel />
        </>
    );
};

export default JobScreen;
