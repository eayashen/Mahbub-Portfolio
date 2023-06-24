import React, { useState, useEffect } from 'react';

const Research = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [data, setData] = useState();
    const [researchTitle, setResearchTitle] = useState();
    const [isResearchTitleEditing, setIsResearchTitleEditing] = useState(false)
    const [publicationEditing, setPublicationEditing] = useState();
    const [ispublicationEditing, setIsPublicationEditing] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch('https://port.abirmunna.me/research');
            const jsonData = await response.json();
            setData(jsonData)
        } catch (error) {
            console.log('Error fetching data:', error);
            // setLoading(false);
        }
    };
    // const data = [
    //     {
    //         title: 'On Going Research',
    //         segment: [{
    //             headline: 'Development of WASH sector National Planning, Monitoring and Reporting System',
    //             details: 'This project aims to provide technical support to the GoB in developing a National Planning, Monitoring and Reporting System (NPMRS) to support decisions toward investment mobilization and equitable allocation of resources for accelerated access to quality and sustainable WASH services in Bangladesh.',
    //             projects: [
    //                 {
    //                     title: 'Shared Sanitation in Low-income Urban Settlements in Bangladesh: Research Results and Policy Recommendations.',
    //                     subTitle: 'Policy brief from QUISS study 2020',
    //                     author: 'Mahbub-Ul Alam, Sharika Ferdous, Christoph Lüthi, Vasco Schelbert, Dario Meili.'
    //                 }
    //             ]
    //         },{
    //             headline: 'Development of divisional level costed action plan to implement the national Menstrual Hygiene Management (MHM) Strategy, 2021',
    //             details: 'This project aims to provide technical support to the GoB in developing a National Planning, Monitoring and Reporting System (NPMRS) to support decisions toward investment mobilization and equitable allocation of resources for accelerated access to quality and sustainable WASH services in Bangladesh.',
    //             projects: [
    //                 {
    //                     title: 'Shared Sanitation in Low-income Urban Settlements in Bangladesh: Research Results and Policy Recommendations.',
    //                     subTitle: 'Policy brief from QUISS study 2020',
    //                     author: 'Mahbub-Ul Alam, Sharika Ferdous, Christoph Lüthi, Vasco Schelbert, Dario Meili.'
    //                 }
    //             ]
    //         }
    //         ]
    //     },
    //     {
    //         title: 'Previous Research',
    //         segment: [{
    //             headline: 'WASH Situation Assessment in Bashan Char and Development of Database and Monitoring System',
    //             details: 'This project aims to provide technical support to the GoB in developing a National Planning, Monitoring and Reporting System (NPMRS) to support decisions toward investment mobilization and equitable allocation of resources for accelerated access to quality and sustainable WASH services in Bangladesh.',
    //             projects: [
    //                 {
    //                     title: 'Shared Sanitation in Low-income Urban Settlements in Bangladesh: Research Results and Policy Recommendations.',
    //                     subTitle: 'Policy brief from QUISS study 2020',
    //                     author: 'Mahbub-Ul Alam, Sharika Ferdous, Christoph Lüthi, Vasco Schelbert, Dario Meili.'
    //                 }
    //             ]
    //             },
    //             {
    //             headline: 'WASH Situation Assessment in Bashan Char and Development of Database and Monitoring System',
    //             details: 'This project aims to provide technical support to the GoB in developing a National Planning, Monitoring and Reporting System (NPMRS) to support decisions toward investment mobilization and equitable allocation of resources for accelerated access to quality and sustainable WASH services in Bangladesh.',
    //             projects: [
    //                 {
    //                     title: 'Shared Sanitation in Low-income Urban Settlements in Bangladesh: Research Results and Policy Recommendations.',
    //                     subTitle: 'Policy brief from QUISS study 2020',
    //                     author: 'Mahbub-Ul Alam, Sharika Ferdous, Christoph Lüthi, Vasco Schelbert, Dario Meili.'
    //                 }
    //             ]
    //             }
    //         ]
    //     },
    // ]

    const handleViewPublications = (description) => {
        selectedProject === description ? setSelectedProject(null) : setSelectedProject(description);
    }
    
    const handleEdit = (id, title, description) => {
        setResearchTitle((prevData) => ({ ...prevData, id, title, description }))
        setIsResearchTitleEditing(true)
    }

    const handleSaveTitle =() => {
        if(researchTitle && researchTitle.id !== undefined) {
            const updateTitle = async () => {
                try {
                    const response = await fetch('https://port.abirmunna.me/research', {
                        method: 'PUT',
                        headers: {
                        'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            "title": researchTitle?.title || "",
                            "description": researchTitle?.description || "",
                            "id": researchTitle?.id,
                            "publications": researchTitle?.publications
                        },
                        null,
                        2
                        ),
                    });
                    
                    if (response.ok) {
                        fetchData();
                        setResearchTitle(null);
                        console.log('Data updated successfully');
                    } else {
                        console.log('Error updating data');
                    }
                } catch (error) {
                    console.log('Error updating data:', error);
                }
            };
            updateTitle();
        }
        else{
            const updateTitle = async () => {
                try {
                    const response = await fetch('https://port.abirmunna.me/research', {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            "title": researchTitle?.title || "",
                            "description": researchTitle?.description || "",
                        },
                        null,
                        2
                        ),
                    });
                    
                    if (response.ok) {
                        fetchData();
                        setResearchTitle(null);
                        console.log('Data updated successfully');
                    } else {
                        console.log('Error updating data');
                    }
                } catch (error) {
                    console.log('Error updating data:', error);
                }
            };
            updateTitle();
        }

        setIsResearchTitleEditing(false)
    }

    const handleTitleDelete = (id) => {
        const deleteResearch = async () => {
            try {
                const response = await fetch(`https://port.abirmunna.me/research?id=${id}`, {
                    method: 'DELETE',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    fetchData();
                    console.log('Data deleted successfully');
                } else {
                    console.log('Error updating data');
                }
            } catch (error) {
                console.log('Error updating data:', error);
            }
        };
        deleteResearch();
    }

    const handlePublicationsEdit = (id, research_id, title, published, authors) => {
        setPublicationEditing((prevData) => ({ ...prevData, id, research_id, title, published, authors }))
        setIsPublicationEditing(true)
    }

    const handleSavePublication =() => {
        if(publicationEditing && publicationEditing.research_id !== undefined) {
            const updatePublication = async () => {
                try {
                    const response = await fetch('https://port.abirmunna.me/publications', {
                        method: 'PUT',
                        headers: {
                        'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            "title": publicationEditing?.title || "",
                            "published": publicationEditing?.published || "",
                            "authors": publicationEditing?.authors || "",
                            "research_id": publicationEditing?.research_id,
                            "id": publicationEditing?.id
                        },
                        null,
                        2
                        ),
                    });
                    if (response.ok) {
                        fetchData();
                        setPublicationEditing(null);
                        console.log('Data updated successfully');
                    } else {
                        console.log('Error updating data');
                    }
                } catch (error) {
                    console.log('Error updating data:', error);
                }
            };
            updatePublication();
        }
        else{
            const updatePublication = async () => {
                try {
                    const response = await fetch('https://port.abirmunna.me/publications', {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            "title": publicationEditing?.title || "",
                            "published": publicationEditing?.published || "",
                            "authors": publicationEditing?.authors || "",
                            "research_id": publicationEditing?.research_id
                        },
                        null,
                        2
                        ),
                    });
                    
                    if (response.ok) {
                        fetchData();
                        setPublicationEditing(null);
                        console.log('Data updated successfully');
                    } else {
                        console.log('Error updating data');
                    }
                } catch (error) {
                    console.log('Error updating data:', error);
                }
            };
            updatePublication();
        }

        setIsPublicationEditing(false)
    }

    const handlePublicationDelete = (id) => {
        const deletePublication = async () => {
            try {
                const response = await fetch(`https://port.abirmunna.me/publications?id=${id}`, {
                    method: 'DELETE',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    fetchData();
                    console.log('Data deleted successfully');
                } else {
                    console.log('Error updating data');
                }
            } catch (error) {
                console.log('Error updating data:', error);
            }
        };
        deletePublication();
    }

    return (
        <div className='md:mx-24 mx-4'>
            {isResearchTitleEditing && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-25 z-10 flex justify-center items-center">
                    <div className="w-96 h-fit p-4 bg-white text-black rounded space-y-4">
                        <div className='space-y-2'>
                            <div className="flex">
                                <p className='w-20'>Title</p>
                                <input className='px-2 border rounded flex-1' type="text" onChange={e => setResearchTitle({...researchTitle, title: e.target.value})}  placeholder='Title' value={researchTitle?.title}/>
                            </div>
                            <div className="flex">
                                <p className='w-20'>Description</p>
                                <input className='px-2 border rounded flex-1' type="text" onChange={e => setResearchTitle({...researchTitle, description: e.target.value})}  placeholder='Description' value={researchTitle?.description}/>
                            </div>
                        </div>
                        <div className="flex justify-center gap-4">
                            <button className="save" onClick={handleSaveTitle}>
                                Save
                            </button>
                            <button className="cancel" onClick={() => {setIsResearchTitleEditing(false); setResearchTitle(null)}}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {ispublicationEditing && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-25 z-10 flex justify-center items-center">
                    <div className="w-96 h-fit p-4 bg-white text-black rounded space-y-4">
                        <div className='space-y-2'>
                            <div className="flex">
                                <p className='w-20'>Title</p>
                                <input className='px-2 border rounded flex-1' type="text" onChange={e => setPublicationEditing({...publicationEditing, title: e.target.value})}  placeholder='Title' value={publicationEditing?.title}/>
                            </div>
                            <div className="flex">
                                <p className='w-20'>Published</p>
                                <input className='px-2 border rounded flex-1' type="text" onChange={e => setResearchTitle({...publicationEditing, published: e.target.value})}  placeholder='Published' value={publicationEditing?.published}/>
                            </div>
                            <div className="flex">
                                <p className='w-20'>Authors</p>
                                <input className='px-2 border rounded flex-1' type="text" onChange={e => setResearchTitle({...publicationEditing, authors: e.target.value})}  placeholder='Authors' value={publicationEditing?.authors}/>
                            </div>
                        </div>
                        <div className="flex justify-center gap-4">
                            <button className="save" onClick={handleSavePublication}>
                                Save
                            </button>
                            <button className="cancel" onClick={() => {setIsPublicationEditing(false); setPublicationEditing(null)}}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <p className='text-2xl font-bold text-center my-4'>Research</p>
            {
                data?.map(d => (
                    <div className='my-4' key={d.id}>
                        <p className="text-xl font-bold bg-indigo-950 p-2 text-white w-fit">{d.title}</p>
                        <p className="">{d.description}</p>
                        <div className="flex gap-4">
                            <button onClick={() => handleEdit(d.id, d.title, d.description)} className="fas fa-edit"></button>
                            <button onClick={() => handleTitleDelete(d.id)} className="fas fa-trash text-red-500"></button>
                        </div>
                        <button onClick={() => handleViewPublications(d.description)} className='border px-2 rounded my-2'>View Publications</button>
                        {selectedProject === d.description && (
                            d.publications.map(p => (
                                <div key={Math.random()} className='border-b mb-4'>
                                    <p className="font-semibold">{p.title}</p>
                                    <p>{p.published}</p>
                                    <p>{p.authors}</p>
                                    <div className="flex gap-4">
                                        <button onClick={() => handlePublicationsEdit(p.id, p.research_id, p.title, p.published, p.authors)} className="fas fa-edit"></button>
                                        <button onClick={() => handlePublicationDelete(d.id)} className="fas fa-trash text-red-500"></button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                ))
            }
        </div>
    );
}

export default Research;
