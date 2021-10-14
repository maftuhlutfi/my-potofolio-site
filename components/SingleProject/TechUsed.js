import Image from 'next/image'

const TechUsed = ({techList}) => {
    return (
        <div className=' my-10'>
            <div className={`font-serif text-3xl font-bold relative w-max mb-8`}>
                <div className='w-full h-1 bg-yellow-400 absolute bottom-1.5 left-2.5' />
                <h3 className='z-10 relative text-2xl font-serif font-semibold'>Tech I Used</h3>
            </div>
            <div className='flex flex-wrap justify-start gap-y-12 gap-x-8'>
                {techList.map((tech, index) => <Image key={index} src={`/tech-icon/${tech}.svg`} width={100} height={50} />)}
            </div>
        </div>
    );
}
 
export default TechUsed;