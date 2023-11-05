
import "../sass/Testimonials.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


function Testimonials() {

  return (
    <>
      <div className="outerdiv">
        <div className="innerdiv">
          {/* <!-- div1 --> */}
          <div className="div1 eachdiv" data-aos="fade-up" data-aos-duration="10000">
            <div className="userdetails">
              <div className="imgbox">
                <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg" alt=""/>
              </div>
              <div className="detbox">
                <p className="name">Doroteo Aquino</p>
                <p className="designation">Verified Graduate</p>
              </div>
            </div>
            <div className="review">
              <h4>A Health Revolution: Transforming Healthcare with Telehealth Apps and Websites</h4>
              <p>Telehealth apps and health information websites have been a lifeline in these times,
                 ushering in an unprecedented era of healthcare accessibility. They've fundamentally transformed the way I approach my well-being and medical needs. With these innovative tools, I can seamlessly connect with healthcare professionals, access my medical records, and proactively monitor my health, all from the comfort of my home.
                These platforms offer more than just convenience; they provide a sense of security and empowerment.”
             </p>
            </div>
          </div>
          {/* <!-- div2 --> */}
          <div className="div2 eachdiv"  data-aos="fade-up" data-aos-duration="10000">
            <div className="userdetails">
              <div className="imgbox">
                <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg" alt=""/>
              </div>
              <div className="detbox">
                <p className="name">Ederick S. Bañez</p>
                <p className="designation">Marine Engineering Graduate</p>
              </div>
            </div>
            <div className="review">
              <h4>Exploring New Culinary Horizons.</h4>
              <p>
                “Cooking and recipe apps have turned me into a culinary explorer.
                I've discovered new recipes, learned cooking techniques, and even created my own signature dishes.”
              </p>
            </div>
          </div>
          {/* <!-- div3 --> */}
          <div className="div3 eachdiv"  data-aos="fade-up" data-aos-duration="10000">
            <div className="userdetails">
              <div className="imgbox">
                <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg" alt=""/>
              </div>
              <div className="detbox">
                <p className="name dark">Delia Salceda</p>
                <p className="designation dark">Verified Graduate</p>
              </div>
            </div>
            <div className="review dark">
              <h4>Such a life-changing experience. Highly recommended!</h4>
              <p>“ Ever since I started using productivity apps and websites, my life has changed for the better.
                 From to-do lists to time management tools, these applications have significantly improved my daily life.
                  I can plan my tasks efficiently, set reminders, and even access my work on the go. My productivity has skyrocketed,
                   and I can't imagine life without these digital aids! 
                   Online shopping apps and e-commerce websites have simplified my life in so many ways.
                    I can shop for anything I need, compare prices, and read reviews at my convenience.
                     With just a few taps, my orders are placed, and they arrive at my doorstep.
                      It's a convenient and time-saving way to shop.
                   ”</p>
            </div>
          </div>
          {/* <!-- div4 --> */}
          <div className="div4 eachdiv"  data-aos="fade-up" data-aos-duration="10000">
            <div className="userdetails">
              <div className="imgbox">
                <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt=""/>
              </div>
              <div className="detbox">
                <p className="name dark">Klarizza Hernandez</p>
                <p className="designation dark">Verified social media enthusiast</p>
              </div>
            </div>
            <div className="review dark">
              <h4>An overall wonderful and rewarding experience</h4>
            <p>“Health and fitness apps have been a game-changer for me.
               With the help of workout apps and nutrition websites,
                I've managed to lose weight, gain strength, and lead a healthier lifestyle.”</p>
            </div>
          </div>
          {/* <!-- div5 --> */}
          <div className="div5 eachdiv"  data-aos="fade-up" data-aos-duration="10000">
            <div className="userdetails">
              <div className="imgbox">
                <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg" alt=""/>
              </div>
              <div className="detbox">
                <p className="name">Patrick Abrams</p>
                <p className="designation">Verified Graduate</p>
              </div>
            </div>
            <div className="review">
              <h4>Online forums and social media apps have connected me with people who share my interests and challenges,
                 It's like having a global support network.
              </h4>
              <p>“ Communication apps and social media platforms have brought people closer together,
               no matter the distance. I can connect with friends and family, participate in group chats,
                and share memorable moments instantly. These apps have made it easier to stay in touch and
                 maintain relationships,
               even in our busy lives. ”</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Testimonials;