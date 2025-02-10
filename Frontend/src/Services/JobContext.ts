import { createContext, SetStateAction } from 'react';
import { JobOffer } from './Employer';


type JobOfferContextType = {
    currentJob: JobOffer,
    setCurrentJob: React.Dispatch<SetStateAction<JobOffer>>
};

export const JobContext = createContext<JobOfferContextType | null>(null);




