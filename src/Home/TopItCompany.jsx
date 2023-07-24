import { useEffect, useState } from "react";
import TopCompanyItem from "./TopCompanyItem";


const TopItCompany = () => {
    
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('exprenced.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div>
            <div className="text-center mb-7">
                <h3 className="text-5xl font-bold text-orange-400">Top IT Companies</h3>
            </div>
            <div className="">
            {
               data?.map(dt=><TopCompanyItem key={dt.id} dt={dt}></TopCompanyItem>)
            }
            </div>
            
        </div>
    )
};

export default TopItCompany;