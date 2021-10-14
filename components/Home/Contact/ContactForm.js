import { useState } from "react";
import CustomButton from "../../shared/CustomButton";
import Select from "../../shared/Input/Select";
import TextArea from "../../shared/Input/TextArea";
import TextField from "../../shared/Input/TextField";

const ContactForm = () => {
    const [input, setInput] = useState({
        full_name: '',
        email: '',
        project_type: '',
        description: ''
    })

    const {full_name, email, project_type, description} = input

    const handleChange = e => {
        const {name, value} = e.target
        setInput(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <form onSubmit={e => e.preventDefault()} className='w-4/5 p-9 border-2 border-gray-700 mt-12'>
            <div className='grid grid-cols-2 gap-8'>

                <div className='grid gap-4'>
                    <TextField 
                        id='full_name' 
                        name='full_name' 
                        value={full_name} 
                        onChange={handleChange} 
                        type='text' 
                        label='Full Name' 
                        className='w-full' 
                    />
                    <TextField 
                        id='email' 
                        name='email' 
                        value={email} 
                        onChange={handleChange} 
                        type='text' 
                        label='Email' 
                        className='w-full' 
                        placeholder='mail@example.com' 
                    />
                    <Select 
                        id='project_type' 
                        name='project_type' 
                        value={project_type} 
                        onChange={handleChange} 
                        label='Project Type' 
                        className='w-full'
                    >
                        <option value='Web Development'>Web Development</option>
                        <option value='Web Design'>Web Design</option>
                        <option value='Graphic Design'>Graphic Design</option>
                    </Select>
                </div>
                <TextArea 
                    id='description' 
                    name='description' 
                    value={description} 
                    onChange={handleChange} 
                    label='Project Description' 
                    className='w-full h-full' 
                    containerClassName='h-full pb-9' 
                    placeholder='I want to build ...' 
                />
            </div>
            <CustomButton className='w-full justify-center mt-8 py-3'>
                Get in Touch
            </CustomButton>
        </form>
    );
}
 
export default ContactForm;