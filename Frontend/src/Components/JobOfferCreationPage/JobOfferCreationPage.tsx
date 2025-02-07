import { useState, useContext } from "react";
import Navbar from "../Navbar";
import { UserContext } from "../../Services/User";
import { JobOffer } from "../../Services/JobContext";

const JobUserCreationPage = () => {
    const [jobOffer, setJobOffer] = useState<JobOffer>({
        name: "", 
        location: "", 
        rating: 0,
        recommendedFor: "", 
        date: "", 
        description: "",
        company_id: ""
    });
    const userContext = useContext(UserContext)
    if (!userContext) {
        throw new Error("No User")
    }

    const { user } = userContext

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            const jwtToken = localStorage.getItem("authToken");
            if (!jwtToken) {
                console.error("No token found. Please log in.");
                //route back to login
                return;
            }

            const response = await fetch("/api/Employer/CreateOffer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${jwtToken}`
                },
                body: JSON.stringify(jobOffer)
            })
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            //const result = await response.json();
            alert("Job offer created successfully.");

        } catch (error) {
            console.error("Error creating job offer:", error);
        }

    };

    const handleChange = (key: string, value: string | number) => {
       setJobOffer((prev: JobOffer)=>({   
        ...prev,
        [key]: value,}));
    };


    return (
        <div>
            <Navbar />
            <h1>Job offer creation page</h1>
            <div>
                {user?.role === "Employer" ? (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name: </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={jobOffer?.name}
                            onChange={(e)=> handleChange("name", e.target.value)}
                        />

                        <label htmlFor="location">Location: </label>
                        <input
                            id="location"
                            type="text"
                            name="location"
                            value={jobOffer?.location}
                            onChange={(e)=> handleChange("location", e.target.value)}
                        />

                        <label htmlFor="rating">Rating: </label>
                        <input
                            id="rating"
                            type="number"
                            name="rating"
                            value={jobOffer?.rating}
                            onChange={(e)=> handleChange("rating", e.target.value)}
                            min="0"
                            max="5"
                            step="1"
                        />

                        <label htmlFor="recommendedFor">Recommended For: </label>
                        <input
                            id="recommendedFor"
                            type="text"
                            name="recommendedFor"
                            value={jobOffer?.recommendedFor}
                            onChange={(e)=> handleChange("recommendedFor", e.target.value)}
                        />

                        <label htmlFor="date">Date: </label>
                        <input
                            id="date"
                            type="date"
                            name="date"
                            value={jobOffer?.date}
                            onChange={(e)=> handleChange("date", e.target.value)}
                        />

                        <label htmlFor="description">Description: </label>
                        <textarea
                            id="description"
                            name="description"
                            value={jobOffer?.description}
                            onChange={(e)=> handleChange("description", e.target.value)}
                        />

                        <button className="createJobOffer" type="submit">
                            Create job offer
                        </button>
                    </form>
                ) : (
                    <div>Log in first!</div>
                )}
            </div>

        </div>
    )
}

export default JobUserCreationPage;