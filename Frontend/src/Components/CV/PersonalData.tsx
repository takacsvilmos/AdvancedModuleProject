import { useState } from "react"
import "./UserCV.css"

const PersonalData = ({ personalData }: any) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editedPersonalData, setEditedPersonalData] = useState(personalData)
    const [profileImage, setProfileImage] = useState<string | null>(personalData.image)


    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setProfileImage(imageUrl);
        }
    };

    const handleChange = (field: string, value: string) => {
        setEditedPersonalData({ ...editedPersonalData, [field]: value })
    }
    return (

        <div>
            {isEditing ?
                <div>
                    <div className="editing-container">
                        <div className="file-upload">
                            <label htmlFor="profile-image">Upload Profile Image</label>
                            <input
                                id="profile-image"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>
                        {profileImage && (
                            <img src={profileImage} alt="Profile Preview" className="profile-preview" />
                        )}
                    </div>
                    <input
                        value={personalData.name}
                        onChange={(e) => handleChange("name", e.target.value)} />
                    <input
                        value={personalData.profession}
                        onChange={(e) => handleChange("profession", e.target.value)} />
                    <input
                        value={personalData.address}
                        onChange={(e) => handleChange("address", e.target.value)} />
                    <input
                        value={personalData.email}
                        onChange={(e) => handleChange("email", e.target.value)} />
                    <input
                        value={personalData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)} />
                    <p className="languange"><b><i className="fa fa-globe"></i>Languages</b></p>
                    {editedPersonalData.language.map(
                        (lang: string, index: number) => (
                            <div key={index}>
                                <input
                                    type="text"
                                    value={lang}
                                    onChange={(e) => {
                                        const newLanguages = [
                                            ...editedPersonalData.language,
                                        ];
                                        newLanguages[index] =
                                            e.target.value;
                                        setEditedPersonalData({
                                            ...editedPersonalData,
                                            language: newLanguages,
                                        });
                                    }}
                                />
                            </div>
                        )
                    )}



                    <button onClick={() => setIsEditing(false)}>Save</button>
                </div> :
                <div onClick={() => setIsEditing(true)}><div>
                    <div className="leftsidecv">
                        {personalData.image ? (
                            <img src={personalData.image} alt="Profile" />
                        ) : (
                            <div className="empty-avatar">
                                ?
                            </div>
                        )}
                        
                    </div>
                    <h1>{personalData.name}</h1>
                </div>
                    <div>
                        <p><i className="fa fa-briefcase"></i>{personalData.profession}</p>
                        <p><i className="fa fa-home"></i>{personalData.address}</p>
                        <p><i className="fa fa-envelope"></i>{personalData.email}</p>
                        <p><i className="fa fa-phone"></i>{personalData.phone}</p>
                        <p className="languange"><b><i className="fa fa-globe"></i>Languages</b></p>
                        {personalData.language.map((l: string, i: number) =>
                            <div key={i}>
                                <p>{l}</p>

                                <p>level</p>
                            </div>)}

                    </div></div>}
        </div>
    )
}
export default PersonalData