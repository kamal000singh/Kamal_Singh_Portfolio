import React from "react";
import { styled } from "styled-components";
import Media from "../theme/media-breackpoint";
import { skillsData, skillsData1 } from "../data/SkillsData";
import { skillsImage } from "../utils/SkillsImage";

const Skills = () => {
  return (
    <SkillComponents id="skills">
      <div className="skillbox">
        <h1>SKILLS</h1>
        <div className="skill-heading">Front-End</div>
        <Row data-aos="fade-right">
          {skillsData1.FrontEnd.map((skill, key) => (
            <Col key={key}>
              <div className="skill">{skill.title}</div>
              <div className="outerBar">
                <div
                  className="innerBar"
                  style={{ width: `${skill.rating * 20}%` }}
                >
                  {skill.rating} out of 5
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="skill-heading">Back-End</div>
        <Row data-aos="fade-left">
          {skillsData1.BackEnd.map((skill, key) => (
            <Col key={key}>
              <div className="skill">{skill.title}</div>
              <div className="outerBar">
                <div
                  className="innerBar"
                  style={{ width: `${skill.rating * 20}%` }}
                >
                  {skill.rating} out of 5
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="skill-heading">DataBase</div>
        <Row data-aos="fade-right">
          {skillsData1.DataBase.map((skill, key) => (
            <Col key={key}>
              <div className="skill">{skill.title}</div>
              <div className="outerBar">
                <div
                  className="innerBar"
                  style={{ width: `${skill.rating * 20}%` }}
                >
                  {skill.rating} out of 5
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </SkillComponents>
  );
};

const SkillComponents = styled.section`
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  padding: 0px 100px 0px;
  justify-content: start-left;
  align-items: center;
  background-color: #4a55a2;
  color: #fff;
  z-index: 1;
  .skillbox {
    width: 100%;
    margin: 50px 0px;
    h1 {
      margin-top: 0px;
      font-size: 2.5rem;
      font-weight: bold;
    }
    .skill-heading {
      font-size: 1.6rem;
      margin: 20px 0px;
      font-weight: bold;
    }
  }
  ${Media.xs} {
    ${"" /* display:block; */}
    max-width:100%;
    padding: 5% 5%;
    .skillbox {
      width: 100%;
      margin: 0% 0px;
      h1 {
        text-align: left;
        margin-top: 0px;
        font-size: 2rem;
        font-weight: bold;
      }
    }
  }
`;
const Row = styled.div`
  width: 100%;
  margin-bottom: 10px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  ${"" /* align-items:center; */}
  ${Media.xs} {
    display: flex;
    flex-wrap: wrap;
  }
`;
const Col = styled.div`
  text-align: left;
  padding: 0;
  margin-bottom: 20px;
  border: 0px solid #ccc;
  width: 25%;
  .outerBar {
    ${"" /* height: 30px; */}
    width: 90%;
    border: 1px solid #fff;
    .innerBar {
      height: 100%;
      color: #4a55a2;
      padding: 0 5px;
      background-color: #fff;
      border: 0px solid #fff;
    }
  }
  .skill {
    font-size: 1.2rem;
    text-align: left;
  }
  .box {
    margin: 10px;
    border-radius: 15px;
    ${"" /* display:flex; */}
    ${"" /* item-align:center; */}
        background-color:#35155D;
    padding: 20px 20px 5px;
    font-weight: bold;
    .skill-image {
      height: 40px;
      weight: auto;
      text-align: center;
    }
  }
  ${Media.xs} {
    width: 100%;
    padding: 0% 0%;
  }
`;
export default Skills;
