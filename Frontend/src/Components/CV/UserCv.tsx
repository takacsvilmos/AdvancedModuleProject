import { useContext, useEffect, useState } from "react";
import "./UserCV.css"

import EditableWorkExp from "./EditableWorkExp";
import PersonalData from "./PersonalData";
import Introductionedit from "./Introductionedit";
import Navbar from "../Navbar";
import { FetchApplicantData } from "../../Api";
import { ApplicantData } from "../../Services/User";

const UserCv = () => {
    const [applicantData, setApplicantData] = useState<ApplicantData>()
    
    useEffect(()=>{
        const FetchData=async()=>{
            try {
                const response = await FetchApplicantData()
                setApplicantData(response)
            } catch (error) {
                console.log(error)
            }
        }
        FetchData()
    },[])

    if(!applicantData){
        return null
    }

    return (
        <div>
            <Navbar />
            <div className="CV-container">
                <div className="leftsidecv">
                    {<PersonalData personalData={applicantData} />}
                </div>
                <div className="rightsidecv">
                    <div className="intro-container">
                        <h1>Introduction</h1>
                        {<Introductionedit user={applicantData} />}
                    </div>
                { <div className="workexp-container">
                        <h2 className="headline workexp"><i className="fa fa-suitcase"></i>Work Experience</h2>
                        {applicantData?.workExperience.map((experience)=>(<EditableWorkExp key={experience.id} experience = {experience}/>))}
                    </div> }
                <button>Save changes</button>
            </div>




        </div >
        </div >
    );
};

export default UserCv;
