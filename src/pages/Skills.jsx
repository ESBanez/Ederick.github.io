import { BackTop } from 'antd'; // Change FloatButton to BackTop
import BeginTour from "./../components/BeginTour";
import SkillsCarousel from "./../components/SkillsCarousel";
import Footer from "./../components/Footer";
import "../sass/SkillsCarousel.scss"

function Skills() {
  return (
    <>
      <div style={{ backgroundColor: "#000F1A" }}>
        <div className="body" style={{ backgroundColor: "#000F1A", height: "auto" }}>
          <br /><br /><br /><br /><br /><br />

          <div className="container" style={{ flexDirection: 'row', justifyContent: 'center', marginTop: "1rem" }}>
            <BeginTour />
          </div>
          <BackTop /> {/* Change FloatButton.BackTop to BackTop */}
        </div>
        <div className="sticky-card" data-aos="fade-out" data-aos-duration="100000" style={{ backgroundColor: "#000F1A", flexDirection: "row"}}>
          <SkillsCarousel />
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        <div data-aos="fade-up" data-aos-duration="100000" >
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Skills;
