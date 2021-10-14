import Container from "../components/shared/Container";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const MainLayout = ({children}) => {
    return (
        <>
            <Header />
            <Container>
                {children}
            </Container>
            <Footer />
        </>
    );
}
 
export default MainLayout;