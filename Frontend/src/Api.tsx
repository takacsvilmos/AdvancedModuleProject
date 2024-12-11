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