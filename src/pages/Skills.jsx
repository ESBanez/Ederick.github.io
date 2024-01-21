import { FloatButton } from 'antd';
import BeginTour from "./../components/BeginTour";
import SkillsCarousel from "./../components/SkillsCarousel";
import Footer from "./../components/Footer";


function Skills() {
  return<>
      <div>
        <div className="body" style={{backgroundColor:"#000F1A", height:"100vh"}}> 
          <br/><br/><br/><br/><br/><br/><br/><br/><br/>

          <div className="container" style={{ display: 'flex', justifyContent: 'center', marginTop:"1rem" }}>
            <BeginTour/>
          </div>
          <div style={{backgroundColor:"#000F1A", height:"200vh", marginTop:"-28rem"}}>
            <SkillsCarousel/>
          </div>
          <FloatButton.BackTop />
        </div>
        <div data-aos="fade-up" data-aos-duration="100000" style={{marginTop: "30rem"}}>
          <Footer/>
        </div>
      </div>

  </>;
}

export default Skills;
