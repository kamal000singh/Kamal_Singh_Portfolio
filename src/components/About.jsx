import React from 'react'
import { styled } from 'styled-components';
import Marquee from "react-fast-marquee";
import { skillsData } from "../data/SkillsData";
import {skillsImage} from "../utils/SkillsImage";
import AboutImage from "../assets/web-removebg-preview.png"
const About = () => {
  return (
    <AboutComponent id='about'>
        <BoxLayout >
        <div className='left' data-aos="flip-right">
                <img src={AboutImage} width="100%" height="100%" alt='about_image' ></img>
            </div>
            <div className='right' data-aos='fade-left'>
                <h1>ABOUT ME</h1>
                <p>I'm belong to Uttarakhand, India. 
                I worked as a Full-Stack Developer for last 1 year. 
                I love Coding and I worked on various projects in my previous company. 
                Curious to learn more about developing scalable distribution systems, 
                love problem solving, and care about writing and maintainable code.</p>
                <Marquee
                                    gradient={false}
                                    speed={60}
                                    pauseOnClick={true}
                                    delay={0}
                                    play={true}
                                    direction="left"
                                >
                                    {skillsData.map((skill, id) => (
                                        <div className="skill--box" key={id} >
                                            <img className='skill-image' src={skillsImage(skill)} alt={skill} />
                                            <p>{skill}</p>
                                        </div>
                                    ))}
                                </Marquee>
            </div>
            
        </BoxLayout>
    </AboutComponent>
  )
}
const AboutComponent = styled.section`
min-height:100vh;
max-height:100vh;
weight:100%;
display:flex;
padding:0px 100px;
justify-content:space-between;
align-items:center;
background-color: #6F61C0;
color: #fff;
z-index:1;
`;
const BoxLayout = styled.div`
display:flex;
width:100%;
margin-top:50px;
padding:30px 20px;
border:1px solid grey;
border-radius:20px;
box-shadow: 0px 0px 60px 20px grey;
justify-content:space-evenly;
align-items:center;
background-color: #6F61C0;
color: #fff;
.right{
    width:500px;
    height:auto;
    h1{
        font-size:2.5rem;
        font-weight:bold;
    }
    .skill--box{
        margin:30px;
        text-align:center;
    }
    .skill-image{
        height:30px;
        weight:auto;
    }
    }
.left{
    width:auto;
    height:300px;
}
`;
export default About