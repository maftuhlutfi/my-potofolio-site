import SectionTitle from "../../shared/SectionTitle";
import techList from "./techList";

import Image from 'next/image'

const Tech = () => {
    return (
        <section id='tech' className='flex flex-col items-center'>
            <SectionTitle title='Tech Stack' style='mb-16' />
            <div className='flex flex-wrap justify-between gap-y-12 gap-x-8'>
                {techList.map((tech, index) => <Image key={index} src={`/tech-icon/${tech}.svg`} width={160} height={80} />)}
            </div>
        </section>
    );
}
 
export default Tech;