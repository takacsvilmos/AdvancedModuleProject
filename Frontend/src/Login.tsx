import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate("/");
    }

    return (
        <div>
            <p>Login page</p>
            <button onClick={handleClick}>Back to home</button>
        </div>
    );
};

export default Login;