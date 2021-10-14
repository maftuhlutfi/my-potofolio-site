import Image from 'next/image'
import CaseStudy from './CaseStudy';
import ProjectLink from './ProjectLink';
import Solution from './Solution';
import TechUsed from './TechUsed';

const ProjectDetail = ({title, slug, image, description, case_study, solution, tech, link}) => {
    return (
        <div>
            <Image src={`/projects-img/${image}`} width={1000} height={633} className='object-cover' />
            <div className='mt-9'>
                <h1 className='text-3xl font-serif font-bold mb-4'>{title}</h1>
                <p className='text-gray-red-sec'>{description}</p>
                <CaseStudy caseStudy={case_study} />
                <Solution solution={solution} />
                <TechUsed techList={tech} />
                <ProjectLink link={link} />
            </div>
        </div>
    );
}
 
export default ProjectDetail;