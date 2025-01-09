import { useState } from "react"
import "./UserCV.css"
import { ApplicantData } from "../../Services/User"

type Props ={
    user: ApplicantData
}

const Introductionedit = ({ user }: Props) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editDescription, setEditDescription] = useState(user)

    const handleChange=(key: string, value:string)=>{
        setEditDescription({...editDescription, [key]: value})
    }

    return (
        <div>
            {isEditing?
            <div>
                <input value={user.description} onChange={(e)=>handleChange("description", e.target.value)} />
                <button onClick={()=> setIsEditing(false)}>Save</button>
            
            </div>:
            <div onClick={()=>setIsEditing(true)}>
                <p className="description">{user.description}</p>
            </div>
            }
        </div>

    )
}
export default Introductionedit