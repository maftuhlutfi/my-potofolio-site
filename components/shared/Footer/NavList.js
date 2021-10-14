import Link from "next/link";

const NavList = ({items}) => {
    return (
        <div className='flex gap-6 my-4 text-lg text-yellow-400 items-center'>
            {items.map((i, index) => 
                <Link key={index} href={i.link}>
                    {i.text}
                </Link>
            )}
        </div>
    );
}
 
export default NavList;