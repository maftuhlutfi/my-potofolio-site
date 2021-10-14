import Image from 'next/image'

const ServiceItem = ({icon, title, description}) => {
    return (
        <div className='w-full'>
            <Image src={`/services-icon/${icon}`} width={80} height={80} />
            <h1 className='font-serif text-2xl mt-8 font-bold'>{title}</h1>
            <p className='text-lg text-gray-600 mt-4'>{description}</p>
        </div>
    );
}
 
export default ServiceItem;