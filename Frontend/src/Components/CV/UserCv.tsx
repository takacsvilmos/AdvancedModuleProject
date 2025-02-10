import { useContext } from "react";
import "./UserCV.css"
import { UserContext } from "../../Services/User";
import EditableWorkExp from "./EditableWorkExp";
import PersonalData from "./PersonalData";
import Introductionedit from "./Introductionedit";
import Navbar from "../Navbar";

const UserCv = () => {
    const userContext = useContext(UserContext)
    if (!userContext) {
        throw new Error("No User")
    }

    const { user } = userContext

    return (
        <div>
            <Navbar />
            <div className="CV-container">
                <div className="leftsidecv">
                    {<PersonalData personalData={user} />}
                </div>
                <div className="rightsidecv">
                    <div className="intro-container">
                        <h1>Introduction</h1>
                        {<Introductionedit user={user} />}
                    </div>
                { /*<div className="workexp-container">
                        <h2 className="headline workexp"><i className="fa fa-suitcase"></i>Work Experience</h2>
                        {user.workexperience.map((experience)=>(<EditableWorkExp key={experience.id} experience = {experience}/>))}
                    </div> */}
                <button>Save changes</button>
            </div>




        </div >
        </div >
    );
};

export default UserCv;
