import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container,Row,Col} from "react-bootstrap"
//import colosharp from "../assets/img/color-sharp.png"
import skillsbg from "../assets/img/skillsbg.jpg"
import "animate.css"
import TrackVisibility from "react-on-screen"

function Skills(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
       
        <section className="skill" id="skills">
        
        <div className="container SkillsContainer">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                            <Carousel responsive={responsive} infinite={true} autoPlay={true} className="skill-slider">
                                <div className="item">
                                <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"alt="image"/>
                                    <h5> C++ </h5>
                                </div>
                                <div className="item">
                                    <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt="image"/>
                                    <h5> HTML5 </h5>
                                </div>
                                <div className="item">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="image"/>
                                    <h5> CSS </h5>
                                </div>
                                <div className="item">
                                    <img src="https://w1.pngwing.com/pngs/951/574/png-transparent-react-logo-javascript-redux-vuejs-angular-angularjs-expressjs-front-and-back-ends.png" alt="image"/>
                                    <h5> JavaScript </h5>
                                </div>
                                <div className="item">
                                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" alt="image"/>
                                    <h5> Java </h5>
                                </div>
                                <div className="item">
                                    <img src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png" alt="image"/>
                                    <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                    <img src="https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png" alt="image"/>
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="image"/>
                                    <h5>React</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={skillsbg} alt="Image"/>
            
        </section>
      )
}


export default Skills