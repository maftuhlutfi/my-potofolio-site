const Select = ({children, id, label, className, ...otherProps}) => {
    return (
        <div>
            <label htmlFor={id} className='font-serif mb-2 text-lg block font-bold'>{label}</label>
            <select id={id} className={`text-lg py-2 px-3 border-2 border-gray-300 outline-none font-sans focus:border-yellow-400 ${className}`} {...otherProps}>
                {children}
            </select>
        </div>
    );
}
 
export default Select;