import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>

          <form  className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>My name</span>
              <input 
                type="text" 
                name="name" 
                placeholder='Enter name' 
                value='Altynbek Kuat'
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Email</span>
              <input 
                type="email" 
                name="email" 
                value="alt.quat@gmail.com"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
            </label>
            <label className='flex flex-col cursor-pointer'>
              <span className='text-white font-medium mb-4'>LinkedIn</span>
              <input 
                value="linkedin.com/in/altynbek-kuat"
                onClick={() => window.open("https://www.linkedin.com/in/altynbek-kuat/")}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg cursor-pointer outlined-none border-none font-medium" />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>GitHub</span>
              <input 
                value="github.com/altynbeq"
                onClick={() => window.open("https://github.com/altynbeq")}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white cursor-pointer rounded-lg outlined-none border-none font-medium" />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>CodeWars</span>
              <input 
                value="codewars.com/users/altynbeq"
                onClick={() => window.open("https://www.codewars.com/users/altynbeq")}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white cursor-pointer rounded-lg outlined-none border-none font-medium" />
            </label>
           
          </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto  md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')