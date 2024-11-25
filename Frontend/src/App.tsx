import { useState } from 'react';
import Home from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthContext } from './Services/Auth';
import { ProfilePanelContext } from './Services/ProfilePanalAuth';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
]);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      logIn: () => { setIsLoggedIn(true) },
      logOut: () => setIsLoggedIn(false)
    }}>
      <ProfilePanelContext.Provider value={{
        isOpen,
        doOpen: ()=>{ setIsOpen(true)},
        onClose: ()=>{ setIsOpen(false)},
      }}>
      <RouterProvider router={router} />
      </ProfilePanelContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;

