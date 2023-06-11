import React, { useState } from 'react'
import {Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const Links = [
        {name: "About Me", link: '/'},
        {name: "Research", link: '/research'},
        {name: "Publications", link: '/publications'},
        {name: "Funding History", link: '/fundinghistory'},
        {name: "Contact", link: '/contact'},
    ]
    const [open, setOpen] = useState(false);
    const location = useLocation();

    return (

    <div className='w-full'>
        <h1 className='text-3xl font-bold md:mx-24 mx-4 mt-4'>Mahbub-Ul Alam</h1>
        <p className='md:mx-24 mx-4'>Exploring innovative solutions for global health and WASH challenges</p>
        <div className="flex mt-4 left-0 md:px-0 bg-indigo-950 z-50 h-8 relative">
            <div onClick={()=>setOpen(!open)} className='absolute top-1 mr-4 pl-4 cursor-pointer md:hidden text-teal-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div className={`md:flex py-1 absolute md:static md:mt-0 mt-8 mx-2 md:mx-24 bg-indigo-950 md:z-auto z-[-1] left-0 w-56 md:w-auto md:pl-0 pl-6 transition-all duration-500 ease-in ${open ? '-left-4 ':'left-[-250px]'}`}>
            {
                Links.map((link) => (
                    <Link to={link.link} key={link.name} className='md:px-2 font-semibold'><li className={`text-white hover:text-teal-400 list-none duration-500 ${location.pathname === link.link ? 'text-teal-500' : ''}`}>{link.name}</li></Link>
                ))
            }
            </div>
            <div className="flex text-white gap-2 h-full mt-2 absolute md:right-24 right-4">
                <a href="https://scholar.google.com/citations?hl=en&user=UwwIXLUAAAAJ" title="Google Scholer"><img className="img" src="scholar.png"/> </a>
                <a href="https://orcid.org/0000-0001-6940-364X" title="Orcid" className="fab fa-orcid"></a>
                <a href="#" title="Publons" className="fa"><b>P</b></a>
                <a href="https://www.linkedin.com/in/mahbubalamicddrb/" title="LInkedin" className="fa fa-linkedin"></a>
                <a href="https://twitter.com/mahbubicddrb" title="Twitter" className="fa fa-twitter"></a>
                <a href="#" title="Instagram" className="fa fa-instagram"></a>
                <a href="https://www.facebook.com/mahbubul.alam.79025" title="Facebook" className="fa fa-facebook"></a>
            </div>
        </div>
    </div>
    );
};

export default Navbar;