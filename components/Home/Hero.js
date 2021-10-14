import CustomButton from "../shared/CustomButton";
import Image from "next/image";

const Hero = () => {
    return (
        <section id='#' className='flex items-center justify-between pt-20'>
            <div className='w-full max-w-md'>
                <p className='text-2xl mb-4'>Hello, I am</p>
                <h1 className='font-serif text-5xl leading-normal mb-4'>Muchamad Lutfi <span className='font-bold'>Maftuh</span></h1>
                <p className='text-lg leading-relaxed mb-6 text-gray-600'>A Fullstack Javascript Web Developer specialized in MERN Stack that build quality websites for your needs. I also do some graphic design.</p>
                <div className='flex gap-5'>
                    <CustomButton>
                        Connect Now!
                    </CustomButton>
                    <CustomButton outlined>
                        <i className='icon-download text-2xl mr-2' />
                        My CV
                    </CustomButton>
                </div>
            </div>
            <div className='relative' style={{width: '436px', height: '500px'}}>
                <Image src='/home/hero-img.png' layout='fill' className='object-fit' />
            </div>
        </section>
    );
}
 
export default Hero;