import { useRouter } from "next/router";
import menuList from "../Header/menuList";
import menuListNonHome from "../Header/menuListNonHome";
import NavList from "./NavList";

const Footer = () => {
    const pathname = useRouter().pathname

    return (
        <section className='bg-gray-red flex flex-col items-center py-8'>
            <h3 className='text-white font-serif text-xl'>Menu</h3>
            <NavList items={pathname != '/' ? menuListNonHome : menuList} />
            <h3 className='text-white font-serif text-xl'>@2021 Maftuh</h3>
        </section>
    );
}
 
export default Footer;