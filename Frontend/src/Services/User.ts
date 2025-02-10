import { createContext } from "react";

export type WorkExperience = {
    id: number;
    company: string;
    role: string;
    startingdate: string;
    enddate: string;
    description: string;
}


export type ApplicantData = {
  age: number;
  language: string[];
  profession: string[];
  address: string;
  phone: string;
  email: string;
  description: string;
  workExperience: WorkExperience[];
  image: string | null; 
}

export type User = {
  username: string;
  role: string;
  email: string;
};

export type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export const UserContext = createContext<UserContextType | null>(null);