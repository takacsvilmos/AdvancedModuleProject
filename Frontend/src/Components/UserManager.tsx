import { useState, useEffect } from "react"
import { EmployerData } from "../Services/Employer"
import { FetchEmployerData, PatchEmployerData } from "../Api"
import CompanyCard from "./CompanyCard/CompanyCard"
import Navbar from "./Navbar"


const EmployerManager = () => {
    const [employerData, setEmployerData] = useState<EmployerData | null>(null)
    const [isEditing, setIsEditing] = useState<boolean>(false)

    useEffect(() => {
        const result = async () => {
            try {
                const response = await FetchEmployerData()
                setEmployerData(response)
            } catch (error) {
                console.log(error)
            }
        }
        result()
    }, [])

    const handleChange = (key: string, value: string) => {
        setEmployerData((prevState) => prevState&&({
            ...prevState,
            [key]: value ?? "",
        }));
    };
    
    const handleSubmit=async(e:any)=>{
        e.preventDefault()
        try {
            const response = await PatchEmployerData(employerData)
        } catch (error) {
            console.log("Something go wrong!")
        }
        setIsEditing(false)
    }

    return (
        <>
            <Navbar />

            {isEditing ?
                <div>
                    <form onSubmit={handleSubmit} >
                        <input value={employerData?.companyName??""} onChange={(e) => handleChange("companyName", e.target.value)} />
                        <input value={employerData?.address??""} onChange={(e) => handleChange("address", e.target.value)} />
                        <input value={employerData?.email??""} onChange={(e) => handleChange("email", e.target.value)} />
                        <input value={employerData?.phone??""} onChange={(e) => handleChange("phone", e.target.value)} />
                        <input value={employerData?.description??""} onChange={(e) => handleChange("description", e.target.value)} />
                        <button>Save</button>
                    </form>
                </div> :
                <>
                    <CompanyCard company={employerData} />
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </>
            }
        </>
    )
}
export default EmployerManager