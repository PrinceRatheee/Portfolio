import { motion, useInView } from "framer-motion";
import "./contact.scss";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const variants = {
  initial: {
    y: 500,
    opcity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
const Contact = () => {
  const ref = useRef();
  const formRef=useRef();
  const[error,setError]=useState(false);
  const[success,setSuccess]=useState(false);
  
  const isInView = useInView(ref, { margin: "-100px" });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vr4zufq', 'template_n5rpy96', formRef.current, 'QNEiR8uAzDu0am_cY')
      .then((result) => {
          setSuccess(true);
      }, (error) => {
          setError(true);
      });
  };
  return (
    <motion.div
      ref={ref}
      className="contact w-full overflow-x-hidden"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let&apos;s work together</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>Mail</h2>
          <span>rathi.prince2@gmail.com</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Address</h2>
          <span>Ghaziabad,Uttar Pradesh,India</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>Phone</h2>
          <span>+91 9690389156</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="contact-svg "
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          
          <svg
            width="350px" height="350px"
            viewBox="0 0 24 24"
  
          >
            <motion.path
               strokeWidth={0.2}
               initial={{ pathLength: 0 }}
               animate={isInView && { pathLength: 1 }}
               transition={{ duration: 2 }}
               fill="none"
              
              d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
            />
          </svg>
        </motion.div>
        <motion.form

        ref={formRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          onSubmit={sendEmail}
        >
          <input type="text" required placeholder="Your Good Name" name="name"/>
          <input type="email" required placeholder="Email" name="email"/>
          <textarea placeholder="Your Message" rows={8} name="message"/>
          <button>Submit</button>
          {error && "Some error occured.Try again later"}
          {success && "Your Message has been sent."}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
