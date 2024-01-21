import "../../sass/UniversalBackground.scss";
import { FloatButton } from 'antd';
import BeginTour from "../../components/BeginTour";



function Projects() {
    return <>
        <div>
      <div className="body" style={{backgroundColor:"#000F1A", height:"100vh"}}> 
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', marginTop:"-8rem" }}>
          <BeginTour/>
        </div>
        <FloatButton.BackTop />
      </div>
    </div>
    
    </>;
}

export default Projects;