import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MCV from '../assets/img/MCV.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.png';


function NavigationBar() {
 function btnClick() {
  window.open("https://wa.me/qr/SGCRA6VS5L4NL1");
}

    const [activeLink,setActiveLink]=useState('home');
    const [scrolled,setSrolled]=useState(false);
    useEffect(()=>{
        const onScroll=()=>{
            if(window.scrollY>50){
                setSrolled(true);
            }else{
                setSrolled(false);
            }
        }
       window.addEventListener("scroll",onScroll);
       return ()=> window.removeEventListener("scroll",onScroll);
    },[])

function onUpdateActiveLink(value){
    setActiveLink(value);

}

  return (
    <Navbar  expand="lg" className={scrolled?"scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
        <img src={MCV} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'?"active navbar-link":'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills'?"active navbar-link":'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==='projects'?"active navbar-link":'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
            
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
             <a href="https://www.linkedin.com/in/molleti-chiru-vishal-683447202/"><img src={navIcon1} alt=""/></a>  
             <a href="https://www.facebook.com/chiruvishal.molleti/"><img src={navIcon2} alt=""/></a>
             <a href="https://www.instagram.com/chiru_vishal_molleti/?hl=en"><img src={navIcon3} alt=""/></a>
             <a href="https://leetcode.com/chiruvishalmolleti/"><img src={navIcon4} alt=""/></a> 
            </div>
          <button href=""class="contactus" onClick={btnClick}><span>Lets Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;