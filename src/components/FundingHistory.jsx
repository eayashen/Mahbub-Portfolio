import React, { useEffect, useState } from 'react';

const FundingHistory = () => {
    const [total, setTotal] = useState();
    const [roleSum, setRoleSum] = useState()

    //---------------------Table update functionality ------------------
    const [isTableEditing, setIsTableEditing] = useState(false);
    const [tableRow, setTableRow] = useState(null);

    const handleUpdate = (d) => {
        // setTable((prevAward) => ({ ...prevAward, title, year }));
        setIsTableEditing(true)
        setTableRow(d)
        console.log(tableRow)
    }

    const handleSave = () => {
        console.log(tableRow)
        setIsTableEditing(false)
    }

    const handleDelete = (index) => {
        //api call
        console.log(index)
    }

    const data = [
        {
            year: 2023,
            title: 'Development of WASH sector National Planning, Monitoring and Reporting System',
            role: 'Principal Investigator',
            award: 118525,
            timePeriod: 'Dec 2022 - Sep 2023',
            doner: 'UNICEF'
        },
        {
            year: 2023,
            title: 'Development of WASH sector National Planning, Monitoring and Reporting System',
            role: 'Principal Investigator',
            award: 118525,
            timePeriod: 'Dec 2022 - Sep 2023',
            doner: 'UNICEF'
        },
        {
            year: 2023,
            title: 'Development of WASH sector National Planning, Monitoring and Reporting System',
            role: 'Co-Principal Investigator',
            award: 118525,
            timePeriod: 'Dec 2022 - Sep 2023',
            doner: 'UNICEF'
        },
    ]

    useEffect(() => {
        if (data && data.length > 0) {
          const totalSum = data.reduce((accumulator, currentObject) => {
            return accumulator + currentObject.award;
          }, 0);
          setTotal(totalSum);
      
          const roleSums = data.reduce((accumulator, currentObject) => {
            const { role, award } = currentObject;
            accumulator[role] = (accumulator[role] || 0) + award;
            return accumulator;
          }, {});
          setRoleSum(roleSums);
        }
      }, []);  

    return (
        <div className='md:mx-24 mx-4'>
            {isTableEditing && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-25 z-10 flex justify-center items-center">
                    <div className="w-96 h-fit p-4 bg-white text-black rounded space-y-4">
                        <div className='space-y-2'>
                            <div className="flex">
                                <p className='w-24'>Year: </p>
                                <input className='px-2 border rounded flex-1' type="text" onChange={e => setTableRow({...tableRow, year: e.target.value})}  value={tableRow?.year}/>
                            </div>
                            <div className="flex">
                                <p className='w-24'>Title</p>
                                <input className='px-2 border rounded flex-1' type="text" onChange={e => setTableRow({...tableRow, title: e.target.value})}  placeholder='Title' value={tableRow?.title}/>
                            </div>
                            <div className="flex">
                                <p className='w-24'>Role</p>
                                <select
                                className="px-2 border rounded flex-1"
                                onChange={(e) => setTableRow({ ...tableRow, role: e.target.value })}
                                value={tableRow?.role}
                                >
                                    <option value="">Select Role</option>
                                    <option value="Principal Investigator">Principal Investigator</option>
                                    <option value="Co-Principal Investigator">Co-Principal Investigator</option>
                                    <option value="Co-Investigator">Co-Investigator</option>
                                </select>
                            </div>
                            <div className="flex">
                                <p className='w-24'>Award</p>
                                <input className='px-2 border rounded flex-1' type="text" onChange={e => setTableRow({...tableRow, award: e.target.value})}  placeholder='Award' value={tableRow?.award}/>
                            </div>
                            <div className="flex">
                                <p className='w-24'>Time Period</p>
                                <input className='px-2 border rounded flex-1' type="text" onChange={e => setTableRow({...tableRow, timePeriod: e.target.value})}  placeholder='Time Period' value={tableRow?.timePeriod}/>
                            </div>
                            <div className="flex">
                                <p className='w-24'>Doner</p>
                                <input className='px-2 border rounded flex-1' type="text" onChange={e => setTableRow({...tableRow, doner: e.target.value})}  placeholder='Doner' value={tableRow?.doner}/>
                            </div>
                        </div>
                        <div className="flex justify-center gap-4">
                            <button className="save" onClick={handleSave}>
                                Save
                            </button>
                            <button className="cancel" onClick={() => {setIsTableEditing(false); setTableRow(null)}}>
                                Cancel
                            </button>
                        </div> 
                    </div>
                </div>
            )}

            <p className='text-center font-bold text-2xl my-4'>Funding History</p>
            <div className="text-right mr-10">
                <p>{`Total amount awarded till date: ${total}$`}</p>
                <p>{`As Principal Investigator (PI): ${roleSum ? roleSum['Principal Investigator'] ?? 0 : 0}$`}</p>
                <p>{`As Co-Principal Investigator (Co-PI): ${roleSum ? roleSum['Co-Principal Investigator'] ?? 0 : 0}$`}</p>
                <p>{`As Co-Investigator (Co-I): ${roleSum ? roleSum['Co-Investigator'] ?? 0 : 0}$`}</p>
            </div>
            <div className="text-center my-4">
                <div className="bg-indigo-950 text-white flex text-center p-1">
                    <p className='w-10'>Year</p>
                    <p className='flex-1'>Title</p>
                    <p className='w-40'>Role</p>
                    <p className='w-20'>Awarded</p>
                    <p className='w-40'>Time Period</p>
                    <p className='w-16'>Doner</p>
                    {true && (
                        <div className="w-20">Actions</div>
                    )}
                </div>
                {
                    data.map((d, index) => (
                        <div className="flex text-center border shadow p-1 my-2" key={Math.random()}>
                            <p className='w-10'>{d.year}</p>
                            <p className='flex-1'>{d.title}</p>
                            <p className='w-40'>{d.role}</p>
                            <p className='w-20'>{d.award}</p>
                            <p className='w-40'>{d.timePeriod}</p>
                            <p className='w-16'>{d.doner}</p>
                            {true && (
                                <div className="flex w-20 gap-4 justify-center items-center">
                                    <button onClick={() => handleUpdate(d)} className="fas fa-edit text-green-500"></button>
                                    <button onClick={() => handleDelete(index)} className="fas fa-trash text-red-400"></button>
                                </div>
                            )}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FundingHistory;
