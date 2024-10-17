import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate("/");
    }

    return (
        <div>
            <p>Login page</p>
            <form action="">
                <label htmlFor="username">username:</label>
                <input name="username" type="text" />
                <label htmlFor="password">password:</label>
                <input name="password" type="text" />
                <button>Login</button>
            </form>
            <button onClick={handleClick}>Back to home</button>
        </div>
    );
};

export default Login;