import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
        >
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink} target='_blank' className='text-primary capitalize'>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                Experience
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative'>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details
                        position={"UI/UX Developer"}
                        company={"SPARC Pvt. Ltd."}
                        companyLink={"https://sparcindia.com"}
                        time={"Sep 2023 - present"}
                        address={"E-11, Infocity, Bhubaneswar, Odisha, IN"}
                        work={"Worked in the Corporate Comunication & Business Development team to design various Social Media posts and Branding content & develop Company website"}
                    />
                    <Details
                        position={"Software Developer"}
                        company={"OptCulture"}
                        companyLink={"https://optculture.com"}
                        time={"Mar 2023 - May 2023"}
                        address={"HiTech City, Hyderabad, Telengana, IN"}
                        work={"Worked in integrating the company's API solutions with client systems using Python and Chalice, API testing & debugging."}
                    />
                    <Details
                        position={"Programmer Analyst Trainee"}
                        company={"Cognizant"}
                        companyLink={"https://cognizant.com"}
                        time={"Jul 2022 - Feb 2023"}
                        address={"Bengaluru, Karnataka, IN"}
                        work={"Going through Project specific documents and bootcamps to learn about client application suites, technology stacks used & Completing the domain / technical / project relation training and certifications."}
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience