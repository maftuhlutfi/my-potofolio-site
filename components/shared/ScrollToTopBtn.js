import useScrollPos from "../../hooks/useScrollPos";

const ScrollToTopBtn = () => {
    const scrollYPos = useScrollPos().y

    return (
        <i 
            className={`icon-arrow-left cursor-pointer text-3xl fixed bottom-6 right-6 bg-yellow-400 p-4 transform rotate-90 
                transition-all duration-200 ${scrollYPos > 120 ? 'opacity-100 visible' : 'opacity-0 invisible'}`} 
            onClick={() => window.scrollTo(0,0)}
        />
    );
}
 
export default ScrollToTopBtn;