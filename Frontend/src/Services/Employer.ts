import { createContext } from "react";


export type JobOffer = {
  id: string,
  name: string,
  companyName: "",
  location: string, 
  rating: number, 
  recommendedFor: string, 
  date: string,
  email: string,
  description: string,
  employerId: string,
  employer: EmployerData
};


export type EmployerData = {
  id: string,
  email: string,  
  companyName: string,
  field: string[],
  address: string,    
  phone: number,
  description: string,
  jobOffers: JobOffer[]
}

export type EmployerContextType = {
  employer: EmployerData | null;
  setEmployer: React.Dispatch<React.SetStateAction<EmployerData | null>>;
};

export const EmployerContext = createContext<EmployerContextType | null>(null);
