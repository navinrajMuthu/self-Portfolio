import React from 'react';
import './Services.css'
import Glasses from '../../img/glasses.png'
import HeartEmoji from '../../img/heartemoji.png'
import Card from '../Card/Card';
import Humble from '../../img/humble.png'
import Resume from './resume.pdf'
import {useContext} from 'react'
import { themeContext } from '../../context';
import { motion } from 'framer-motion';




const Services = () => {
    const transition={duration:1,type:'spring'}
    const theme =useContext(themeContext)
  const darkMode=theme.state.darkMode
  return (
    <div className='services' id='Services'>
        <div className="awesome">
         <span style={{color:darkMode?'white':''}}>My Awesome</span>
         <span>Services</span>
         <span>My awesome Servise<br/>
         Loreum Ipsum</span>
         <a href={Resume} download>
         <button className='button s-button' >Download CV</button>
         </a>
         <div className="blur s-blur" style={{background:'#ABF1FF94'}}></div>
        </div>
        <motion.div
        whileInView={{right:'2rem'}}
        initial={{right:'10rem'}}
        transition={transition}
         className="cards">
          <div style={{left:'14rem'}}>
              <Card
              emoji={HeartEmoji} 
              heading='Design'
              detail={'Figma,Adobe,Photoshop,Botstrap,Bootstarp,Bootsrap'}
              />
          </div>
          <div style={{left:'-5rem',top:'12rem'}}>
              <Card
              emoji={Glasses} 
              heading='Developer'
              detail={'HTML,CSS,Photoshop,Botstrap,Javascript,React'}
              />
          </div>
          <div style={{left:'12rem',top:'19rem'}}>
              <Card
              emoji={Humble} 
              heading={'UI/UX'}
              detail={'HTML,CSS,Javascript,React'}
              />
          </div>
          <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>

        </motion.div>
      
    </div>
  );
}

export default Services;
