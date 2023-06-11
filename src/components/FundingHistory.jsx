import React from 'react';

const FundingHistory = () => {
const data = [
    {
        year: 2023,
        title: 'Development of WASH sector National Planning, Monitoring and Reporting System',
        role: 'Principal Investigator',
        award: '$118,525',
        timePeriod: 'Dec 2022 - Sep 2023',
        doner: 'UNICEF'
    },
    {
        year: 2023,
        title: 'Development of WASH sector National Planning, Monitoring and Reporting System',
        role: 'Principal Investigator',
        award: '$118,525',
        timePeriod: 'Dec 2022 - Sep 2023',
        doner: 'UNICEF'
    },
    {
        year: 2023,
        title: 'Development of WASH sector National Planning, Monitoring and Reporting System',
        role: 'Principal Investigator',
        award: '$118,525',
        timePeriod: 'Dec 2022 - Sep 2023',
        doner: 'UNICEF'
    },
]

    return (
        <div className='md:mx-24 mx-4'>
            <p className='text-center font-bold text-2xl my-4'>Funding History</p>
            <div className="text-right mr-10">
                <p>Total amount awarded till date: 3,725,990$</p>
                <p>As Principal Investigator (PI): 1,395,468$</p>
                <p>As Co-Principal Investigator (Co-PI):    985,649$</p>
                <p>As Co-Investigator (Co-I): 1,344,873$</p>
            </div>
            <div className="text-center my-4">
                <div className="bg-indigo-950 text-white flex text-center p-1">
                    <p className='w-10'>Year</p>
                    <p className='flex-1'>Title</p>
                    <p className='w-40'>Role</p>
                    <p className='w-20'>Awarded</p>
                    <p className='w-40'>Time Period</p>
                    <p className='w-16'>Doner</p>
                </div>
                {
                    data.map(d => (
                        <div className="flex text-center border shadow p-1 my-2" key={Math.random()}>
                            <p className='w-10'>{d.year}</p>
                            <p className='flex-1'>{d.title}</p>
                            <p className='w-40'>{d.role}</p>
                            <p className='w-20'>{d.award}</p>
                            <p className='w-40'>{d.timePeriod}</p>
                            <p className='w-16'>{d.doner}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FundingHistory;
