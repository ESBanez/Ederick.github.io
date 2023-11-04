import { useRef, useState } from 'react';
// import { EllipsisOutlined } from '@ant-design/icons';
import { Divider,Tour } from 'antd';
import "../sass/BeginTour.scss"
import "../sass/BeginTourCard.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";



const BeginTour = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);

  const steps = [
    {
      title: 'Upload File',
      description: 'Put your files here.',
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Save',
      description: 'Save your changes.',
      target: () => ref2.current,
    },
    {
      title: 'Other Actions',
      description: 'Click to see other actions.',
      target: () => ref3.current,
    },
  ]

  const cardo = [
    {
      Name: "Skills",
      id: 1,
      ref:ref1,
      Icon: faGraduationCap,
      Paragraph: "This is a list of my skills that I have acquired both through bootcamp and practical experience."
    },
    {
      Name: "Projects",
      id: 2,
      ref:ref2,
      Icon: faBriefcase,
      Paragraph: "This is a list of my projects that I have worked on."
    },
    {
      Name: "Blog",
      id: 3,
      ref:ref3,
      Icon: faBlog,
      Paragraph: "Upcoming blog to be posted online wait for release through Amazon."
    }
  ];
                                //   ref={ref1}, ref={ref2, ref={ref3}
                                //   <i className="fab"><FontAwesomeIcon icon={faWindows} /></i>            
                                //   <i className="fab"><FontAwesomeIcon icon={faAndroid} /></i>
                                //   <i className="fab"><FontAwesomeIcon icon={faApple} /></i>

  return (
    <>
        <div className="container">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="glowing-btn" onClick={() => setOpen(true)}>
                <span className="faulty-letter">BEGIN-</span>TOUR
                </button>
            </div>
            <Divider />
            <aside style={{ display: "flex", justifyContent: "space-around", padding: "1rem", decoration: "none" }}>
                {cardo.map((card) => (
                <div key={card.id} className="card" ref={card.ref}>
                    <div className="face face1">
                    <div className="content">
                        <i>
                        <FontAwesomeIcon icon={card.Icon} />
                        </i>
                        <h3>{card.Name}</h3>
                    </div>
                    </div>
                    <div className="face face2">
                    <div className="content">
                        <p>{card.Paragraph}</p>
                        <br/>
                        <div style={{ display: "flex", justifyContent: "center"}}>
                            <button className="glowing-btn-click">
                                Click me
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </aside>
        </div>
        <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </>
  );
};
export default BeginTour;