import { createContext, SetStateAction } from 'react';


export type JobOffer = {
    id?: string,
    name: string, 
    location: string, 
    rating?: number, 
    recommendedFor: string, 
    date: string,
    description: string,
    company_id?: string
} | null;

type JobOfferContextType = {
    currentJob: JobOffer | null,
    setCurrentJob: React.Dispatch<SetStateAction<JobOffer | null>>
};

export const JobContext = createContext<JobOfferContextType | null>(null);




