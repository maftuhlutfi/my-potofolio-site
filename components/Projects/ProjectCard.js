import Link from "next/link";
import Image from "next/image";
import CustomButton from "../shared/CustomButton";

const ProjectCard = ({image, title, description, slug, link}) => {
    return (
        <div className='border-2 border-gray-800 w-full'>
            <div className='relative w-full h-56'>
                <Image src={`/projects-img/${image}`} layout='fill' className='object-cover object-center' />
            </div>
            <div className='p-5'>
                <h1 className='font-serif text-xl font-bold mb-4 truncate'>{title}</h1>
                <p className='text-base text-gray-600 mb-6 leading-relaxed line-clamp-3'>{description}</p>
                <div className='flex w-full gap-4 items-center'>
                    <Link href={`/projects/${slug}`}>
                        <a>
                            <CustomButton className='text-base'>
                                Read Case Study
                            </CustomButton>
                        </a>
                    </Link>
                    <a href={link.website} target="_blank">
                        <CustomButton className='text-base' outlined>
                            Go to Site
                        </CustomButton>
                    </a>
                </div>
            </div>
        </div>
    );
}
 
export default ProjectCard;