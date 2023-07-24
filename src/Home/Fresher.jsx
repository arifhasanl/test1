import { useEffect, useState } from "react";
import FreesherItem from "./FreesherItem";


const Fresher = () => {
    const [data,setData]=useState([]);
    const [some,setAll]=useState(true)
    useEffect(()=>{
        fetch('fresher.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div>
            <div className="text-center mb-7">
                <h3 className="text-5xl font-bold text-orange-400">Freesher Job</h3>
            </div>
            <div className="">
            {
               some?data?.slice(0,7).map(dt=><FreesherItem key={dt.id} dt={dt}></FreesherItem>):data?.map(dt=><FreesherItem key={dt.id} dt={dt}></FreesherItem>)
            }
            </div>
            <div className="text-center">
                {
                    some?<button className="border rounded-md text-white bg-orange-800 px-3 py-2" onClick={()=>setAll(false)}>See All</button>:<button className="border text-white bg-orange-800 px-3 py-2 rounded-md" onClick={()=>setAll(true)}>See Less</button>
                }
            </div>
        </div>
    );
};

export default Fresher;