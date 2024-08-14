import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({index, name, description, tags, image, source_code_link, link_image,label}) =>{

  const handleOpenLink = () => {
    if (source_code_link) {
      window.open(source_code_link, "_blank");
    }
  };
  
  
  return(
    <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)}>
      <Tilt options={{max:45, scale: 1, speed:450}} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className={source_code_link === "" ? "cursor-default" : "cursor-pointer"} onClick={handleOpenLink}>
          <div className="relative w-full h-[230px]">
            <img src={image} alt={name} className='w-full h-full object-cover rounded-xl'/>
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div 
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center">
                <img src={link_image} alt={link_image} className='object-contain'/>
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <div className='flex items-center gap-5'>
              <h3 className='text-white font-bold text-[24px]'>{name}</h3>
              <sup
                className={`text-sm align-top rounded-lg px-2 py-1 ${
                  label === 'WIP'
                    ? 'bg-yellow-500'
                    : label === 'NEW'
                    ? 'bg-green-700'
                    : 'hidden'
                }`}
              >{label}</sup>
            </div>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
            <div className='mt-4 flex flex-wrap gap-2'>
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>

        </div>
      </Tilt>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Take a look!</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        A collection of projects I created either during free time or as part of class work, 
        showcasing a variety of skills and interests. 
        These include interactive games, web applications, 
        and animations, reflecting creativity and technical proficiency.
        </motion.p>
      </div>
      
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`${project.index}`} index={index} {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects,"projects");