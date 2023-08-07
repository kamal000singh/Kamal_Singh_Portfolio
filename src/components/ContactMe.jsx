import React from 'react'
import { styled } from 'styled-components';
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import {BiLogoFacebook} from "react-icons/bi";
import { FaLinkedinIn,FaFacebookF } from "react-icons/fa";


const ContactMe = () => {
  return (
    <ContactComponents id="contact">
        <BoxLayout>
        <div className="outerBox">
        <a href='mailto:kamal000rawat@gmail.com' className='box1'>GET IN TOUCH</a><br />
        <a href='mailto:kamal000rawat@gmail.com' className='box2'>GET IN TOUCH</a>
        </div>
        </BoxLayout>
        <SocialMedia>
            <Button onClick={()=>window.open("https://www.linkedin.com/in/kamal-singh-413012134/")}><FaLinkedinIn className='icon' /></Button>
            <Button onClick={()=>window.open("https://github.com/kamal000singh")}><AiFillGithub className='icon' /></Button>
            <Button onClick={()=>window.open("https://www.instagram.com/kamal000singh/")}><AiFillInstagram className='icon' /></Button>
            <Button onClick={()=>window.open("https://www.facebook.com/maddyboykamal/")}><BiLogoFacebook className='icon' /></Button>
        </SocialMedia>
        <Footer>
        <p className="copyright">
          © Copyright 2023 | Designed & Built by <span>Kamal Singh</span>
        </p>
        </Footer>
    </ContactComponents>
  )
}

const ContactComponents = styled.section`
min-height:100vh;
position:relative;
weight:100%;
${'' /* padding:0 100px; */}
display:flex;
justify-content:center;
background-color: #006666;
color: #fff;
z-index:1;
`;
const Footer = styled.footer`
position:absolute;
bottom:0%;
justify-content:center;
${'' /* background-color: #003525; */}
`;
const BoxLayout = styled.div`
width: 100%;
height: 100px;
align-self: center;
display: flex;
${'' /* border: 1px solid #000; */}
justify-content: center;
.outerBox{
    ${'' /* border:1px solid yellow; */}
    overflow: hidden;
    font-size:4rem;
    height: 100px;
    font-weight: bold;
    a{
        text-decoration: none;
        color: #fff;
    }
.box1{
    position: relative;
    top: 0;
    width: 600px;
    text-align:center;
    ${'' /* border:1px solid red; */}
    transition: all 0.3s ease-out;
}
.box2{
    position: relative;
    top: 0;
    width: 600px;
    text-align:center;
    transition: all 0.3s ease-out;
    ${'' /* border:1px solid red; */}
}
&:hover > .box1 {
    top: -100%;
  }
  &:hover > .box2 {
    top: -80%;
  }
}
`;
const Button = styled.button`
        background-color: rgba(255, 255, 255,0.5);
        box-shadow : 2px 2px 10px rgba(0,0,0,0.8);
        color: #fff;
        font-size: 2em;
        margin:10px;
        border: none;
        text-align: center;
        text-decoration: none;
        padding: 5px 5px 0px 5px;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s ease-out;
        &:active {
            font-size:1.8em;
            box-shadow : 0px 0px 0px rgba(0,0,0,1);
        }
`;
const SocialMedia = styled.div`
${'' /* width: 4000px; */}
position:absolute;
top:60%;
justify-content:center;
`;

export default ContactMe