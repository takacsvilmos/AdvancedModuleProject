import { useNavigate } from "react-router-dom";

const Home = ()=>{
    const navigate = useNavigate();


    const handleClick = ()=>{
        navigate("/login");
    }
    const handleClickSignUp = ()=>{
        navigate("/SignUp");
    }

    return (
        <div>
            <p>Home Page</p>
            <button onClick={handleClick}>Go to login!</button>
            <button onClick={handleClickSignUp}>Sign Up!</button>
        </div>
    );
};

export default Home;