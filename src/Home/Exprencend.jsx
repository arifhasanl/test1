import { useEffect, useState } from 'react';
import ExpreiencedItem from './ExpreiencedItem';

const Exprencend = () => {
    const [data,setData]=useState([]);
    const [some,setAll]=useState(true)
    useEffect(()=>{
        fetch('exprenced.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div>
            <div className="text-center mb-7">
                <h3 className="text-5xl font-bold text-orange-400">Experienced Jobs</h3>
            </div>
            <div className="">
            {
               some?data?.slice(0,7).map(dt=><ExpreiencedItem key={dt.id} dt={dt}></ExpreiencedItem>):data?.map(dt=><ExpreiencedItem key={dt.id} dt={dt}></ExpreiencedItem>)
            }
            </div>
            <div className="text-center">
                {
                    some?<button className="border rounded-md text-white bg-orange-800 px-3 py-2" onClick={()=>setAll(false)}>See All</button>:<button className="border text-white bg-orange-800 px-3 py-2 rounded-md" onClick={()=>setAll(true)}>See Less</button>
                }
            </div>
        </div>
    )
};

export default Exprencend;