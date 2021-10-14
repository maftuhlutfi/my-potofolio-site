import { useEffect, useRef, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import testimonialData from "../../../data/testimonialData";
import CustomButton from "../../shared/CustomButton";
import SectionTitle from "../../shared/SectionTitle";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
    return (
        <section id='testimonials' className='flex justify-between items-center w-full' style={{maxWidth: '80vw'}}>
            <div className='w-1/3'>
                <SectionTitle title='Testimonials' style='mb-6' />
                <p className='text-lg text-gray-600 mb-6'>
                    I always try to not just make my clients happy with the results but also with the process we go through in development 
                </p>
                <CustomButton outlined>
                    See more
                    <i className='icon-arrow-right ml-2' />
                </CustomButton>
            </div>
            <div className='w-3/5 flex items-center cursor-pointer'>
                <ScrollContainer className='flex gap-8 overflow-x-scroll items-start' style={{scrollBehavior: 'smooth'}}>
                    {testimonialData.map((testimoni, index) => <TestimonialItem key={index} {...testimoni} />)}
                </ScrollContainer>
            </div>
        </section>
    );
}
 
export default Testimonials;