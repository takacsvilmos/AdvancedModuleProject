import { ApplicantData } from "./Services/User";

export const loginUser = async (loginData: { email: string; password: string })  => {
    try {
        const response = await fetch("http://localhost:5177/Service/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
        });

        if (!response.ok) {
            throw new Error("Invalid email or password");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};

export const SignUpUser = async (user: {Email: string; Password: string; Role: string}) => {
    try {
        const response = await fetch("http://localhost:5177/Service/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error("Something go wrong! try again later");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }

    
}

export const loginUserApi = async (loginData: { email: string; password: string })  => {
    try {
        const response = await fetch("/api/Auth/Login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
        });

        if (!response.ok) {
            throw new Error("Invalid email or password")
        }

        const data = await response.json();
        localStorage.setItem("authToken", data.token);
        return {
            username: data.username,
            email: data.email,
            role: data.role,
        }
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

export const fetchEmployerData = async (email: string | undefined)=>{
    try{
        const jwtToken = localStorage.getItem("authToken");
        if (!jwtToken) {
            console.error("No token found. Please log in.");
            //route back to login
            return;
        }
        const response = await fetch(`api/Employer/${email}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwtToken}`
            },
        })

        if(!response.ok){
            console.error(`Error: ${response.status} ${response.statusText}`);
            return null;
        }
        const data = await response.json();
        console.log("Data received:" , data);
        return data;
    }catch(error){
        console.error("Error:", error);
        return null;
    }
}