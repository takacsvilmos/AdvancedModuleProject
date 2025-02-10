import "./CompanyCard.css"
import { EmployerData } from "../../Services/Employer";

type Company = {
    company: EmployerData
}

const CompanyCard = ( {company} : Company) => {
    if(!company){
        return (<div>No data</div>)
    }

    return (
        <div className="companycard">
            <div>
                <h1>{company.companyName}</h1>
                <p>{company.address}</p>
                <p>{company.field.map((field)=> <p>{field}</p>)}</p>
            </div>
            <div>
                <p>{company.email}</p>
                <p>{company.phone}</p>
                <p>{company.description}</p>
            </div>
        </div>
    );
};
export default CompanyCard