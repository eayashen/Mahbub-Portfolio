import React, { useState } from 'react';

const Research = () => {
    const [selectedProject, setSelectetProject] = useState();

    const data = [
        {
            title: 'On Going Research',
            segment: [{
                headline: 'Development of WASH sector National Planning, Monitoring and Reporting System',
                details: 'This project aims to provide technical support to the GoB in developing a National Planning, Monitoring and Reporting System (NPMRS) to support decisions toward investment mobilization and equitable allocation of resources for accelerated access to quality and sustainable WASH services in Bangladesh.',
                projects: [
                    {
                        title: 'Shared Sanitation in Low-income Urban Settlements in Bangladesh: Research Results and Policy Recommendations.',
                        subTitle: 'Policy brief from QUISS study 2020',
                        author: 'Mahbub-Ul Alam, Sharika Ferdous, Christoph Lüthi, Vasco Schelbert, Dario Meili.'
                    }
                ]
            },{
                headline: 'Development of divisional level costed action plan to implement the national Menstrual Hygiene Management (MHM) Strategy, 2021',
                details: 'This project aims to provide technical support to the GoB in developing a National Planning, Monitoring and Reporting System (NPMRS) to support decisions toward investment mobilization and equitable allocation of resources for accelerated access to quality and sustainable WASH services in Bangladesh.',
                projects: [
                    {
                        title: 'Shared Sanitation in Low-income Urban Settlements in Bangladesh: Research Results and Policy Recommendations.',
                        subTitle: 'Policy brief from QUISS study 2020',
                        author: 'Mahbub-Ul Alam, Sharika Ferdous, Christoph Lüthi, Vasco Schelbert, Dario Meili.'
                    }
                ]
            }
            ]
        },
        {
            title: 'Previous Research',
            segment: [{
                headline: 'WASH Situation Assessment in Bashan Char and Development of Database and Monitoring System',
                details: 'This project aims to provide technical support to the GoB in developing a National Planning, Monitoring and Reporting System (NPMRS) to support decisions toward investment mobilization and equitable allocation of resources for accelerated access to quality and sustainable WASH services in Bangladesh.',
                projects: [
                    {
                        title: 'Shared Sanitation in Low-income Urban Settlements in Bangladesh: Research Results and Policy Recommendations.',
                        subTitle: 'Policy brief from QUISS study 2020',
                        author: 'Mahbub-Ul Alam, Sharika Ferdous, Christoph Lüthi, Vasco Schelbert, Dario Meili.'
                    }
                ]
                },
                {
                headline: 'WASH Situation Assessment in Bashan Char and Development of Database and Monitoring System',
                details: 'This project aims to provide technical support to the GoB in developing a National Planning, Monitoring and Reporting System (NPMRS) to support decisions toward investment mobilization and equitable allocation of resources for accelerated access to quality and sustainable WASH services in Bangladesh.',
                projects: [
                    {
                        title: 'Shared Sanitation in Low-income Urban Settlements in Bangladesh: Research Results and Policy Recommendations.',
                        subTitle: 'Policy brief from QUISS study 2020',
                        author: 'Mahbub-Ul Alam, Sharika Ferdous, Christoph Lüthi, Vasco Schelbert, Dario Meili.'
                    }
                ]
                }
            ]
        },
    ]

    return (
        <div className='md:mx-24 mx-4'>
            <p className='text-2xl font-bold text-center my-4'>Research</p>
            {
                data.map(d => (
                    <div className='my-4' key={d.title}>
                        <p className="text-xl font-bold bg-indigo-950 p-2 text-white w-fit">{d.title}</p>
                        {
                            d.segment.map(s => (
                                <div key={Math.random()}>
                                    <p className="font-bold">{s.headline}</p>
                                    <p>{s.details}</p>
                                    <button onClick={() => setSelectetProject(s.headline)} className='border px-2 rounded my-2'>View Publications</button>
                                    {selectedProject === s.headline && (
                                        s.projects.map(p => (
                                            <div key={Math.random()} className='border-b mb-4'>
                                                <p className="font-semibold">{p.title}</p>
                                                <p>{p.subTitle}</p>
                                                <p>{p.author}</p>
                                            </div>
                                        ))
                                    )}
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default Research;
