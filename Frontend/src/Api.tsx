import { EmployerData } from "./Services/Employer";

export const loginUserApi = async (loginData: {
  email: string;
  password: string;
}) => {
  try {
    const response = await fetch("/api/Auth/Login", {
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
    localStorage.setItem("authToken", data.token);
    return {
      username: data.userName,
      role: data.role,
      email: data.email,
    };
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const fetchEmployerData = async (email: string | undefined) => {
  try {
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
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    if (!response.ok) {
      console.error(`Error: ${response.status} ${response.statusText}`);
      return null;
    }
    const data = await response.json();
    console.log("Data received:", data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};

export const FetchJobOffers = async () => {
    try {
        const response = await fetch("/api/Applicant/jobOffers", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await response.json();
        if(data === null){
            console.log("no data")
        }
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}

export const FetchCompanies = async () => {
    try {
        const response = await fetch("/api/Applicant/employers", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        const data = await response.json();
        if(data === null){
            console.log("no data")
        }
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}

export const FetchEmployerData = async() => {
  try{
  const jwtToken = localStorage.getItem("authToken");
    if (!jwtToken) {
      console.error("No token found. Please log in.");
      //route back to login
      return;
    }    
        const response = await fetch(`/api/Employer/EmployerData`,{
            method: "GET",
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwtToken}`
            },
        })
        if(!response.ok){
            console.error(`Error: ${response.status} ${response.statusText}`)
            return null
        }
        const data = await response.json()
        return data
        
    } catch (error) {
        console.log(error)
        return null
    }
}


export const PatchEmployerData = async (employerData: EmployerData) => {
  try {
    const jwtToken = localStorage.getItem("authToken");
    if (!jwtToken) {
        console.error("No token found. Please log in.");
        //route back to login
        return;
    }
    
    const response = await fetch("api/Employer/EditEmployerData", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(employerData),
    });
    if (!response.ok) {
        console.error(`Error: ${response.status} ${response.statusText}`);
        return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Some error occured!", error);
    return null;
  }
};


export const FetchAllEmployers=async()=>{
    const jwtToken = localStorage.getItem("authToken")
    if (!jwtToken) {
        console.error("No token found. Please log in.")
        return
    }
    try {
        const response = await fetch("/api/Admin/getEmployers",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwtToken}`
            }
        })
        if (response.status === 401) {
            throw new Error("Unauthorized. Please log in again.");
        }

        if (response.status === 404) {
            throw new Error("No employers found.");
        }

        if (!response.ok) {
            throw new Error("Something went wrong in the backend.");
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const FetchApplicantData = async() => {
    const jwtToken = localStorage.getItem("authToken")
    if (!jwtToken) {
        console.error("No token found. Please log in.")
        return
    }
    try {
        const response = await fetch("/api/Applicant/getApplicantData",{
            method: "GET",
            headers: {"Content-Type": "application/json",
            "Authorization": `Bearer ${jwtToken}`
            }
        })
        if(!response.ok){
            throw new Error("Somthing go wrong")
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const FetchAllApplicant=async()=>{
    const jwtToken = localStorage.getItem("authToken")
    if (!jwtToken) {
        console.error("No token found. Please log in.")
        return
    }
    try {
        const response = await fetch("/api/Admin/GetAllApplicant",{
            method: "GET",
            headers: {"Content-Type": "application/json",
            "Authorization": `Bearer ${jwtToken}`
            }
        })
        if(!response.ok){
            throw new Error("Something go wrong")
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}