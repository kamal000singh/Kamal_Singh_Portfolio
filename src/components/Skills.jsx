import React from 'react'
import { styled } from 'styled-components'
import {skillsData} from "../data/SkillsData";
import {skillsImage} from "../utils/SkillsImage";

const Skills = () => {
  return (
    <SkillComponents id='skills'>
    <div className='skillbox'>
        <h1>SKILLS</h1>
        <Row>
            {skillsData.map((skill,key)=>
            <Col key={key}><div className='box'>
            <img className='skill-image' src={skillsImage(skill)} alt={skill} />
            <p>{skill}</p></div>
            </Col>
            )}
        </Row>
        </div>
    </SkillComponents>
  )
}

const SkillComponents = styled.section`
min-height:100vh;
weight:100%;
display:flex;
padding:0px 100px 0px;
justify-content:start-left;
align-items:center;
background-color: #4A55A2;
color: #fff;
z-index:1;
.skillbox{
    width:100%;
    margin:50px 0px;
    h1{
        margin-top:0px;
        font-size:2.5rem;
        font-weight:bold;
    }
}
`;
const Row = styled.div`
width: 100%;
margin: 0;
display:flex;
flex-wrap: wrap;
${'' /* justify-content:space-between; */}
${'' /* align-items:center; */}
`;
const Col = styled.div`
    text-align:center;
    padding:5px 20px;
    width:20%;
    .box{
        margin:10px;
        border-radius:15px;
        ${'' /* display:flex; */}
        ${'' /* item-align:center; */}
        background-color:#35155D;
        padding:20px 20px 5px;
        ${'' /* border:1px solid #000; */}
        font-weight:bold;
        .skill-image{
        height:40px;
        weight:auto;
        text-align:center;

        }
    }
`;
export default Skills