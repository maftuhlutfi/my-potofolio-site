import { useState } from "react";
import projectData from "../../../data/projectData";
import CustomButton from "../../shared/CustomButton";
import SectionTitle from "../../shared/SectionTitle";
import ProjectCard from "./ProjectCard";

import Link from 'next/link'

const MyProjects = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const handlePrev = () => {
        setActiveIndex(prev => prev == 0 ? projectData.length-1 : prev-1)
    }

    const handleNext = () => {
        setActiveIndex(prev => (prev + 1) % projectData.length)
    }

    return (
        <section id='projects' className='flex justify-between items-center'>
            <div className='w-2/3 flex items-center'>
                <i className='icon-arrow-left text-2xl bg-yellow-400 p-3 mr-8 cursor-pointer' onClick={handlePrev} />
                <ProjectCard {...projectData[activeIndex]} />
                <i className='icon-arrow-right text-2xl bg-yellow-400 p-3 ml-8 cursor-pointer' onClick={handleNext} />
            </div>
            <div className='w-1/3'>
                <SectionTitle title='My Projects' style='mb-6' />
                <p className='text-lg text-gray-600 mb-6'>
                    I’ve work with web development for 5+ years. I’ve finish some projects with clients from arround the world with their own problems.
                </p>
                <Link href='/projects'>
                    <a>
                        <CustomButton outlined>
                            See more
                            <i className='icon-arrow-right ml-2' />
                        </CustomButton>
                    </a>
                </Link>
            </div>
        </section>
    );
}
 
export default MyProjects;