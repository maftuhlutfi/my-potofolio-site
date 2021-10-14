import CustomHead from "../../components/shared/CustomHead";
import projectData from "../../data/projectData";
import MainLayout from "../../layout/MainLayout";

import ProjectCard from "../../components/Projects/ProjectCard";

const ProjectsPage = () => {
    return (
        <>
            <CustomHead
                title='My Projects'
                description='Maftuh Lutfi projects'
                url={`http://maftuhlutfi.vercel.app/projects`}
            />
            <MainLayout>
                <div className='pt-40 py-20 '>
                    <div className='grid grid-cols-3 gap-8'>
                        {projectData.map((project, index) => <ProjectCard key={index} {...project} />)}
                    </div>
                </div>
            </MainLayout>
        </>
    );
}
 
export default ProjectsPage;