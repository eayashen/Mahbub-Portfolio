import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../images/123.jpg';
import img2 from '../images/456.jpg';
import img3 from '../images/789.jpg';
import profile from '../images/pro_pic.jpg';

const Home = () => {
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://api.example.com/data');
            const jsonData = await response.json();
            // setData(jsonData);
            // setLoading(false);
          } catch (error) {
            console.log('Error fetching data:', error);
            // setLoading(false);
          }
        };
    
        // fetchData();
      }, []);

    const data = {
        name: "Mahbub-Ul Alam",
        designation: [
            {
                title: 'Associate Scientist',
                details: 'Environmental Interventions Unit icddr,b, Dhaka, Bangladesh'
            },
            {
                title: 'PhD Candidate',
                details: 'School of Civil Engineering University of Leeds, UK'
            },
            {
                title: 'Tsuha Global Fellow',
                details: 'School of Population and Global Health University of Western Australia, Australia'
            },
            {
                title: 'Editorial Board Member',
                details: 'PLOS Global Health'
            },
        ]
    }
    const awards = [
        {
            title: 'Received Tsuha Fellowship at the University of Western Australia for the period 2022-2025',
            year: 'Year 2021'
        },
        {
            title: 'Received Young Scientist award by Bangladesh Academy of Sciences, Dhaka, Bangladesh',
            year: 'Year 2019'
        },
        {
            title: 'Certificate of award for contribution to Faith-based research, House of Lords, London, UK',
            year: 'Year 2018'
        },
        {
            title: 'Outstanding contribution in reviewing articles for Public Health in 2018',
            year: 'Year 2018'
        }
    ]
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 3000);

        return () => {
        clearInterval(timer);
        };
    }, []);

    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState("I am an adherent public health researcher with focused expertise on water, sanitation, hygiene, waste management, anti-microbial resistance, and environmental pollution. I have led 20 studies since 2012 and received over 3M USD as research grant (1.5 M USD as Principal Investigator). I have successfully influenced government policy to improve menstrual hygiene and health in school based on the findings from Bangladesh National Hygiene Survey 2014. My professional aim is to lead effective health research interventions that can help in advocating for policy change with an established public health research career.I am doing my PhD at University of Leeds,UK, School of Civil Engineering, where I studying about behaviour determinants of household waste water management in Dhaka Bangladesh In present I'm an Associate scientist of icddr,b Infectious disease division where my keys responsibilities are mentoring junior researchers to develop concept notes and grant proposals, funding acquisition, protocol writing, seek ethical approval, project management and implementation, data analysis, report and manuscript writing, and dissemination.");

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        // Perform any save/update logic here, such as sending the updated text to a backend server
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };
    const handleCancelClick = () => {
        setIsEditing(false);
    }

    return (
        <div className='mt-4 md:mx-24 mx-4'>
            <div className="sm:flex gap-2">
                <div className="flex flex-col items-center sm:w-1/3 w-full p-2 gap-2">
                    <div className="max-w-full w-56 h-64">
                        <img src={profile} alt="profile" className="w-full h-full object-cover" />
                    </div>
                    <div className='text-center'><p className='font-bold text-xl'>{data.name}</p>
                        {
                            data.designation.map(d => (
                                <div key={d.title} className='my-3'>
                                    <p className='font-semibold'>{d.title}</p>
                                    <p>{d.details}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex-1">
                {isEditing ? (
                    <div className='w-full'>
                        <textarea value={text} onChange={handleChange} className="text-justify mb-4 w-full h-96 outline-none"/>
                        <button className='border px-4 py-1 mb-4 rounded mr-4' onClick={handleSaveClick}>Save</button>
                        <button className='border px-4 py-1 mb-4 rounded' onClick={handleCancelClick}>Cancel</button>
                    </div>
                    ) : (
                        <div>
                            <p className="text-justify mb-4">{text}</p>
                            <button className='border px-4 py-1 mb-4 rounded' onClick={handleEditClick}>Edit</button>
                        </div>
                    )}
                    <Carousel selectedItem={activeIndex} onChange={setActiveIndex}>
                        <div>
                            <img src={img1} alt="Image 1" />
                            {/* <p className="legend">Caption 1</p> */}
                        </div>
                        <div>
                            <img src={img2} alt="Image 2" />
                            {/* <p className="legend">Caption 2</p> */}
                        </div>
                        <div>
                            <img src={img3} alt="Image 3" />
                            {/* <p className="legend">Caption 3</p> */}
                        </div>
                    </Carousel>
                </div>
            </div>
            <div>
                <p className='w-full text-center py-1 bg-indigo-950 text-white font-semibold mt-4'>Awards</p>
                {
                    awards.map(a => (
                        <div className="flex gap-2 p-2 border rounded my-2 shadow h-fit" key={a.title}>
                            <div className="w-28 h-20">
                                <img src="" alt="" className="w-full h-full object-fit" />
                            </div>
                            <div className='flex-1'>
                                <p className="font-semibold text-md">{a.title}</p>
                                <p>{a.year}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Home;
