import React from "react";
import styled from "styled-components";
import Media from "../theme/media-breackpoint";
import Typewriter from "typewriter-effect";
import GraphicImage from "../assets/Web-designer-1024x821.webp";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Home = () => {
  return (
    <HomeComponent id="home">
      <InfoTab>
        <h2 className="headtext">
          Hello <span className="wave">👋 </span>
        </h2>
        <h2 className="nametext">I'm Kamal Singh</h2>
        <h1>
          <Typewriter
            options={{
              strings: [
                "React Js Developer",
                // "Front End Developer",
                "Node Js Developer",
                // "Back End Developer",
                "MERN Stack Developer",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 30,
            }}
          />
        </h1>
        <SocialMedia>
          <Button
            onClick={() =>
              window.open("https://www.linkedin.com/in/kamal-singh-413012134/")
            }
          >
            <FaLinkedinIn className="icon" />
          </Button>
          <Button
            onClick={() => window.open("https://github.com/kamal000singh")}
          >
            <AiFillGithub className="icon" />
          </Button>
          <Button
            onClick={() =>
              window.open("https://www.instagram.com/kamal000singh/")
            }
          >
            <AiFillInstagram className="icon" />
          </Button>
          <Button
            onClick={() =>
              window.open("https://www.facebook.com/maddyboykamal/")
            }
          >
            <BiLogoFacebook className="icon" />
          </Button>
        </SocialMedia>
      </InfoTab>
      <GraphicTab>
        <img
          data-aos="zoom-out"
          data-aos-delay="700"
          src={GraphicImage}
          height="100%"
          width="100%"
          alt="Image"
        ></img>{" "}
      </GraphicTab>
    </HomeComponent>
  );
};

const HomeComponent = styled.section`
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  padding: 0% 5%;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  background-color: #35155d;
  color: #fff;
  z-index: 1;
  ${Media.xs} {
    display: block;
    max-width: 100% !important;
    text-align: center;
    padding: 10% 5%;
  }
`;
const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 2em;
  margin: 10px;
  border: none;
  text-align: center;
  text-decoration: none;
  padding: 5px 5px 0px 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:active {
    font-size: 1.8em;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 1);
  }
`;
const SocialMedia = styled.footer`
  ${"" /* width: 4000px; */}
  ${
    "" /* position:absolute;
top:60%; */
  }
justify-content:center;
`;
const InfoTab = styled.div`
  width: 50%;
  animation-name: infoAnimation;
  animation-duration: 2s;
  @keyframes infoAnimation {
    0% {
      margin-left: -400px;
    }
    100% {
      margin-left: 0px;
    }
  }
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }
  h2 {
    font-size: 1.5rem;
  }
  .wave {
    animation-name: wave-animation;
    animation-duration: 2.1s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
  }
  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  ${Media.xs} {
    width: 80%;
    display: block;
    text-align: center;
    padding: 0px 5%;
  }
`;
const GraphicTab = styled.div`
  margin-top: 50px;
  max-width: 50%;
  height: 400px;
  ${Media.xs} {
    padding: 0px;
    max-width: 100%;
    height: auto;
  }
`;

export default Home;
