import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { oneB,oneC,oneD,oneE,two,three,four,planet } from '../assets'

const Hero = () => {
  return (
      <section className="parallax">
          <div className='parallax__content absolute top-[25%] sm:top-[16%] lg:top-[22%] w-full mx-auto z-10 flex flex-col lg:flex-row px-10 lg:pl-28 items-center justify-items-center'>
            <div className="flex-1 lg:mb-0">
              <h1 className={`${styles.heroHeadText} leading-none md:leading-tight text-center lg:text-left`}>CARLOS<br/>SUJANTO</h1>
            </div>
            <div className="flex-1 flex flex-wrap text-center lg:text-left lg:justify-end ">
              <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-lg z-11`}>
                Currently studying Computer Science at <span className='font-bold'>University of Calgary</span>
              </p>
            </div>
          </div>

        <img className="parallax__planet " src={planet} alt=""/>
        <img className="parallax__4" src={four} alt=""/>
        <img className="parallax__3" src={three} alt=""/>
        <img className="parallax__2" src={two} alt=""/>
        <img className="parallax__1b" src={oneB} alt=""/>
        <img className="parallax__1c" src={oneC} alt=""/>
        <img className="parallax__1e" src={oneE} alt=""/>
        <img className="parallax__1d" src={oneD} alt=""/>


      <div className='absolute xs:bottom-10 bottom-24 w-full flex justify-center items-center' style={{zIndex: 15}}>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />

          </div>
        </a>
      </div>
    </section>

    // <section className='relative w-full h-screen mx-auto'> {/* background */}
    //   <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
    //     <div className="flex flex-col justify-center items-center mt-5">
    //       <div className="w-5 h-5 rounded-full bg-[#915eff]"/> {/* circle */}
    //       <div className='w-1 sm:h-80 h-40 violet-gradient'/> {/* line under circle */}

    //     </div>

    //     <div>
    //       <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className="text-[#915eff]">Carlos</span></h1>
    //       <p className={`${styles.heroSubText} mt-2 text-white-100`}>
    //         Currently a studying Computer Science at <br className='sm:block hidden'/> <span className='font-bold'>University of Calgary</span>
    //       </p>
    //     </div>
    //   </div>

      
    // </section>
  )
}

export default Hero