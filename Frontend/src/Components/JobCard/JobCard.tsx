import "./JobCard.css"

type JobOffer = {id: number,name: string, location: string, rating: number, recommendedFor: string, date: string,description: string}
type JobCardProps = {
    offer: JobOffer;    
}


const JobCard = ({ offer }: JobCardProps) => {
    return (
        <div className="jobcard">                
                    
                <h1>{offer.name}</h1>
                

                <div className="jobCardLine">
                    <img className="jobCardImg" src="/location-pin.png" alt="loc" />
                    <h3>Location: {offer.location}</h3>
                </div>

                <div className="jobCardLine">
                    <img className="jobCardImg" src="/star.png" alt="rating" />
                    <h3>Rating: {offer.rating} / 5</h3> 
                </div>

                <div className="jobCardLine">
                    <img className="jobCardImg" src="/arrows.png" alt="rec" />
                    <h3>For: {offer.recommendedFor}</h3>
                </div>

                <div className="jobCardLine">
                    <img className="jobCardImg" src="/calendar.png" alt="date" />
                    <h3>{offer.date}</h3>
                </div>
                
                
                           
                
                
            
        </div>
    );
};
export default JobCard