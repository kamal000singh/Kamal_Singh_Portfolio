import React from "react";
import { styled } from "styled-components";
import Media from "../theme/media-breackpoint";
import { skillsData } from "../data/SkillsData";
import { skillsImage } from "../utils/SkillsImage";

const Skills = () => {
  return (
    <SkillComponents id="skills">
      <div className="skillbox">
        <h1>SKILLS</h1>
        <Row data-aos="zoom-in">
          {skillsData.map((skill, key) => (
            <Col key={key}>
              <div className="box">
                <img
                  className="skill-image"
                  src={skillsImage(skill)}
                  alt={skill}
                />
                <p>{skill}</p>
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
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  ${"" /* justify-content:space-between; */}
  ${"" /* align-items:center; */}
${Media.xs} {
    display: flex;
    flex-wrap: wrap;
  }
`;
const Col = styled.div`
  text-align: center;
  padding: 5px 20px;
  width: 20%;
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
    width: 50%;
    padding: 0% 0%;
  }
`;
export default Skills;
