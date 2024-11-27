import { createContext } from "react";

export type WorkExperience = {
    id: number;
    company: string;
    role: string;
    startingdate: string;
    enddate: string;
    description: string;
}


export type User = {
  id: number;
  name: string;
  age: number;
  role: string;
  language: string[];
  profession: string[];
  address: string;
  phone: string;
  email: string;
  description: string;
  workexperience: WorkExperience[]
  image: string | null; 
};

export type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

export const UserContext = createContext<UserContextType | null>(null);