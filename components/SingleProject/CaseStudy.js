const CaseStudy = ({caseStudy}) => {
    return (
        <div className=' my-10'>
        <div className={`font-serif text-3xl font-bold relative w-max mb-6`}>
            <div className='w-full h-1 bg-yellow-400 absolute bottom-1.5 left-2.5' />
            <h3 className='z-10 relative text-2xl font-serif font-semibold'>Case Study</h3>
        </div>
        <p className='text-gray-red-sec'>{caseStudy}</p>
        </div>
    );
}
 
export default CaseStudy;