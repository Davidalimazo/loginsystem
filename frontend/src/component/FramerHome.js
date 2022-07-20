import React,{useState} from 'react';
import './FramerHome.css';
import { Link, useHistory } from 'react-router-dom';
import {motion} from 'framer-motion';

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

function FramerHome() {
    const [selected, setSelected]=useState({food:false, drink:'fanta'});
    const history = useHistory();
    return (
        <motion.div variants={moveVariants} initial='hidden' animate='visible' className='home'>
            <div className="home-con">
            <center><motion.h2 animate={{fontSize:'50px', color:'#b42828'}} className="home-heading">Welcome to Framer Motion Tutorial</motion.h2></center>
            </div>
            <div>
            <center> <Link to='/page1' className='btn btn-primary' onClick={()=>{ setSelected({...setSelected, food:true})}} style={{cursor:'pointer'}}>Checked Selected</Link></center>
            </div>
           
           
        </motion.div>
    )
}

export default FramerHome
