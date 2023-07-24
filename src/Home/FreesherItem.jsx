

const FreesherItem = ({dt}) => {
    console.log(dt.positionName);
    return (
        <div className="grid grid-cols-3 mb-7 border-1 gap-8">
        <div>
            <img className='rounded-md' src={dt?.logo} alt="" />
        </div>
        <div className='w-full h-full flex items-center'>
            <div>
            <h1 className='text-3xl font-bold mb-3'>{dt?.positionName}</h1>
            <p>{dt?.location}</p>
            </div>
        </div>
        <div className='w-full h-full flex items-center justify-end' >
            <button className="bg-green-500 px-4 rounded-md text-white py-2">Aplay</button>
        </div>
    </div>
    );
};

export default FreesherItem;