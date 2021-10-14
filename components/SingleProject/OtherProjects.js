import Image from 'next/image'
import Link from 'next/link'
import projectData from '../../data/projectData';

const OtherProjects = ({slug}) => {
    const randomNum = Math.floor(Math.random() * (projectData.length - 2));
    const projectsList = projectData.filter(p => p.slug != slug).slice(randomNum,randomNum+2)

    return (
        <div>
            <h1 className='font-serif text-xl mb-6 font-bold'>Other Projects</h1>
            <div className='grid gap-6'>
                {projectsList.map((p, index) => 
                    <Link key={index} href={`/projects/${p.slug}`} passHref>
                        <div className='border-2 border-gray-800 cursor-pointer'>
                            <Image src={`/projects-img/${p.image}`} width={350} height={220} className='object-cover' />
                            <div className='p-4'>
                                <h1 className='font-serif font-bold text-lg'>{p.title}</h1>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
}
 
export default OtherProjects;