import { useState } from 'react';
import Home from './Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthContext } from './Services/Auth';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
]);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      logIn: () => { setIsLoggedIn(true) },
      logOut: () => setIsLoggedIn(false)
    }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;

