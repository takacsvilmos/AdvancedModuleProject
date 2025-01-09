import Login from "./Login";
import "./Login&SignUp.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../Services/Auth";


type LoginProps = {
    setView: (view: "home" | "login" | "signup") => void
}

const SignUp = ({ setView }: LoginProps) => {
    //const [user, setUser] = useState<User>({Email: "", Password: "", Role: ""})
    const [role, setRole] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const { logIn } = useContext(AuthContext);


    const handleSignUp = async (e: any) => {
        e.preventDefault()

        const user = { Email: email, Password: password, Role: role, Username: name }
        console.log(typeof user);
        console.log(user);


        try {
            const response = await fetch(`api/Auth/Register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            })
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                alert("Registration succefull")
                logIn();
                setView("home")
            }


        } catch (error) {
            console.error("Error:", error)
        }
    };


    return (
        <div className="container">
            <div className="form-box">
                <h1>Sign Up</h1>
                <form onSubmit={(e) => handleSignUp(e)}>
                    <input type="radio" id="Employer" name="role" value="Employer" onChange={(e) => setRole(e.target.value)} />
                    <label htmlFor="Employer">Employer</label>

                    <input type="radio" id="Applicant" name="role" value="Applicant" onChange={(e) => setRole(e.target.value)} />
                    <label htmlFor="Applicant">Applicant</label><br />

                    <label htmlFor="password">Password:</label>
                    <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} required /><br />

                    <label htmlFor="email">Email:</label>
                    <input name="email" type="email" onChange={(e) => setEmail(e.target.value)} required /><br />

                    <label htmlFor="name">Username:</label>
                    <input name="name" type="username" onChange={(e) => setName(e.target.value)} required /><br />

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;