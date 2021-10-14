import CustomHead from "../../components/shared/CustomHead";
import ProjectNavigation from "../../components/SingleProject/ProjectNavigation";
import ProjectDetail from "../../components/SingleProject/ProjectDetail";
import MainLayout from "../../layout/MainLayout";

import projectData from '../../data/projectData'
import WantProjectCTA from "../../components/SingleProject/WantProjectCTA";
import OtherProjects from "../../components/SingleProject/OtherProjects";
import { useRouter } from "next/router";

const SingleProjectPage = () => {
    const slug = useRouter().query
    const project = projectData.filter(p => p.slug == slug)

    console.log(slug)

    if (true) {
        return <div>ads</div>
    }

    return (
        <>
            <CustomHead
                title={project.title}
                description={project.description}
                url={`http://maftuhlutfi.vercel.app/${project.slug}`}
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