import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Js Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Royal Inches Gym",
      company_name:"",
      icon: starbucks,
      iconBg: "#383E56",
      date: "October 2023 - November 2023",
      points: [
        "Developed a Gym website fronted ",
        "Customers faith increased due to website design towards the gym quality",
        "It helped them to increase their customers",
      ],
    },
    {
      title: "Real Estate Website",
      company_name: "",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "November 2023 - December 2023",
      points: [
        "Developed front for an real estate company",
        "It's User Interface helps the company to generate new buyers ",
        "Website's design  shows company's royalty"
        
      ],
    },
    {
      title: "Gadget Galaxy Ecommerce",
      company_name: "",
      icon: shopify,
      iconBg: "#383E56",
      date: "December 2023 - Jan 2024",
      points: [
        "Developed a ecommerce website for an electronics store",
        "Attractive animations used in the website increased the overall user engagement and provided a dynamic and visually appealing shopping experience ",
        "Websites leads to contribution to higher customer satisfaction and enhanced conversion rates."
        
      ],
    },
    {
      title: "Chatting website",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developed a chat web app ",
        "Skillset used in it are reactjs , socketio , mongodb ",
        
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Gadget Galaxy",
      description:
        "Developed a dynamic and responsive e-commerce platform using Next.js, ensuring a smooth and engaging user experience. Implemented captivating animations and transitions using Framer Motion.",
      url:"https://galaxygadget.vercel.app",
      tags: [
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "sanity",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: "/assets/Screenshot 2024-01-25 225639.png",
      source_code_link: "https://github.com/PrinceRatheee/Gadget-Galaxy",
    },
    {
      name: "Connectify",
      description:
        "Developed a real-time chat application using Socket.io for seamless communication. Implemented features such as instant messaging, user authentication, and room-based conversations. ",
        url:"https://connectify-chat.vercel.app",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "socketio",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: "/assets/Screenshot 2024-01-24 191620.png",
      source_code_link: "https://github.com/PrinceRatheee/Connectify",
    },
    {
      name: "Royal Inches Gym Frontend",
      description:
        "A comprehensive Gym website with beautiful and stunning design.",
        url:"https://princeratheee.github.io/Royal-Inches-Gym",
      tags: [
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "frontend",
          color: "green-text-gradient",
        },
        {
          name: "ui/ux",
          color: "pink-text-gradient",
        },
      ],
      image: "/assets/Screenshot 2024-01-25 232037.png",
      source_code_link: "https://github.com/PrinceRatheee/Royal-Inches-Gym",
    },
    {
      name: "Real Estate Frontend ",
      description:
        "Developed a stunning frontend for real estate industry. It's attracting UI increases the attraction of clients towards company. ",
        url:"https://real-estate-dczm9a8v0-prince-rathis-projects.vercel.app",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "taiwind",
          color: "green-text-gradient",
        },
        {
          name: "ui/ux",
          color: "pink-text-gradient",
        },
      ],
      image: "/assets/Screenshot 2024-01-25 232334.png",
      source_code_link: "https://github.com/PrinceRatheee/Real-Estate-Frontend",
    },
    {
      name: "Stream Sync",
      description:
        "Developed a real-time video calling web app using webrtc and socket io . Here, user have to fill emailId and room code , two user of same room code are joined into a video call ",
        url:"https://stream-sync-chi.vercel.app",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "taiwind",
          color: "green-text-gradient",
        },
        {
          name: "ui/ux",
          color: "pink-text-gradient",
        },
      ],
      image: "/assets/video-camera.png",
      source_code_link: "https://github.com/PrinceRatheee/Stream-Sync",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };