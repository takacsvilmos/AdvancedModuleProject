import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Home = ()=>{
    const navigate = useNavigate();
    const [JobsData, setJobsData] = useState<string[]>([]);

    useEffect(()=>{
        const fetchJobs = async () => {
            try {
                const response = await fetch("https://localhost:7119/Service/jobs", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json(); // Parse the JSON response
                setJobsData(data); // Update the state with fetched jobs
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        fetchJobs();
    }, [])

    const handleClick = ()=>{
        navigate("/login");
    }
    const handleClickSignUp = ()=>{
        navigate("/SignUp");
    }

    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                {
                    JobsData.map(job => <li>{job}</li>)
                }
            </ul>
            <button onClick={handleClick}>Go to login!</button>
            <button onClick={handleClickSignUp}>Sign Up!</button>
        </div>
    );
};

export default Home;