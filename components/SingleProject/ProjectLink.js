const ProjectLink = ({link}) => {
    return (
        <div className='my-10'>
            <div className={`font-serif font-bold relative w-max mb-6`}>
                <div className='w-full h-1 bg-yellow-400 absolute bottom-1.5 left-2.5' />
                <h3 className='z-10 relative text-xl font-serif font-semibold'>Project Link</h3>
            </div>
            {link.design && <p className='text-gray-red-sec'>Design Link: <a href={link.design} target='_blank' className='font-semibold text-yellow-500'>{link.design}</a></p>}
            <p className='text-gray-red-sec'>Website Link: <a href={link.website} target='_blank' className='font-semibold text-yellow-500'>{link.website}</a></p>
        </div>
    );
}
 
export default ProjectLink;