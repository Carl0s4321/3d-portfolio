import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'; // Example of a solid icon
import { resume } from '../assets'


const Contact = () => {
  const [loading, setLoading] = useState(false);

  
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  
  const handleChange = (event) => {
    const{name, value} = event.target;
    // updates the name to value
    setForm({...form, [name]: value})
  };
  const handleSubmit = (event) => {
    // prevent browser default behaviour
    event.preventDefault();
    setLoading(true);
    emailjs.send("service_563zhfe", "template_ntszuka", {
      from_name: form.name,
      to_name: 'Carlos',
      from_email: form.email,
      to_email:"lostcar74@gmail.com",
      message: form.message,
    }, "nticuUxswSMJYQYJh").then(()=>{
      setLoading(false);
      alert('Thank you, I wil get back to you asap.');
      
      setForm({
        name: '',
        email: '',
        message: '',
      })
    },(error) => {
      setLoading(false);
      console.log(error);
      alert('bleh')
    }
  )
  };

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} 
            className='bg-tertiary py-4 px-6 rounded-lg border-none outline-none font-medium'/>

          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} 
            className='bg-tertiary py-4 px-6 rounded-lg border-none outline-none font-medium'/>

          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea rows="7" name="message" value={form.message} onChange={handleChange} 
            className='bg-tertiary py-4 px-6 rounded-lg border-none outline-none font-medium'/>

          </label>

          <div className='flex flex-wrap flex-row items-center justify-between'>
            <div className='flex flex-row gap-2'>
              <a href={resume} target="_blank"
                  rel="noreferrer" className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-empty shadow-primary rounded-xl'>
                  <FontAwesomeIcon icon={faFileAlt} /> Resume
              </a>
              <a href={"https://github.com/Carl0s4321"} className='bg-tertiary py-3 px-6 outline-none w-fit text-white font-bold shadow-empty shadow-primary rounded-xl'>
                  <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href={"https://www.linkedin.com/in/carlos-sujanto/"} className='bg-tertiary py-3 px-6 outline-none w-fit text-white font-bold shadow-empty shadow-primary rounded-xl'>
                  <FontAwesomeIcon icon={faLinkedin} />
              </a>

            </div>
            <button type="submit" className='bg-tertiary hover:bg-secondary hover:text-indigo-950 py-3 px-10 outline-none w-fit text-white font-bold shadow-empty shadow-primary rounded-xl'>
              {loading? 'sending': 'send'}
            </button>


          </div>

        </form>
      </motion.div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact");