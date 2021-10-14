import { useRouter } from "next/router";
import Link from "next/link";
import menuList from "./menuList";
import menuListNonHome from "./menuListNonHome";
import NavList from "./NavList";

const Header = () => {
    const pathname = useRouter().pathname

    return (
        <div className='px-20 h-24 fixed w-screen bg-white z-50 flex items-center justify-between'>
            <Link href='/' passHref>
                <h1 className='font-serif font-bold text-2xl cursor-pointer'>Maftuh</h1>
            </Link>
            <NavList items={pathname != '/' ? menuListNonHome : menuList} />
        </div>
    );
}
 
export default Header;