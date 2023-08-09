import React from "react";
import { styled } from "styled-components";
import Media from "../theme/media-breackpoint";
import { experience, education } from "../data/CareerData";

const Career = () => {
  return (
    <CareerComponents id="career">
      <div className="skillbox">
        {/* <h1 >EDUCATION / EXPERIENCE</h1>    */}
        <CareerDes>
          <div className="left" data-aos="zoom-in">
            <h1>EDUCATION</h1>
            {education.map((info, key) => (
              <div className="route" data-aos="zoom-out" key={key}>
                <div className="eduction_box">
                  <span className="h1">{info.name}</span>
                  <span className="date">
                    {info.durations.start}-{info.durations.end}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="right" data-aos="zoom-in">
            <h1>EXPERIENCE</h1>
            {experience.map((info, key) => (
              <div className="route" data-aos="zoom-out" key={key}>
                <div className="experience_box">
                  <span className="h1">{info.name}</span>
                  <span className="date">
                    {info.durations.start}-{info.durations.end}
                  </span>
                </div>
                <p>{info.position}</p>
                <div className="desc">{info.description}</div>
                <div className="skills">
                  {info.languages.map((skill, key) => (
                    <span key={key}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CareerDes>
      </div>
    </CareerComponents>
  );
};

const CareerComponents = styled.section`
  min-height: 100vh;
  max-width: 100%;
  display: flex;
  padding: 5% 5%;
  overflow: hidden;
  align-items: center;
  background-color: #009999;
  color: #fff;
  z-index: 1;
  .skillbox {
    ${"" /* border:1px solid black; */}
    width:100%;
    padding: 5% 0px;
  }
  ${Media.xs} {
    display: block !important;
    padding: 0px 5%;
  }
`;
const CareerDes = styled.div`
  display: flex;
  item-align: center;
  justify-content: space-between;
  .left {
    width: 40%;
    self-align: center;
    display: inline-block;
    h1 {
      border-bottom: 1px solid #fff;
    }
    .eduction_box {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      .h1 {
        font-size: 1.5em;
        font-weight: bold;
      }
      .date {
        width: 180px;
        text-align: end;
      }
    }
  }
  .right {
    width: 55%;
    self-align: center;
    display: inline-block;
    .route {
      margin-bottom: 30px;
    }
    h1 {
      border-bottom: 1px solid #fff;
    }
    p {
      margin-top: 0px;
    }
    .skills {
      width: 100%;
      ${"" /* overflow-x: auto; */}
      display:flex;
      flex-wrap: wrap;
      align-items: center;
      margin: 2% 0%;

      span {
        padding: 0.5% 2%;
        margin: 1%;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 10px;
      }
    }
    .experience_box {
      display: flex;
      justify-content: space-between;

      .h1 {
        font-size: 1.5em;
        font-weight: bold;
      }
      .date {
        width: 180px;
        text-align: end;
      }
    }
  }
  ${Media.xs} {
    display: block;
    padding: 0px 5%;
    .left {
      width: 95%;
      .eduction_box {
        .h1 {
          font-size: 1em;
          font-weight: bold;
        }
        .date {
          font-size: 0.8em;
          width: 30%;
        }
      }
    }
    .right {
      width: 95%;
      p {
        margin-top: 0px;
      }
      .skills {
        width: 100%;
        margin: 2% 0%;

        span {
          padding: 0.5% 2%;
          margin: 1%;
        }
      }
      .experience_box {
        .h1 {
          font-size: 1em;
        }
        .date {
          font-size: 0.8em;
          width: 30%;
        }
      }
    }
  }
`;

export default Career;
