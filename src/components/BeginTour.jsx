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
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { Link } from 'react-router-dom';
// import App from '../App.jsx';

const BeginTour = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);

  const steps = [
    {
      title: 'What skills can I offer to you?',
      description: 'Click to see a list of my skills.',
      cover: (
        <img
          alt="tour.png"
          src="/Skills.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: 'Projects',
      description: 'Under maintenaince',
      target: () => ref2.current,
    },
    {
      title: 'Blog',
      description: 'Under maintenaince',
      target: () => ref3.current,
    },
  ]

  const cardo = [
    {
      Name: "Skills",
      id: 1,
      ref: ref1,
      to: '/skills', // 'to' instead of 'Link to'
      Icon: faGraduationCap,
      Paragraph: "This is a list of my skills that I have acquired both through bootcamp and practical experience."
    },
    {
      Name: "Projects",
      id: 2,
      ref: ref2,
      to: '/projects', // 'to' instead of 'Link to'
      Icon: faBriefcase,
      Paragraph: "This is a list of my projects that I have worked on."
    },
    {
      Name: "Blog",
      id: 3,
      ref: ref3,
      to: '/blog', // 'to' instead of 'Link to'
      Icon: faBlog,
      Paragraph: "Upcoming blog to be posted online wait for release through AWS."
    }
  ];
                                //   ref={ref1}, ref={ref2, ref={ref3}
                                //   <i className="fab"><FontAwesomeIcon icon={faWindows} /></i>            
                                //   <i className="fab"><FontAwesomeIcon icon={faAndroid} /></i>
                                //   <i className="fab"><FontAwesomeIcon icon={faApple} /></i>

  return (
    <>
        <div className="container" style={{zIndex:"10"}}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="glowing-btn" onClick={() => setOpen(true)}>
                <span className="faulty-letter">ClICK THIS-</span>SIGN
                </button>
            </div>
            <Divider />
            <aside style={{ display: "flex", justifyContent: "space-around", padding: "1rem", decoration: "none" }}>
                {cardo.map((card) => (
                <div  data-aos="fade-up" data-aos-duration="10000" key={card.id} className="card" ref={card.ref}>
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
                        <Link to={card.to} style={{ display: "flex", justifyContent: "center"}}>
                            <button className="glowing-btn-click">
                                Click me
                            </button>
                        </Link>
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