import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/layout'
import Head from 'next/head'
import Image from 'next/image'
import { useMotionValue, useSpring, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import profilepic from '../../public/images/profile/profile-pic-about02.jpg'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value]);

  return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>Soumyajeet | About page</title>
        <meta name="description" content="" />
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Dream. Design. Develop." className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
              <p className='font-medium text-justify'>
                Hi, I'm Soumyajeet, a passionate and creative designer and developer who loves to create eye-catching and functional digital products. I have been working as a freelance UI UX designer and Frontend developer since my college days, designing websites, apps & other digital products for various clients and projects.
              </p>
              <p className='font-medium my-4 text-justify'>
                The way Art is analogous to canvas similarly Design is analogous to the objects drawn on it. My design process involves researching, sketching, wireframing, prototyping, testing, and iterating. I believe that good design is not only about aesthetics, but also about usability, accessibility, and user satisfaction. I aim to create user-centric and responsive designs that solve problems and meet the needs of the users and the clients. It takes time and effort to portray a story through interactive patterns and eye-catching colours and instil pleasure in the eyes.
              </p>
              <p className='font-medium text-justify'>
                I am always open to new challenges and opportunities, and I love to collaborate with other designers and developers. I am also interested in expanding my skills and knowledge in other areas of design and development, such as animation, motion graphics, backend development, and data visualization. I look forward to the opportunity to bring my skills and passion to your next project.
              </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image src={profilepic} alt="Soumyajeet" className='w-full h-auto rounded-2xl'
                priority
                sizes='(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw'
              />
            </div>
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={800} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Hours worked</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about