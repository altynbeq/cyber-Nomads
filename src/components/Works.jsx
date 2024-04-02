import React from 'react'
import { motion } from 'framer-motion'
import { textVariant, fadeIn } from '../utils/motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { Tilt } from 'react-tilt'
import { github } from '../assets'

const ProjectCard = ({index, name, description, tags, image , source_code_link}) => (
  // <motion.div
  //   variants={fadeIn("up", "spring", index * 0.5, 0.75)}
  // >
  
    <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
  // </motion.div>
)

const Works = () => {
  const isDesktop = window.innerWidth > 1024;

  return (
    <div className='z-0'>
      <motion.div variants={textVariant()}>
        <h2 className={styles.heroHeadText}>
          Projects
        </h2>
      </motion.div> 
      <div className='w-full flex'>
        {
          isDesktop ? (
            <motion.p 
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
              I want to emphasize that the projects showcased on this portfolio primarily serve an educational purpose. I undertook these initiatives with the sole intention of honing my skills in web development and furthering my understanding of various technologies. It's crucial to note that the majority of my professional work and projects completed during my employment with different companies are not included in this portfolio.
            </motion.p>
          ) : (
              <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">I want to emphasize that the projects showcased on this portfolio primarily serve an educational purpose. I undertook these initiatives with the sole intention of honing my skills in web development and furthering my understanding of various technologies. It's crucial to note that the majority of my professional work and projects completed during my employment with different companies are not included in this portfolio.</p>
          )
        }
        {/* <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
          I want to emphasize that the projects showcased on this portfolio primarily serve an educational purpose. I undertook these initiatives with the sole intention of honing my skills in web development and furthering my understanding of various technologies. It's crucial to note that the majority of my professional work and projects completed during my employment with different companies are not included in this portfolio.
          </motion.p> */}
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map( (project, index) => (
          <ProjectCard key={`project-${index}`} {...project}/>
        ) )}
      </div>
    </div>
  )
}

export default SectionWrapper(Works, 'projects');