import JobContainer from "../Components/JobContainer/JobContainer";



export type CompanyType = {
    id: number,
    name: string, 
    location: string, 
    company_number: number, 
    area: string, 
    foundIn: string,
    description: string,
    job_offers: JobOffer[]
} | null;