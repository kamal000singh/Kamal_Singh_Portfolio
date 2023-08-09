import React from "react";
import styled from "styled-components";
import { BsList } from "react-icons/bs";
import Media from "../theme/media-breackpoint";
import Resume from "../kamal_singh_resume.pdf";
import { useState } from "react";
const Header = () => {
  const [dropdown, setdropdown] = useState(false);
  return (
    <>
      <HeaderDesktopLayout>
        <Title></Title>
        <Navbar>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#career">Career</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <a className="button" href={Resume} download>
              Resume
            </a>
          </ul>
        </Navbar>
      </HeaderDesktopLayout>
      <HeaderMobileLayout>
        <div className="toggle">
          <Button onClick={() => setdropdown(!dropdown)}>
            <BsList className="icon" />
          </Button>
        </div>
        <span>
          {dropdown ? (
            <ul>
              <a href="#home">
                <li>HOME</li>
              </a>
              <a href="#about">
                <li>ABOUT</li>
              </a>
              <a href="#skills">
                <li>SKILLS</li>
              </a>
              <a href="#career">
                <li>CAREER</li>
              </a>
              <a href="#contact">
                <li>CONTACT</li>
              </a>
              <a className="button" href={Resume} download>
                <button>RESUME</button>
              </a>
            </ul>
          ) : null}
        </span>
      </HeaderMobileLayout>
    </>
  );
};
const HeaderMobileLayout = styled.div`
  width: 100%;
  color: #fff;
  display: none;
  position: fixed;
  ${"" /* border: 1px solid #ccc; */}
  z-index: 10;
  .toggle {
    width: 90%;
    display: flex;
    justify-content: end;
    align-items: center;
  }
  ul {
    display: flex;
    align-items: center;
    width: 82%;
    list-style-type: none;
    z-index: 7;
  }
  a {
    font-size: 1rem;
    font-weight: bold;
    ${"" /* color: #512b81; */}
    color: #fff;
    text-decoration: none;
    text-align: center;
    li {
      padding: 2%;
      background-color: rgba(81, 43, 129, 0.9);
    }
    button {
      font-size: 1rem;
      width: 100%;
      background-color: #339966;
      color: #fff;
      padding: 2%;
      border: none !important;
      ${"" /* border: 1px solid #ccc; */}
    }
  }
  a:hover {
    color: #fff;
    background-color: #512b81;
    border-radius: 3px;
  }
  ${Media.xs} {
    display: block;
    ul {
      display: block;
    }
  }
`;
const Button = styled.button`
  border: 1px solid #fff;
  background-color: transparent;
  margin-top: 5%;
  display: flex;
  align-items: center;
  margin-right: -5%;
  font-size: 2rem;
  color: #fff;
  border-radius: 10px;
`;
const HeaderDesktopLayout = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  color: #fff;
  position: fixed;
  top: 0;
  z-index: 10;
  ${Media.xs} {
    display: none !important;
    weight: 100%;
    overflow: hidden;
    border: 1px solid #000;
  }
`;
const Title = styled.div`
  margin-left: 100px;
  font-size: 2rem;
  color: #fff;
`;
const Navbar = styled.div`
  margin-right: 100px;
  font-size: 1rem;
  color: #fff;
  .button {
    background-image: linear-gradient(to right, #825, #144);
    color: #fff;
    margin-left: 20px;
    border: none;
    text-align: center;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
  }
  ul {
    list-style-type: none;
  }
  li {
    display: inline;
    a {
      padding: 0.5rem 0.7rem;
      color: #fff;
      text-decoration: none;
    }
    a:hover {
      background-color: #512b81;
      border-radius: 3px;
    }
  }
`;
export default Header;
