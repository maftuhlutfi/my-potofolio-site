import SectionTitle from "../../shared/SectionTitle";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <section id='talk' className='flex flex-col items-center'>
            <SectionTitle title='Talk About Your Project' style='mb-6' />
            <p className='text-lg text-gray-600 mb-6 w-1/2 text-center'>
                Tell us everything about your project, we will be the glad to help. Fill out the form below
            </p>
            <ContactForm />
        </section>
    );
}
 
export default Contact;