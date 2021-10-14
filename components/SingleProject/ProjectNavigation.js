import { useRouter } from "next/router";
import Link from 'next/link'
import CustomButton from "../shared/CustomButton";

const Navigation = ({nextProjectSlug}) => {
    const router = useRouter()

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