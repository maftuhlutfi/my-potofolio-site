const SectionTitle = ({title, style}) => {
    return (
        <div className={`font-serif text-3xl font-bold relative w-max ${style}`}>
            <div className='w-full h-2 bg-yellow-400 absolute bottom-1 left-4' />
            <p className='z-10 relative'>{title}</p>
        </div>
    );
}
 
export default SectionTitle;