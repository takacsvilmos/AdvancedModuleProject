import { useState, useEffect } from 'react';
import Home from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthContext } from './Services/Auth';
import { ProfilePanelContext } from './Services/ProfilePanalAuth';
import './App.css';
import JobScreen from './Components/JobScreen';
import { JobContext } from './Services/JobContext';
import { JobOffer } from './Services/JobContext';
import { UserContext, User } from './Services/User';
import UserManager from './Components/UserManager';
import UserCv from './Components/CV/UserCv';
import JobUserCreationPage from './Components/JobOfferCreationPage/JobOfferCreationPage';
import { EmployerContext, EmployerData } from './Services/Employer';
import { fetchEmployerData } from './Api';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/joboffer/:id",
    element: <JobScreen />,
  },
  {
    path: "/usermanager/:id",
    element: <UserManager />
  },
  {
    path: "usercv/:id",
    element: <UserCv />
  },
  {
    path: "/joboffercreation",
    element: <JobUserCreationPage />
  }

]);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState<JobOffer>(null);
  const [user, setUser] = useState<User | null>(null)
  const [employer, setEmployer] = useState<EmployerData | null>(null)

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      logIn: () => { setIsLoggedIn(true) },
      logOut: () => setIsLoggedIn(false)
    }}>
      <UserContext.Provider value={{ user, setUser }}>
        <EmployerContext.Provider value={{ employer, setEmployer }}>
          <ProfilePanelContext.Provider value={{
            isOpen,
            doOpen: () => { setIsOpen(true) },
            onClose: () => { setIsOpen(false) },
          }}>
            <JobContext.Provider value={{ currentJob, setCurrentJob }}>
              <RouterProvider router={router} />
            </JobContext.Provider>
          </ProfilePanelContext.Provider>
        </EmployerContext.Provider>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;

