import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../images/123.jpg';
import img2 from '../images/456.jpg';
import img3 from '../images/789.jpg';
import profile from '../images/pro_pic.jpg';

const Home = () => {
    const [about, setAbout] = useState();
    const [designation, setDesignation] = useState();
    
    useEffect(() => {
        fetchData();
        fetchDesignation();
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

    const fetchDesignation = async () => {
        try {
            const response = await fetch('https://portfolio_api-1-x0019801.deta.app/designation');
            const jsonData = await response.json();
            setDesignation(jsonData)
        } catch (error) {
            console.log('Error fetching data:', error);
            // setLoading(false);
        }
    };

    //---------------------------Image edit functionality-------------------------------
    const [imageEditing, setImageEditing] = useState(false);
    const [image, setImage] = useState();

    const handleSaveImage = () => {
        //api call
        console.log(image)
        setImage(null)
        imageEditing(false)
    }

    //--------------------------Bio editing functionality-------------------------------
    const [isBioEditing, setIsBioEditing] = useState(false);
    const [bio, setBio] = useState(null);

    const handleSaveBio = () => {
        //api call
        console.log(bio)
        setIsBioEditing(false)
        setBio(null);
    }

    const handleBioUpdateButton = (index, name, company, location) => {
        setBio((prevBio) => ({ ...prevBio, name, company, location }));
        setIsBioEditing(true)

        console.log(index, name, company, location)
    }

    const handleBioDelete = (id) => {
        //api call
        console.log(id)
    }

    //---------------------------Image editing functionality---------------------------

    const handleCarouselImage = () => {

    }

    //-------------------------Award editing functionality----------------------------
    const [isAwardEditing, setIsAwardEditing] = useState(false);
    const [award, setAward] = useState(null);

    const handleUpdateAward = (index, title, year) => {
        setAward((prevAward) => ({ ...prevAward, title, year }));
        setIsAwardEditing(true)
    }

    const handleSaveAward = () => {
        console.log(award)
        setIsAwardEditing(false)
    }

    const handleDeleteAward = (index) => {
        //api call
        console.log(index)
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

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        // Perform any save/update logic here, such as sending the updated text to a backend server
    };

    const handleChange = (event) => {
        // setText(event.target.value);
    };
    const handleCancelClick = () => {
        setIsEditing(false);
    }

    return (
        <div className='mt-4 md:mx-24 mx-4'>
            {imageEditing && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-25 z-10 flex justify-center items-center">
                    <div className="w-96 h-fit p-4 bg-white text-black rounded space-y-4">
                        <input type="file" onChange={e => setImage(e.target.value)}/>
                        <div className="flex justify-center gap-4">
                            <button className="bg-blue-400 rounded px-4 py-1 text-white hover:bg-blue-500" onClick={handleSaveImage}>
                                Save
                            </button>
                            <button className="bg-red-400 rounded px-4 py-1 text-white hover:bg-red-500" onClick={() => setImageEditing(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isBioEditing && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-25 z-10 flex justify-center items-center">
                    <div className="w-96 h-fit p-4 bg-white text-black rounded space-y-4">
                        <div className='space-y-2'>
                            <div className="flex">
                                <p className='w-20'>Title</p>
                                <input className='px-2 border rounded flex-1' type="text" onChange={e => setBio({...bio, name: e.target.value})}  placeholder='Title' value={bio?.name}/>
                            </div>
                            <div className="flex">
                                <p className='w-20'>Company</p>
                                <input className='px-2 border rounded flex-1' type="text" onChange={e => setBio({...bio, company: e.target.value})}  placeholder='Company' value={bio?.company}/>
                            </div>
                            <div className="flex">
                                <p className='w-20'>Locaton</p>
                                <input className='px-2 border rounded flex-1' type="text" onChange={e => setBio({...bio, location: e.target.value})}  placeholder='Locaton' value={bio?.location}/>
                            </div>
                        </div>
                        <div className="flex justify-center gap-4">
                            <button className="save" onClick={handleSaveBio}>
                                Save
                            </button>
                            <button className="cancel" onClick={() => {setIsBioEditing(false); setBio(null)}}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isAwardEditing && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-25 z-10 flex justify-center items-center">
                    <div className="w-96 h-fit p-4 bg-white text-black rounded space-y-4">
                        <div className='space-y-2'>
                            <div className="flex">
                                <p className='w-16'>Image: </p>
                                <input type="file" onChange={e => setAward({...award, image: e.target.value})}  value={award?.image}/>
                            </div>
                            <div className="flex">
                                <p className='w-16'>Title</p>
                                <input className='px-2 border rounded flex-1' type="text" onChange={e => setAward({...award, title: e.target.value})}  placeholder='Title' value={award?.title}/>
                            </div>
                            <div className="flex">
                                <p className='w-16'>Year</p>
                                <input className='px-2 border rounded flex-1' type="text" onChange={e => setAward({...award, year: e.target.value})}  placeholder='Year' value={award?.year}/>
                            </div>
                        </div>
                        <div className="flex justify-center gap-4">
                            <button className="save" onClick={handleSaveAward}>
                                Save
                            </button>
                            <button className="cancel" onClick={() => {setIsAwardEditing(false); setBio(null)}}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="sm:flex gap-2">
                <div className="flex flex-col items-center sm:w-1/3 w-full p-2 gap-2">
                    <div className="max-w-full w-56 h-64">
                        <img src={profile} alt="profile" className="w-full h-full object-cover"/>
                    </div>
                    <div  onClick={() => setImageEditing(true)} className="fas fa-edit cursor-pointer scale-110 text-green-500"></div>
                    <div className='text-center'><p className='font-bold text-xl'>{about?.name}</p>
                        {
                            designation?.map((d, index) => (
                                <div key={d.name}>
                                    <div className='my-3'>
                                        <p className='font-semibold'>{d.name}</p>
                                        <p>{d.company}</p>
                                        <p>{d.location}</p>
                                    </div>
                                    <div className="flex justify-center gap-4">
                                        <button className="fas fa-edit text-green-500" onClick={() => handleBioUpdateButton(d.id, d.name, d.company, d.location)}></button>
                                        <button className="fas fa-trash text-red-400" onClick={() => handleBioDelete(d.id)}></button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <button onClick={() => setIsBioEditing(true)} className="edit">ADD</button>
                </div>

                <div className="flex-1">
                {isEditing ? (
                    <div className='w-full'>
                        <textarea value={about?.bio} onChange={handleChange} className="text-justify mb-4 w-full h-96 outline-none"/>
                        <button className='border px-4 py-1 mb-4 rounded mr-4' onClick={handleSaveClick}>Save</button>
                        <button className='border px-4 py-1 mb-4 rounded' onClick={handleCancelClick}>Cancel</button>
                    </div>
                    ) : (
                        <div>
                            <p className="text-justify mb-4">{about?.bio}</p>
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
                    <div>
                        <div className="flex">

                        </div>
                    </div>
                    <button onClick={handleCarouselImage} className="edit">ADD</button>
                </div>
            </div>
            <div>
                <p className='w-full text-center py-1 bg-indigo-950 text-white font-semibold mt-4'>Awards</p>
                {
                    awards.map((a, index)=> (
                        <div className="flex gap-2 p-2 border rounded my-2 shadow h-fit" key={a.title}>
                            <div className="w-28 h-20">
                                <img src="" alt="" className="w-full h-full object-fit" />
                            </div>
                            <div className='flex-1'>
                                <p className="font-semibold text-md">{a.title}</p>
                                <p>{a.year}</p>
                            </div>
                            {true && (
                                <div className="flex gap-4 h-fit my-auto">
                                    <button className="fas fa-edit text-green-500" onClick={() => handleUpdateAward(index, a.title, a.year)}></button>
                                    <button className="fas fa-trash text-red-400" onClick={() => handleDeleteAward(index)}></button>
                                </div>
                            )}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Home;
