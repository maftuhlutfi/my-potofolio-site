import Link from "next/link";
import { useRouter } from "next/router";
import CustomButton from "../CustomButton";

const NavList = ({items}) => {
    const pathname = useRouter().pathname

    return (
        <div className='flex gap-12 font-serif text-lg items-center'>
            {items.map((i, index) => 
                <Link key={index} href={i.link}>
                    {i.isButton ?
                        <a>
                            <CustomButton>{i.text}</CustomButton>
                        </a>
                        :
                        <a className={`relative ${pathname == i.link && 'font-semibold'}`}>
                            {i.text}
                            {pathname == i.link && <div className='absolute w-full left-0 -bottom-2 h-0.5 bg-yellow-400' />}
                        </a>
                    }
                </Link>
            )}
        </div>
    );
}
 
export default NavList;