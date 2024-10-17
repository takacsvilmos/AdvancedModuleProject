import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate("/login");
    }

    return (
        <div>
            <p>Sign Up</p>
            <form action="">
                <label htmlFor="username">username:</label>
                <input name="username" type="text" required/>
                <label htmlFor="password">password:</label>
                <input name="password" type="text" required/>
                <label htmlFor="email">email:</label>
                <input name="email" type="email" required/>
                <button>Sign Up</button>
            </form>
            <button onClick={handleClick}>Back to home</button>
        </div>
    );
};

export default SignUp;