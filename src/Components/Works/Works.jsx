import React from 'react';
import './Works.css'
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png'
import {useContext} from 'react'
import { themeContext } from '../../context';
import {motion } from 'framer-motion'


function Works() {
        const theme =useContext(themeContext)
      const darkMode=theme.state.darkMode
  return (
    <div className="works">
        <div className="awesome">
         <span  style={{color:darkMode?'white':''}}>Works for All these</span>
         <span>Brands & Clients</span>
         <span>My awesome Servise<br/>
         Loreum Ipsum</span>
         <span>My awesome Servise<br/>
         Loreum Ipsum</span>
         <span>My awesome Servise<br/>
         Loreum Ipsum</span>
         <button className='button s-button' >Hire Me</button>
         <div className="blur s-blur" style={{background:'#ABF1FF94'}}></div>
        </div>
        <div className="right">
            <motion.div
            initial={{rotate:45}}
            whileInView={{rotate:0}}
            viewport={{margin:'-40px'}}
            transition={{duration:3.5,type:'spring'}}
             className="main-circle">
                <div className="sec-circle">
                    <img src={Upwork} alt=""/>
                    </div>
                    <div className="sec-circle">
                    <img src={Fiverr} alt=""/>
                    </div>

                    <div className="sec-circle">
                    <img src={Amazon} alt=""/>
                    </div>

                    <div className="sec-circle">
                    <img src={Shopify} alt=""/>
                    </div>
                    <div className="sec-circle">
                    <img src={Facebook} alt=""/>





                </div>
            </motion.div>
            <div className="backCircle blueCircle" ></div>
            <div className="backCircle yellowCircle" ></div>

        </div>
    </div>
  );
}

export default Works;
