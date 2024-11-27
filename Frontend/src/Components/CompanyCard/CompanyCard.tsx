import "./CompanyCard.css"

type JobOffer = { id: number, name: string, location: string, rating: number, recommendedFor: string, date: string, description: string }
type CompanyType = {
    id: number,
    name: string, 
    location: string, 
    company_number: number, 
    area: string, 
    foundIn: string,
    description: string,
    job_offers: JobOffer[]
} | null;

type Company = {
    company: CompanyType
}

const CompanyCard = ( {company} : Company) => {
    if(!company){
        return (<div>No data</div>)
    }

    return (
        <div className="companycard">
            <div>
                <h1>{company.name}</h1>
                <p>{company.location}</p>
                <p>{company.area}</p>
            </div>
            <div>
                <p>{company.foundIn}</p>
                <p>{company.company_number}</p>
                <p>{company.description}</p>
            </div>
        </div>
    );
};
export default CompanyCard