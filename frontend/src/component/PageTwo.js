import React,{useState} from 'react';
import './FramerHome.css';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';

const moveVariants ={
    hidden:{
        x:'100vw',
        opacity:0
    },
    visible:{
        x:0,
        opacity:1,
        transition:{
            type:'spring',
            delay:0.5
        }
    }
}

function PageTwo() {
    const [selected, setSelected]=useState({food:false, drink:'fanta'});
    return (
        <motion.div variants={moveVariants} initial='hidden' animate='visible' className='home'>
            <div className="home-con">
            <center><motion.h2 animate={{fontSize:'50px', color:'#b42828'}} className="home-heading">Welcome to Page Two</motion.h2></center>
            </div>
            <div>
            <center> <Link to='/' className='btn btn-primary' onClick={()=>{ setSelected({...setSelected, food:true})}} style={{cursor:'pointer'}}>Checked Selected</Link></center>
            </div>
        </motion.div>
    )
}

export default PageTwo
