import React, { useState, useEffect } from 'react'
import {Link, useLocation } from 'react-router-dom'
import scholar from '../images/scholar.png'

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
    const [about, setAbout] = useState();
    const [isMottoEditing, setIsMottoEditing] = useState(false);
    const [motto, setMotto] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://portfolio_api-1-x0019801.deta.app/about');
            const jsonData = await response.json();
            setAbout(jsonData[0])
        } catch (error) {
            console.log('Error fetching data:', error);
            // setLoading(false);
        }
    };

    const handleMotto = () => {
        setMotto(about?.motto);
        setIsMottoEditing(true);
    }

    const handleSaveClick = () => {
        const updateData = async () => {
            try {
                const response = await fetch('https://portfolio_api-1-x0019801.deta.app/about', {
                    method: 'PUT',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "name": about?.name,
                        "motto": motto,
                        "bio": about?.bio
                    },
                    null,
                    2
                    ),
                });
                
                if (response.ok) {
                    console.log('Data updated successfully');
                } else {
                    console.log('Error updating data');
                }
            } catch (error) {
                console.log('Error updating data:', error);
            }
        };
    
        updateData();
        fetchData();
        setIsMottoEditing(false)
    }

    return (
        <div className='w-full'>
            <h1 className='text-3xl font-bold md:mx-24 mx-4 mt-4'>{about?.name}</h1>
            {isMottoEditing ? (
                <div className='md:mx-24 mx-4 flex'>
                    <textarea value={motto} onChange={(e) => setMotto(e.target.value)} className="flex-1 outline-none"/>
                    <div className="flex gap-4 h-fit">
                        <button className='save' onClick={handleSaveClick}>Save</button>
                        <button className='cancel' onClick={() => setIsMottoEditing(false)}>Cancel</button>
                    </div>
                </div>
            ) : (
                <div className="flex">
                    <p className='md:mx-24 mx-4'>{about?.motto}</p>
                    <button onClick={handleMotto} className="fas fa-edit"></button>
                </div>
            )}
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
                    <a  href="https://scholar.google.com/citations?hl=en&user=UwwIXLUAAAAJ" title="Google Scholer"><img className='h-5 w-5 -mt-0.5' src={scholar} alt='scholar'/></a>
                    <a href="https://orcid.org/0000-0001-6940-364X" title="Orcid" className="fab fa-orcid"><span className="sr-only">Orcid</span></a>
                    <a href="#" title="Publons" className="fa"><b>P</b></a>
                    <a href="https://www.linkedin.com/in/mahbubalamicddrb/" title="LInkedin" className="fab fa-linkedin-in"></a>
                    <a href="https://twitter.com/mahbubicddrb" title="Twitter" className="fab fa-twitter"></a>
                    <a href="#" title="Instagram" className="fab fa-instagram"></a>
                    <a href="https://www.facebook.com/mahbubul.alam.79025" title="Facebook" className="fab fa-facebook-f"></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;