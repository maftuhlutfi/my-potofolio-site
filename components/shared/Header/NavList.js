import Link from "next/link";
import CustomButton from "../CustomButton";

const NavList = ({items}) => {
    return (
        <div className='flex gap-12 font-serif text-lg items-center'>
            {items.map((i, index) => 
                <Link key={index} href={i.link}>
                    {i.isButton ?
                        <a>
                            <CustomButton>{i.text}</CustomButton>
                        </a>
                        :
                        i.text
                    }
                </Link>
            )}
        </div>
    );
}
 
export default NavList;