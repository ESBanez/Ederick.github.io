import "../sass/UniversalBackground.scss";
import { FloatButton } from 'antd';
// import { SketchCircleFilled } from '@ant-design/icons';
import "../sass/UniversalBackground.scss";


function Products() {
  return (<>
      <div className="body" style={{backgroundColor:"#183D3D", height:"200vh"}}> 
        <br/><br/><br/>
        {/* <SketchCircleFilled /> */}
        Products
        <FloatButton.BackTop />
      </div>
  </>);
}

export default Products;
