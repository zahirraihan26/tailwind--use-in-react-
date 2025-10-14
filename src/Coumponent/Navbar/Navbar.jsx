import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';



const navLinks = [
    {
        id: 1,
        name: "Home",
        path: "/",
    },
    {
        id: 2,
        name: "About",
        path: "/about",
    },
    {
        id: 3,
        name: "Services",
        path: "/services",
    },
    {
        id: 4,
        name: "Projects",
        path: "/projects",
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact",
    },
];

const Navbar = () => {
    const [open , setopen]=useState(false)
    const links =navLinks.map(route => <Link key={route.id} route={route}></Link>)
    return (

        <nav className='flex justify-between mx-10  items-center h-20 ' >

           <span className='flex' onClick={()=>setopen(!open)}> 

           {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>} 

             
             <ul className={`md:hidden
                 absolute duration-1000
                 ${open ?   'top-8':'-top-64'} `}>
                {links}
             </ul>

            <h3 className= ' ml-20 md:ml-4 '> navbar</h3>
           </span>

            <ul className='md:flex hidden '>
                {
                    links
                }
            </ul>

            {/* <ul className='flex gap-5 justify-center items-center h-20 '>
                    
                    {navLinks.map(link => (
                        <li key={link.id}>
                            <a href={link.path}>{link.name}</a>
                        </li>
                    ))}
                </ul> */}





            <ul>





                {/* <li>
                    <a href="/">home</a>
                </li>
                <li>
                    <a href="/about">about</a>
                </li>
                <li>
                    <a href="/contact">contact</a>
                </li>
                <li>

                </li> */}
            </ul>
            <button>button</button>
        </nav>
    );
};

export default Navbar;