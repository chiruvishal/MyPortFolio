import { Col, Container, Row, Tab } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import PortFolio from "../assets/img/PortFolio.png"
import Simon from "../assets/img/Simon.png"
import ThisIsNeat from "../assets/img/ThisIsNeat.png"
import NoteNow from "../assets/img/NoteNow.png"
import ToDoList from "../assets/img/ToDoList.png"
import DrumStick from "../assets/img/DrumStick.png"
import "animate.css"
import TrackVisibility from "react-on-screen"


function Projects(){
const projects=[
    {
        title: "Simon Game",
        description:" play game now",
        imgUrl: Simon,
        websiteLink: "https://chiruvishal.github.io/simongame/",
    },
    {
        title: "This is Neat",
        description:"Clone of This is Neat Website",
        imgUrl: ThisIsNeat,
        websiteLink: "https://chiruvishal.github.io/thisisneatwebsite/",
    },
    {
        title: "Note-Now",
        description:"Note your important notes",
        imgUrl: NoteNow,
        websiteLink: "https://csb-gvtsvb.netlify.app",
    },
    {
        title: "To-Do-List",
        description:"Add items to your list and delete when completed",
        imgUrl: ToDoList,
        websiteLink: "https://csb-t5sen2.netlify.app" ,
    },
    {
        title: "DrumStick",
        description:" play game now",
        imgUrl: DrumStick,
        websiteLink: "https://chiruvishal.github.io/drumsticks/",
    },
    {
        title: "PortFolio",
        description:"My PortFolio Website",
        imgUrl: PortFolio,
        websiteLink: "https://cmg",
    }
];
return (
    <section className="project" id="projects">
         <Container>
            <Row>
                <Col size={12}>
                <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                   <Nav.Item>
                    <Nav.Link eventKey="first">Active</Nav.Link>
                </Nav.Item>
                   <Nav.Item>
               <Nav.Link eventKey="second">Option 2</Nav.Link>
                </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                        <Row>
                            { projects.map((project,index)=>{
                                return (
                                    <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                            })}
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">In Construction </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
                </div>}
            </TrackVisibility>
                </Col>
            </Row>
         </Container>
         <img className="background-image-right" src={colorSharp2}/>
    </section>
)
}

export default Projects;