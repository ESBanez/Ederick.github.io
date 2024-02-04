import { useState } from 'react';
import styled from 'styled-components';  // Import styled from styled-components
import SkillCard from './SkillCard';
import MovingPictures from './MovingPictures';
import "../sass/SkillsCarousel.scss"
import { Link } from 'react-router-dom';



const circling = styled.div` /* Define the keyframes here */ `;

function SkillsCarousel() {
  const numImages = [
    {
      title: 'Front End',
      index: 0,
      dialog: `
      I initially delved into the realm of programming by acquiring proficiency in Frontend.
      This foundational skill marked the inception of my programming journey and holds significant importance.
      I value Frontend expertise as it empowers me to express my creativity and innovation in the programming domain.
    `,
      src: '/1.png',
      value: 3.5,
      thumbnail: "/portfront.png",
      author: 'Ederick'
    },
    {
      title: 'Back End',
      index: 1,
      dialog: `
      I honed my skills in Back End development. 
      This fundamental proficiency not only kickstarted my exploration of the programming landscape but also stands as a pivotal aspect of my expertise.
      I hold Back End proficiency in high regard, appreciating its role in enabling me to architect robust and dynamic solutions in the realm of programming.
    `,
          src: '/2.png',
      value: 3,
      thumbnail: "/portback.png",
      author: 'Banez'
    },
    {
      title: 'Logo Maker',
      index: 2,
      dialog: `
      I've honed my skills in Logo Making—an art that initiated my creative exploration.
      I value the significance of crafting distinctive logos, showcasing my ability to convey unique brand identities through design.
    `,
          src: '/3.png',
      value: 4,
      thumbnail: "/portlogo.png",
      author: 'Kcirede'
    },
    {
      title: 'Ai Content',
      index: 3,
      dialog: `
        In AI content creation, I casually explore the capabilities of various tools such as ChatGPT, Codemium, Tabnine and Bing.
        These AI-driven platforms provide me with valuable insights and assistance in generating creative and informative content.
        Leveraging these technologies enhances my content creation process, allowing for more innovative and efficient outcomes.
      `,
      src: '/4.png',
      value: 4,
      thumbnail: "/portai.png",
      author: 'Zeinab'
    },
  ];

  const [selectedSkill, setSelectedSkill] = useState(0);

  const handleSkillClick = (index) => {
    setSelectedSkill(index === selectedSkill ? null : index);
  };

  return (
    <div>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
        {numImages.map((image, index) => (
          <SkillCard
            key={image.index}
            skill={image}
            selected={index === selectedSkill}
            onClick={() => handleSkillClick(index)}
          />
        ))}
      </div>
      <br />
      {selectedSkill !== null && (
      <div className="my-1">
        <div className="my-1" style={{ display: "flex", justifyContent: "center" }}>
          <div className="container bg-black rounded-lg overflow-hidden md:flex"
            style={{
              display: "flex",
              boxShadow: '1px 4px 4px rgb(0,255,161)',
              transition: 'box-shadow 0.3s ease-in-out',
              animation: `${circling} 2s linear infinite`,  // Reference the keyframes here
            }}>
            <div className="col-md-3"
              style={{
                backgroundImage: `url(${numImages[selectedSkill].thumbnail})`,
                height: " 45rem",
                width: "25rem",
                margin: "1rem 0 1rem 0",
                backgroundSize: "cover",
                objectFit: "cover",  // Add this property to maintain aspect ratio
              }}
            />
            <div className="content-container col-9"  style={{ backgroundColor: "black" }}>
              <div className="p-4 md:p-5 col-11" style={{ overflow: "scroll", clipPath: "fill-box", fontFamily: "fangsong", textIndent: "5rem", fontSize: "x-large" }}>
                  <br/><br/>
                  <p className="font-bold text-xl md:text-2xl d-none" style={{ whiteSpace: 'pre-line' }}>{numImages[selectedSkill].title}</p>
                  <p className="text-white md:text-lg overflow-hidden" style={{ whiteSpace: 'pre-line', textAlignLast: 'auto' }}>{numImages[selectedSkill].dialog}</p>
                </div>
                  <p className="text-white md:text-lg overflow-hidden" style={{ whiteSpace: 'pre-line', textAlignLast: 'right', fontFamily: "monospace", marginRight:"10rem" }}>-{numImages[selectedSkill].author}</p>

                <div className="p-4 md:p-5 bg-white-100">
                  <div className="sm:flex sm:justify-between sm:items-center">
                    <div className="px-5 mx-4" style={{display: "flex", justifyContent:"right"}}>
                      <Link to="/projects" className="faulty-letter glowing-btn-click glowing-btn teko" style={{ fontSize: "small" }}>View Projects</Link>
                    </div>
                    <br/><br/>
                    <div>
                      <div className="text-lg text-white-700 teko"><span className="text-gray-900 font-bold">Tools I use</span> </div>
                      <div className="flex items-center" style={{width: "inherit"}}>
                        <MovingPictures/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
     </div>

      )}
    </div>
  );
}

export default SkillsCarousel;
