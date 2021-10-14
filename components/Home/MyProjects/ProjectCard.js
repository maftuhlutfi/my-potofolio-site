import Link from "next/link";
import Image from "next/image";
import CustomButton from "../../shared/CustomButton";

const ProjectCard = ({image, title, description, slug, link}) => {
    return (
        <div className='border-2 border-gray-800 w-full' style={{maxWidth: 420}}>
            <div className='relative w-full h-64'>
                <Image src={`/projects-img/${image}`} layout='fill' className='object-cover object-cebter' />
            </div>
            <div className='p-5'>
                <h1 className='font-serif text-2xl font-bold mb-4 truncate'>{title}</h1>
                <p className='text-lg text-gray-600 mb-6 leading-relaxed line-clamp-3'>{description}</p>
                <div className='flex w-full gap-4'>
                    <Link href={`/projects/${slug}`}>
                        <a>
                            <CustomButton>
                                Read Case Study
                            </CustomButton>
                        </a>
                    </Link>
                    <a href={link.website} target="_blank">
                        <CustomButton outlined>
                            Go to Site
                        </CustomButton>
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default ProjectCard;