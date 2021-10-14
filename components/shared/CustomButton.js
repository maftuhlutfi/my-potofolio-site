const CustomButton = ({className, outlined, children, ...otherProps}) => {
    return (
        <button className={`text-lg py-2 px-4 font-serif font-semibold flex items-center text-center ${outlined ? 'border-2 border-yellow-400 hover:bg-yellow-100' : 'bg-yellow-400'} ${className}`} {...otherProps}>
            {children}
        </button>
    );
}
 
export default CustomButton;