import "../sass/UniversalBackground.scss";
import { FloatButton } from 'antd';
// import { SketchCircleFilled } from '@ant-design/icons';
import "../sass/UniversalBackground.scss";


function Blog() {
    return <>
    <div className="body" style={{backgroundColor:"#183D3D", height:"200vh"}}> 
    <br/><br/><br/>
      {/* <SketchCircleFilled /> */}
      Blog
      <FloatButton.BackTop />
    </div>

    </>;
  }
  
  export default Blog;
  