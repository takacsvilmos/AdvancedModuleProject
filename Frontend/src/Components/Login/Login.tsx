import "./Login&SignUp.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../Services/Auth";
import { UserContext } from "../../Services/User";
import { loginUserApi } from "../../Api";
import { User } from "../../Services/User";

type LoginProps = {
    setView: (view: "home" | "login" | "signup" | "admin" | "employer") => void;
}

const Login = ({ setView }: LoginProps) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { logIn } = useContext(AuthContext)
    const userContext = useContext(UserContext)
    
    if (!userContext) {
        throw new Error("no user!")
    }
    const { setUser } = userContext //!!!!

    const handleSubmit = async (e: any) => {
        e.preventDefault();
    
        const loginUser = { email, password };
    
        try {
            const user: User = await loginUserApi(loginUser);
            setUser(user)
            logIn()
    
            if (user.role === "admin") {
                setView("admin")
            } else {
                setView("home");
            }
    
        } catch (error) {
            console.error("Error during login:", error)
            alert("Invalid email or password")
        }
    }

    return (
        <div className="container">
            <div className="form-box">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="email">Email:</label>
                    <input name="email" type="email" onChange={(e) => setEmail(e.target.value)} /><br />

                    <label htmlFor="password">Password:</label>
                    <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} /><br />

                    <button type="submit">LogIn</button>
                </form>
            </div>
        </div>
    );
};

export default Login;