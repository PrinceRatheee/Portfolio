import { motion } from "framer-motion";
import "./hero.scss";
const textVariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
}
const sliderVariants={
    initial:{
        x: 0,
    },
    animate:{
         x:"-220%",
         transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
         }   
    }
}


const Hero = () => {
  return (
    <div className="hero ">
        <div className="wrapper">

        <motion.div className="textcontainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>PRINCE RATHI</motion.h2>
            <motion.h1 variants={textVariants}>FULL STACK WEB DEVELOPER</motion.h1>
            {/* <motion.div className="buttons" variants={textVariants} >
                <motion.button variants={textVariants}>See my Latest Works</motion.button>
                <a href="#Portfolio">
                <motion.button variants={textVariants} className="bg-white text-black cursor-pointer z-[100]">Contact Me</motion.button>
                </a>
            </motion.div> */}
            <motion.img className="scroll-img" src="./scroll.png" alt=""  variants={textVariants} animate="scrollButton"/>
        </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
            Coder Developer Freelancer
        </motion.div>
        <div className="imageContainer">
            <img className="hero-img" src="./IMG_6381.png" alt="" />
        </div>
    </div>
  )
}

export default Hero