import "../sass/UniversalBackground.scss";
import { FloatButton } from 'antd';
// import { SketchCircleFilled } from '@ant-design/icons';
import "../sass/UniversalBackground.scss";
import { TypeAnimation } from 'react-type-animation';



function Home() {
  return(
    <>
      <div style={{backgroundColor: "#183D3D", height:"5rem"}}>
        
      </div>
      <div className="body" style={{backgroundColor:"#040D12", height:"200vh", color: "#00FFA1"}}> 
        <br/><br/><br/>
        {/* <SketchCircleFilled /> */}
        <div className="container" style={{ display: 'flex', justifyContent: 'center', marginTop:"10rem" }}>
          <h5><TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              '"We are Web Developers."',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              '"We can help you improve your business."',
              1000,
              '"We can make life easier for you."',
              1000,
              '"We are Web Developers..."',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          /></h5>
        </div>
        <FloatButton.BackTop />
      </div>
    </>
    )
    }
    
  




export default Home;
