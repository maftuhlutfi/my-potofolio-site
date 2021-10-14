import CustomHead from "../../components/shared/CustomHead";
import ProjectNavigation from "../../components/SingleProject/ProjectNavigation";
import ProjectDetail from "../../components/SingleProject/ProjectDetail";
import MainLayout from "../../layout/MainLayout";

import WantProjectCTA from "../../components/SingleProject/WantProjectCTA";
import OtherProjects from "../../components/SingleProject/OtherProjects";
import axios from "axios";
import { useRouter } from "next/router";
import Spinner from "../../components/shared/Spinner";

const SingleProjectPage = ({project}) => {
    const router = useRouter()

    if(router.isFallback || !project) {
        return (
            <div className='w-screen h-screen bg-white'>
                <Spinner width='30px' />
            </div>
        )
    }

    return (
        <>
            <CustomHead
                title={project.title}
                description={project.description}
                url={`http://maftuhlutfi.vercel.app/projects/${project.slug}`}
            />
            <MainLayout>
                <div className='pt-40 py-20 '>
                    <div className='flex'>
                        <div className='flex-shrink w-3/4 mr-10'>
                            <ProjectNavigation 
                                slug={project.slug} 
                            />
                            <ProjectDetail {...project} />
                        </div>
                        <div className='w-1/4 relative'>
                            <WantProjectCTA />
                            <OtherProjects slug={project.slug} />
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
}
 
export default SingleProjectPage;

export async function getStaticProps({params}) {
    const res = await axios.get('https://my-json-server.typicode.com/maftuhlutfi/my-potofolio-site/projects')
    const data = await res.data
    const project = await data.filter(p => p.slug == params.slug)[0]

    return {
        props: {
            project
        },
    }
}

export async function getStaticPaths() {
    const res = await axios.get('https://my-json-server.typicode.com/maftuhlutfi/my-potofolio-site/projects')
    const data = await res.data

    return {
        paths: data.map(project => ({params: {slug: project.slug}})),
        fallback: true
    }
}