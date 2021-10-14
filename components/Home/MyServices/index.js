import SectionTitle from "../../shared/SectionTitle";
import servicesData from '../../../data/servicesData'
import ServiceItem from "./ServiceItem";

const MyServices = () => {
    return (
        <section id='services' className='flex flex-col items-center w-full'>
            <SectionTitle title='My Services' />
            <div className='grid grid-cols-3 gap-24 mt-20'>
                {servicesData.map((service, index) => <ServiceItem key={index} {...service} />)}
            </div>
        </section>
    );
}
 
export default MyServices;