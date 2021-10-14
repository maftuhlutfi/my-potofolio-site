import CustomHead from "../../components/shared/CustomHead";
import ProjectNavigation from "../../components/SingleProject/ProjectNavigation";
import ProjectDetail from "../../components/SingleProject/ProjectDetail";
import MainLayout from "../../layout/MainLayout";

import projectData from '../../data/projectData'
import WantProjectCTA from "../../components/SingleProject/WantProjectCTA";
import OtherProjects from "../../components/SingleProject/OtherProjects";

const SingleProjectPage = ({project}) => {
    const nextProjectSlug = projectData[(projectData.findIndex(p => p.slug == project.slug)+1)%projectData.length].slug
    const randomNum = Math.floor(Math.random() * (projectData.length - 2));
    const otherProjects = projectData.filter(p => p.slug != project.slug).slice(randomNum,randomNum+2)

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
                                nextProjectSlug={nextProjectSlug} 
                            />
                            <ProjectDetail {...project} />
                        </div>
                        <div className='w-1/4 relative'>
                            <WantProjectCTA />
                            <OtherProjects projectsList={otherProjects} />
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
}
 
export default SingleProjectPage;

export async function getStaticProps({params}) {
    const project = projectData.filter(p => p.slug == params.slug)[0]

    return {
        props: {
            project
        },
    }
}

export async function getStaticPaths() {
    return {
        paths: projectData.map(project => ({params: {slug: project.slug}})),
        fallback: true
    }
}