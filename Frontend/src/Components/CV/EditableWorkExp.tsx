import { useContext, useState } from "react";
import { UserContext, WorkExperience } from "../../Services/User";


type Props ={
    experience: WorkExperience
}

const EditableWorkExp = ({ experience }: Props) => {
    const userContext = useContext(UserContext)

    if (!userContext) {
        throw new Error("no")
    }
    const { user } = userContext

    const [isEditing, setIsEditing] = useState(false)
    const [editedExperience, setEditedExperience] = useState<WorkExperience>()

    return (
        <div className="workexp">
            {isEditing ? (
                <div className="editing-container">
                    <div className="input-group">
                        <label>Company:</label>
                        <input
                            type="text"
                            value={editedExperience?.company}
                            onChange={(e) =>
                                editedExperience&&setEditedExperience({
                                    ...editedExperience,
                                    company: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="input-group">
                        <label>Dates:</label>
                        <div className="dates">
                            <input
                                type="text"
                                placeholder="Start Date"
                                value={editedExperience?.startingdate}
                                onChange={(e) =>
                                    editedExperience&&setEditedExperience({
                                        ...editedExperience,
                                        startingdate: e.target.value,
                                    })
                                }
                            />
                            <span> - </span>
                            <input
                                type="text"
                                placeholder="End Date"
                                value={editedExperience?.enddate}
                                onChange={(e) =>
                                    editedExperience&&setEditedExperience({
                                        ...editedExperience,
                                        enddate: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <label>Role:</label>
                        <input
                            type="text"
                            value={editedExperience?.role}
                            onChange={(e) =>
                                editedExperience&&setEditedExperience({
                                    ...editedExperience,
                                    role: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="input-group">
                        <label>Description:</label>
                        <textarea
                            value={editedExperience?.description}
                            onChange={(e) =>
                                editedExperience&&setEditedExperience({
                                    ...editedExperience,
                                    description: e.target.value,
                                })
                            }
                        />
                    </div>
                    <button onClick={() => setIsEditing(true)}>Save</button>
                </div>
            ) : (
                <div onClick={() => setIsEditing(false)}>
                    <h5 className="workname"><b>{experience.company}</b></h5>
                    <h6 className="workdate">
                        <i className="fa fa-calendar"></i>{experience.startingdate} - {experience.enddate}
                    </h6>
                    <h6>{experience.role}</h6>
                    <p>{experience.description}</p>
                </div>
            )}
        </div>
    );
};

export default EditableWorkExp
