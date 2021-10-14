const Container = ({children}) => {
    return (
        <div className='w-9/12 max-w-7xl min-h-screen relative mx-auto'>
            {children}
        </div>
    );
}
 
export default Container;