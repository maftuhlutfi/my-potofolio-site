import { useRouter } from "next/router";
import Link from 'next/link'
import CustomButton from "../shared/CustomButton";
import projectData from "../../data/projectData";

const Navigation = ({slug}) => {
    const router = useRouter()
    const nextProjectSlug = projectData[(projectData.findIndex(p => p.slug == slug)+1)%projectData.length].slug

    return (
        <div className='flex justify-between mb-10'>
            <CustomButton onClick={() => router.back()}>
                <i className='icon-arrow-left mr-2' />
                Back
            </CustomButton>
            <Link href={`/projects/${nextProjectSlug}`}>
                <a>
                    <CustomButton outlined>
                        Next Project
                        <i className='icon-arrow-right ml-2' />
                    </CustomButton>
                </a>
            </Link>
        </div>
    );
}
 
export default Navigation;