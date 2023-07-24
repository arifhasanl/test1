import React from 'react';

const SeekerItem = ({dt}) => {
    return (
        <div className="grid grid-cols-3 mb-7 border-1 gap-8">
        <div>
            <img className='rounded-md' src={dt?.img} alt="" />
        </div>
        <div className='w-full h-full flex items-center'>
            <div>
                <h1 className='text-4xl font-bold'>{dt.name}</h1>
            <h1 className='text-3xl font-bold my-3'>{dt?.positionName}</h1>
            <p>{dt?.location}</p>
            <p><span className="text-2xl">Experience : </span>{dt?.expreience}</p>
            </div>
        </div>
        <div className='w-full h-full flex items-center justify-end' >
            <button className="bg-green-500 px-4 rounded-md text-white py-2">Contact</button>
        </div>
    </div>
    )
};

export default SeekerItem;