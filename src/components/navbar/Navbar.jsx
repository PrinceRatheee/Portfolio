import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar  */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} >Prince Rathi</motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/prince-rathi-4650a8252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="/assets/t_500x300.jpeg" alt="" /></a>
          <a href="https://www.instagram.com/webdevs2696?igsh=MTNmbHgzcms5aWd0eA=="><img src="/instagram.png" alt="" /></a>
      
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
