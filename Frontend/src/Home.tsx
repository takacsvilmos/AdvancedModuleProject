import { useNavigate } from "react-router-dom";

const Home = ()=>{
    const navigate = useNavigate();


    const handleClick = ()=>{
        navigate("/login");
    }

    return (
        <div>
            <p>Home Page</p>
            <button onClick={handleClick}>Go to login!</button>
        </div>
    );
};

export default Home;