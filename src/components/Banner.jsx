import React from "react";
import { useState,useEffect} from "react";
import {Container,Row,Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from "../assets/img/mypic.jpeg";
import "animate.css"
import TrackVisibility from "react-on-screen"

function Banner(){
    const [loopNum,setLoopNum]=useState(0);
    const[isDeleting,setIsDeleting]=useState(false);
    const[text,setText]=useState('');
    const [delta,setDelta]=useState(300-Math.random()*100);
    const toRotate=["Front-End Web developer","Web Desginer","Competitive Programmer"];
    const period=2000;

    function btnClick() {
        window.open("");
      }

    useEffect(()=>{
        let ticker=setInterval(()=>{
            tick();
        },delta)

        return()=>{clearInterval(ticker)};
    },[text])

   const tick=()=>{
    let i=loopNum % toRotate.length;
    let fullText=toRotate[i];
    let updatedText=isDeleting ? fullText.substring(0,text.length-1): fullText.substring(0,text.length+1);
    setText(updatedText);
    if(isDeleting){
        setDelta(prevDelta=>prevDelta/2)
    }
    if(!isDeleting &&updatedText===fullText){
        setIsDeleting(true);
        setDelta(period);
    }else if(isDeleting && updatedText===''){
        setIsDeleting(false);
        setLoopNum(loopNum+1);
        setDelta(500);
    }
   }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="allign-items=centre">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible ? "animate__animated animate__fadeInTopLeft": ""}>
                    <span className="tagline"> Welcome to my World</span>
                    <h1>{'Hi Im a Chiru Vishal '}<br></br><span className="wrap">{text}</span></h1>
                    <p>Bonjour!! I am .
                         Currently, I am pursuing B.TECH from National Institute of Technology,Raipur in Computer Science and Engineering.
                          My hobbies are playng Table tennis, listening to music and playing video games.
                         I also do competitive programming in various platforms like CodeChef: chiruvishal14 and Leetcode:chiruvishalmolleti</p>
                    <button onClick={btnClick}>View Resume<ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </div>}
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;