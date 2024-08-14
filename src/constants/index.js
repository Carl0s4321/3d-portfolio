import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    idtech,
    gongcha,
    pointsushi,
    studybuddy,
    snakesnack,
    twokings,
    github,
    sfm,
    castle,
    blender,
    youtube,
    splitit,
    itch,
    threejs,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
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
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "3D Modeler",
      icon: backend,
    },
    {
      title: "Animator",
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
      name: "React JS",
      icon: reactjs,
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
      title: "Level Designer and Cinematographer",
      company_name: "iD Tech Camps",
      icon: idtech,
      iconBg: "#95d600",
      date: "Jun 2019",
      points: [
        "Using Unreal Engine 5 Blueprint for scripting to add game functionalities",
        "Creating and designing level cinematics to enhance storytelling and player immersion",
        "Designing and configuring cameras, particle systems, and lighting properties to improve visual aesthetics and gameplay",
        "Developing interactive gameplay elements, including a stairs challenge and swimmable water, to enhance player engagement",
        "Implementing player volumes and managing actors to ensure a dynamic and interactive gaming experience",
        "Landscaping and placing static meshes to build detailed and immersive game environments",
        "Applying custom materials to create unique visual effects and enhance environmental realism",
      ],
    },
    {
      title: "Barista",
      company_name: "Gong Cha",
      icon: gongcha,
      iconBg: "#fff",
      date: "Jul 2022 - May 2023",
      points: [
        "Delivered exceptional customer service by efficiently handling an average of 200 customer orders per 5-hour shift",
        "Maintained a high level of 99% accuracy in order fulfillment",
        "Contributed to a positive customer experience, leading to a 5-star store review",
        "Ensured all necessary items are stocked to avoid shortages",
        "Maintained a clean and organized shop, resulting in a remarkable boost in customer satisfaction",
        "Familiarized with recipes and ingredients of each drink on the menu",
      ],
    },
    {
      title: "Server | Host",
      company_name: "Point Sushi",
      icon: pointsushi,
      iconBg: "#fff",
      date: "Sep 2023 - current",
      points: [
        "Developed comprehensive understanding of the menu to provide explanations and recommendations to guests",
        "Communicate effectively with the kitchen to ensure special requests or allergy concerns are addressed",
        "Assisted in training new staff members to serve, host, and food run",
        "Ensured the dining area, including tables, chairs, and condiment stations, are consistently clean and well-presented",
        "Managed and confirmed reservations as well as effectively strategize to accommodate walk-in guests",
        "Proficiently use the POS system to process orders and payments efficiently and accurately",
      ],
    },
  ];
  
  const projects = [
    {
      name: "StudyBuddy",
      description:
      `
A web application designed to enhance learning and collaboration. 
It features user profiles, chat rooms, multi-role capabilities, 
and various widgets to support students. Users can create online study rooms,
invite others to join, and manage sessions to facilitate collaborative learning. 
The platform supports customizable study environments to improve educational outcomes.
      `,
      tags: [
        {
          name: "vue.js",
          color: "blue-text-gradient",
        },
        {
          name: "docker",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: studybuddy,
      source_code_link: "https://github.com/HAPPYSACKS/SENG513Project",
      link_image:github,
      label:"NEW",
    },
    {
      name: "Snake Snack",
      description:
        `
        A classic snake game housed in an arcade machine,
        developed in Godot for a Game Development Club activity.
        It features various enemies with unique behaviors, 
        vibrant music, and a scoring system based on eating 
        food while navigating through challenging levels.
        `,
      tags: [
        {
          name: "godot",
          color: "blue-text-gradient",
        },
        {
          name: "gdscript",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: snakesnack,
      source_code_link: "https://coloredasterisk.itch.io/snake-snack",
      link_image:itch,
      label:"",
    },
    {
      name: "Two Kings",
      description:
        `
        A JavaScript game where two players battle each other 
        until one is defeated or the timer runs out. 
        It features smooth player movement, with mechanics 
        for attacking, parrying, and jumping, providing an engaging and competitive experience.
        `,
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: twokings,
      source_code_link: "https://github.com/Carl0s4321/TwoKings",
      link_image:github,
      label:"",
    },
    {
      name: "[SFM]-01",
      description:
        `
        A Source Filmmaker animation set in Team Fortress 2 world, featuring a dynamic fight scenes, 
        which are utilized as a key practice 
        technique for improving my 3D animation skills.
        `,
      tags: [
        {
          name: "sourcefilmmaker",
          color: "blue-text-gradient",
        },
        {
          name: "blender",
          color: "green-text-gradient",
        },
        {
          name: "adobe premiere",
          color: "pink-text-gradient",
        },
      ],
      image: sfm,
      source_code_link: "https://www.youtube.com/watch?v=QmamUaR56-c",
      link_image:youtube,
      label:"",
    },
    {
      name: "Low Poly Castle",
      description:
      `
      A low-poly 3D model of a castle in Blender to practice 
      and enhance my modeling skills. This project involved 
      designing a detailed yet simplified castle structure, 
      focusing on efficient use of polygons and texturing 
      techniques to achieve a visually appealing and optimized model.
      `,
      tags: [
        {
          name: "blender",
          color: "blue-text-gradient",
        },
      ],
      image: castle,
      source_code_link: "",
      link_image:blender,
      label:"",
    },
    {
      name: "SplitIT",
      description:
      `
A mobile application designed for managing and splitting bills. 
Users can create profiles, add friends, scan and store receipts, 
and easily split expenses among friends. The app simplifies group 
payments and keeps track of shared costs.
      `,
      tags: [
        {
          name: "expo",
          color: "blue-text-gradient",
        },
        {
          name: "react native",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
      ],
      image: splitit,
      source_code_link: "",
      link_image:github,
      label:"WIP",
    },
  ];
  
  export { services, technologies, experiences, projects };