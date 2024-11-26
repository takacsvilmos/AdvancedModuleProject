import { createContext } from "react";

export type User = {
  id: number;
  name: string;
  age: number;
  role: string;
  skills: string[];
  cv: string;
};

export type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

export const UserContext = createContext<UserContextType | null>(null);