import React from 'react'
import { styled } from 'styled-components';
import { experience,education } from '../data/CareerData';

const Career = () => {
  return (
    <CareerComponents id='career'>
        <div className='skillbox'>
            {/* <h1 >EDUCATION / EXPERIENCE</h1>    */}
            <CareerDes>
              <div className='left' data-aos="zoom-in">
              <h1>EDUCATION</h1>
              {education.map((info,key)=><div className='route' data-aos='zoom-out' key={key}>
              <div className='eduction_box'><span className='h1'>{info.name}</span>
              <span className='date'>{info.durations.start}-{info.durations.end}</span></div>
              </div>)}
              </div>
              <div className='right'  data-aos="zoom-in">
              <h1>EXPERIENCE</h1>
              {experience.map((info,key)=><div className='route' data-aos='zoom-out' key={key}><div className='experience_box'><span className='h1'>{info.name}</span><span className='date'>{info.durations.start}-{info.durations.end}</span></div>
              <p>{info.position}</p>
              <div className='desc'>{info.description}</div>
              <div className='skills'>{info.languages.map((skill,key)=><span key={key}>{skill}</span>)}</div>
              </div>)}
              </div>
            
            </CareerDes>
        </div>
    </CareerComponents>
  )
}

const CareerComponents = styled.section`
min-height:100vh;
weight:100%;
display:flex;
padding:0px 50px;
align-items:center;
background-color: #009999;
color: #fff;
z-index:1;
.skillbox{
${'' /* border:1px solid black; */}
    width:100%;
    padding:80px 0px;
}
`;
const CareerDes =styled.div`
  display:flex;
  item-align:center;
  justify-content:space-between;
  ${'' /* border:1px solid #ccc; */}
.left{
  width: 40%;
  self-align: center;
  display: inline-block;
  h1{
    border-bottom: 1px solid #fff;
  }
  .eduction_box{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .h1{
      font-size:1.5em;
      font-weight:bold;
    }
    .date{
      width:180px;
      text-align:end;
    }
  }
}
.right{
  width: 55%;
  self-align: center;
  display: inline-block;
  .route{

      margin-bottom: 30px;
  }
  h1{
    border-bottom: 1px solid #fff;
  }
    p{
      
    margin-top: 0px;
    }
  .skills{
    width:100%;
    overflow-x: auto;
    display:flex;
    align-items:center;
    margin-top: 10px;
    padding-bottom: 10px;
    
    span{
      padding:5px 20px;
      margin-right:5px;
      background-color:rgba(255, 255, 255,0.5);
      border-radius:10px;
    }
  }
  .experience_box{
    display: flex;
    justify-content: space-between;

    .h1{
      font-size:1.5em;
      font-weight:bold;
    }
    .date{
      width:180px;
      text-align:end;
    }
  }
}

`;

export default Career