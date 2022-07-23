import React from "react"
import {Col, Container, Row, Tab } from "react-bootstrap";



function ProjectCard({ title, description, imgUrl,websiteLink }){
   return (
    <Col sm={6} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl}/>
        <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span><br></br>
            <span><a href={websiteLink}>VisitNow</a></span>
        </div>
      </div>
    </Col>
   )
}


export default ProjectCard