import Image from "next/image";

const TestimonialItem = ({avatar, content, name, via}) => {
    return (
        <div className='border-2 border-yellow-400 py-6 px-8 text-center'>
            <div className='w-16 h-16 relative mb-5 mx-auto'>
                <Image src={`/testimonials-avatar/${avatar}`} layout='fill' className='z-10 grayscale' />
                <div className='w-full h-full absolute border-2 border-yellow-400 top-2 left-2 z-0' />
            </div>
            <p className='mb-5 leading-normal w-52'>{content}</p>
            <p className='mb-2 font-serif font-bold text-yellow-400'>{name}</p>
            <p className='text-gray-600'>via {via}</p>
        </div>
    );
}
 
export default TestimonialItem;