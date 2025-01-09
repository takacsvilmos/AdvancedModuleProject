import { useContext, useState } from "react";
import { UserContext } from "../../Services/User";

const EditableWorkExp = ({ experience }: any) => {
    const userContext = useContext(UserContext)

    if (!userContext) {
        throw new Error("no")
    }
    const { user } = userContext

    const [isEditing, setIsEditing] = useState(false)
    const [editedExperience, setEditedExperience] = useState(experience)

    return (
        <div className="workexp">
            {isEditing ? (
                <div className="editing-container">
                    <div className="input-group">
                        <label>Company:</label>
                        <input
                            type="text"
                            value={editedExperience.company}
                            onChange={(e) =>
                                setEditedExperience({
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
                                value={editedExperience.startingdate}
                                onChange={(e) =>
                                    setEditedExperience({
                                        ...editedExperience,
                                        startingdate: e.target.value,
                                    })
                                }
                            />
                            <span> - </span>
                            <input
                                type="text"
                                placeholder="End Date"
                                value={editedExperience.enddate}
                                onChange={(e) =>
                                    setEditedExperience({
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
                            value={editedExperience.role}
                            onChange={(e) =>
                                setEditedExperience({
                                    ...editedExperience,
                                    role: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="input-group">
                        <label>Description:</label>
                        <textarea
                            value={editedExperience.description}
                            onChange={(e) =>
                                setEditedExperience({
                                    ...editedExperience,
                                    description: e.target.value,
                                })
                            }
                        />
                    </div>
                    <button onClick={() => setIsEditing(false)}>Save</button>
                </div>
            ) : (
                <div onClick={() => setIsEditing(true)}>
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
