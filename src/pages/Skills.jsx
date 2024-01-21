import { FloatButton } from 'antd';
// import { TypeAnimation } from 'react-type-animation';
import BeginTour from "./../components/BeginTour";



function Skills() {
  return<>
      <div>
        <div className="body" style={{backgroundColor:"#000F1A", height:"100vh"}}> 
          <br/><br/><br/><br/><br/><br/><br/><br/><br/>
          {/* <SketchCircleFilled /> */}

          <div className="container" style={{ display: 'flex', justifyContent: 'center', marginTop:"-8rem" }}>
            {/* <p><TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                '"Let us talk"',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                '"Let us make something new."',
                1000,
                '"Let us build better connection."',
                1000,
                '"Let us make something new"',
                1000
              ]}
              wrapper="span"
              speed={200}
              style={{ fontSize: '2rem', display: 'inline-block' }}
              repeat={Infinity}
            /></p> */}
            <BeginTour/>
          </div>
          <FloatButton.BackTop />
        </div>
      </div>

  </>;
}

export default Skills;
