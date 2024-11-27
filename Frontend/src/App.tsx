import { useState } from 'react';
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

]);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState<JobOffer>(null)
  const [user, setUser] = useState<User>({
    id: 1,
    name: "John Doe",
    age: 30,
    role: "adminnnnn",
    language: ["English", "Spanish", "Deutsch"],
    profession: ["Plumber"],
    address: "123 Main St, London",
    phone: "123-456-7890",
    email: "john.doe@example.com",
    description: "I work as a plumber for 60 years now, and i'm so exited to countinue this rest of my life",
    workexperience: [
      {
        id: 1,
        company: "PlumberCorp",
        role: "Toilet output designer",
        startingdate: "Jan 1995",
        enddate: "Present",
        description: "Making beautiful outputs"
      }
    ],
    image: "",
  })

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      logIn: () => { setIsLoggedIn(true) },
      logOut: () => setIsLoggedIn(false)
    }}>
      <UserContext.Provider value={{ user, setUser }}>
        <ProfilePanelContext.Provider value={{
          isOpen,
          doOpen: () => { setIsOpen(true) },
          onClose: () => { setIsOpen(false) },
        }}>
          <JobContext.Provider value={{ currentJob, setCurrentJob }}>
            <RouterProvider router={router} />
          </JobContext.Provider>
        </ProfilePanelContext.Provider>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;

