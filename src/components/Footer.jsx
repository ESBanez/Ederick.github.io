import { faFacebook, faTwitter, faLinkedin, faPinterest } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../sass/Footer.scss";


function Footer() {
    return (
        <footer className="new_footer_area bg_color"
        style={{  borderTop: "2px solid #00FFA1"}}
        >
            <div className="new_footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInLeft" }}>
                                <h3 className="f-title f_600 t_color f_size_18" style={{color:"#00FFA1"}}>Get in Touch</h3>
                                <p style={{color:"white"}}>Don’t miss any updates or email us for more!</p>
                                <form action="#" className="f_subscribe_two mailchimp" method="post">
                                    <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                                    <button className="btn btn_get btn_get_two" type="submit"  style={{color:"#00FFA1"}}>Subscribe</button>
                                    <p className="mchimp-errmessage" style={{ display: "none" }}></p>
                                    <p className="mchimp-sucmessage" style={{ display: "none" }}></p>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{ visibility: "visible", animationDelay: "0.4s", animationName: "fadeInLeft" }}>
                                <h3 className="f-title f_600 t_color f_size_18" style={{color:"#00FFA1"}}>Download</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Android App</a></li>
                                    <li><a href="#">ios App</a></li>
                                    <li><a href="#">Desktop</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">My tasks</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{ visibility: "visible", animationDelay: "0.6s", animationName: "fadeInLeft" }}>
                                <h3 className="f-title f_600 t_color f_size_18" style={{color:"#00FFA1"}}>Help</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Term &amp; conditions</a></li>
                                    <li><a href="#">Reporting</a></li>
                                    <li><a href="#">Documentation</a></li>
                                    <li><a href="#">Support Policy</a></li>
                                    <li><a href="#">Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{ visibility: "visible", animationDelay: "0.8s", animationName: "fadeInLeft" }}>
                                <h3 className="f-title f_600 t_color f_size_18" style={{color:"#00FFA1"}}>Team Solutions</h3>
                                <div className="f_social_icon">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faFacebook}/>
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faTwitter}/>
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faLinkedin}/>
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faPinterest}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bg">
                    <div className="footer_bg_one"></div>
                    <div className="footer_bg_two"></div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-7">
                            <p className="mb-0 f_400">© ninja devOPs Inc.. 2023 All rights reserved.</p>
                        </div>
                        <div className="col-lg-6 col-sm-5 text-right">
                            <p>Made with <i className="icon_heart"></i> in <a href="http://cakecounter.com">CakeCounter</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;