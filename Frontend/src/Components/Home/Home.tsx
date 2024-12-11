import { useState, useContext } from "react";
import "./Home.css";
import SignUp from "../Login/SignUp";
import Login from "../Login/Login";
import { AuthContext } from "../../Services/Auth";
import ProfilePanel from "../ProfilePanel/ProfilePanel";
import JobOffer from "../JobOffer/JobOffer";
import { UserContext } from "../../Services/User";
import Navbar from "../Navbar";
import AdminScreen from "../Admin/AdminScreen";

type View = "home" | "login" | "signup" | "admin"

const Home = () => {
    const [view, setView] = useState<View>("home")
    const { isLoggedIn } = useContext(AuthContext)
    const userContext = useContext(UserContext)

    if (!userContext) {
        throw new Error("No User")
    }

    const { user } = userContext
    console.log(user.role)

    return (
        <>
            <Navbar view={view} setView={setView} />
            {user.role === "admin" && isLoggedIn ? <AdminScreen/> :
            <div className="content">
                {isLoggedIn ? view === "home" && <h1>Welcome {user.name}!</h1> : view === "home" && <h1>HomePage</h1>}
                {view !== "signup" && view !== "login" && <JobOffer />}
                {view === "signup" && <SignUp setView={setView} />}
                {view === "login" && <Login setView={setView} />}
            </div>}
            <ProfilePanel />
        </>
    )
}

export default Home
