import { createContext } from "react";


export type JobOffer = {
  id: string,
  name: string, 
  location: string, 
  rating: number, 
  recommendedFor: string, 
  date: string,
  description: string,
  company_id: string
} | null;


export type EmployerData = {
  address: string
  companyName: string;
  description: string 
  email: string;
  field: string[];
  id: number;
  phone: number;
} | null

export type EmployerContextType = {
  employer: EmployerData | null;
  setEmployer: React.Dispatch<React.SetStateAction<EmployerData | null>>;
};

export const EmployerContext = createContext<EmployerContextType | null>(null);
