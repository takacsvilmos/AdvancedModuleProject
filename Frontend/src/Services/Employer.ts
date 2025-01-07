import { createContext } from "react";
import JobContainer from "../Components/JobContainer/JobContainer";

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

export type EmployerData = {
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
  employer: EmployerData;
  setEmployer: React.Dispatch<React.SetStateAction<EmployerData>>;
};

export const EmployerContext = createContext<EmployerContextType | null>(null);