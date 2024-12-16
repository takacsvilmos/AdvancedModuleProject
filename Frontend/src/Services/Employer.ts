import { createContext } from "react";
import JobOffer from "../Components/JobContainer/JobContainer";

export type Listing = {
    id: number;
    company_id: number;
    company_name: string;
    field: string[];
    location: string;
    req_work_exp: number;
    salary: number;
    working_hours: number;
    phone: number;
    email: string;
    description: string;
    image: string | null;
}

export type Employer = {
  id: number;
  company_name: string;
  field: string[];
  address: string | null;
  phone: number;
  email: string;
  description: string | null;
  job_offers: Listing[];
  image: string | null; 
};

export type EmployerContextType = {
  employer: Employer;
  setEmployer: React.Dispatch<React.SetStateAction<Employer>>;
};

export const UserContext = createContext<EmployerContextType | null>(null);