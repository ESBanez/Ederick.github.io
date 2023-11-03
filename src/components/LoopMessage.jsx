import "../sass/UniversalBackground.scss";

import Marquee from 'react-fast-marquee';
import { Alert } from 'antd';



const LoopMessage = () => (

      <Alert className="container"
        banner
        style={{borderRadius: '10px'}}
        message={
          <Marquee pauseOnHover gradient={false}>
            Stop the wars || Stop the wars || Stop the wars
          </Marquee>
        }
      />
   
)


export default LoopMessage;