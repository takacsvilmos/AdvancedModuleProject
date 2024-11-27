import { createContext, SetStateAction } from 'react';


export type JobOffer = {
    id: number,
    name: string, 
    location: string, 
    rating: number, 
    recommendedFor: string, 
    date: string,
    description: string,
    company_id: number
} | null;

type JobOfferContextType = {
    currentJob: JobOffer | null,
    setCurrentJob: React.Dispatch<SetStateAction<JobOffer>>
};

export const JobContext = createContext<JobOfferContextType | undefined>(undefined);




