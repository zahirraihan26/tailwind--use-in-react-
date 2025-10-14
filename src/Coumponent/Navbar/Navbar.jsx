import React from 'react';
import Link from './Link';



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
    return (
        <nav className='flex gap-5 justify-center items-center h-20 ' >

            <ul className='flex '>
                {
                    navLinks.map(route => <Link key={route.id} route={route}></Link>)
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
        </nav>
    );
};

export default Navbar;