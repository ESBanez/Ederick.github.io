import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../sass/TeamCard.scss";



const team = [
    {
        name: "Jenna Smith",
        id: 1,
        position: "Founder & CEO",
        image: "/rm-image.png",
        facebook: "https://www.facebook.com/",
        Github: "https://Github.com/",
        linkedin: "https://www.linkedin.com/",
        instagram: "https://www.instagram.com/",
    },
    {
        name: `Klarizza Hernandez`,
        id: 3,
        position: "Founder & CEO",
        image: "/rm-imagee.png",
        facebook: "https://www.facebook.com/",
        Github: "https://Github.com/",
        linkedin: "https://www.linkedin.com/",
        instagram: "https://www.instagram.com/",
    },
    {
        name: `Ederick S. Bañez`,
        id: 2,
        position: "Founder & CEO",
        image: "/creator.png",
        facebook: "https://www.facebook.com/",
        Github: "https://Github.com/",
        linkedin: "https://www.linkedin.com/",
        instagram: "https://www.instagram.com/",
    },

]

function TeamCard() {
    return (
    <div className="container" style={{display: 'flex', justifyContent: 'center', height: '50vh',}}>
        {team.map((member) => (
          <div className="container" id="cardcontainer" key={member.id}>
            <div className="cardi" >
                <div className="card-image">
                    <img src={member.image} alt={member.name} height="200rem"/>
                </div>
                <ul className="social-icons">
                    <li>
                        <a href={member.facebook} className="fab">
                            <FontAwesomeIcon icon={faFacebook} className="fab"/>
                        </a>
                    </li>
                    <li>
                        <a href={member.instagram} className="fab">
                            <FontAwesomeIcon icon={faInstagram} className="fab"/>
                        </a>
                    </li>
                    <li>
                        <a href={member.Github} className="fab">
                            <FontAwesomeIcon icon={faGithub} className="fab"/>
                        </a>
                    </li>
                    <li>
                        <a href={member.linkedin} className="fab">
                            <FontAwesomeIcon icon={faLinkedin} className="fab"/>
                        </a>
                    </li>
                </ul>
                {/* <div className="details">
                    <h2>
                        {member.name}
                    </h2>
                    <h2>
                        <span className="job-title">{member.job}</span>
                    </h2>
                </div> */}
            </div>
          </div>
        ))}
      </div>
    );
}

export default TeamCard;
