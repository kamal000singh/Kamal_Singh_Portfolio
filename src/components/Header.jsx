import React from 'react'
import styled from 'styled-components'
import Resume from "../kamal_singh_resume.pdf"
const Header = () => {
  return (
    <HeaderLayout>
        <Title></Title>
        <Navbar>
        <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#career">Career</a></li>
  <li><a href="#contact">Contact</a></li> 
<a className='button' href={Resume} download>Resume</a>
</ul></Navbar>
    </HeaderLayout>
  )
}
const HeaderLayout = styled.div`
 width: 100%;
 height: 80px;
 display: flex;
 justify-content: space-between;
 
 align-items: center;
 background-color: transparent;
 color: #fff;
 position:fixed;
 top: 0;
 z-index:10;
`;
const Title = styled.div`
    margin-left: 100px;
    font-size:2rem;
    color: #fff;
`;
const Navbar = styled.div`
    margin-right: 100px;
    font-size:1rem;
    color: #fff;
    .button{
        background-image: linear-gradient(to right, #825 , #144) ;
        color: #fff;
        margin-left:20px;
        border: none;
        text-align: center;
        text-decoration: none;
        padding: 10px 20px;
        border-radius: 10px;
        cursor: pointer;
    }
    ul{
        list-style-type: none;
    }
    li{
        display: inline;
        a{
        padding:0.5rem 0.7rem;
        color: #fff;
        text-decoration:none;
        }
    a:hover{
        background-color: #512B81;
        border-radius: 3px;

    }
    }
`;
export default Header