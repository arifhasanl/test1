import React, { useState } from 'react';
import Poster from './Poster';
import Seeker from './Seeker';

const Category = () => {
    const [tab,setTab]=useState('poster')
    return (
        <div className='mt-16 mb-16'>
            <div className="text-center mb-10">
                <button onClick={()=>setTab('seeker')} className="px-4 text-white rounded-md py-2 border border-spacing-4 bg-orange-400 transition-shadow  hover:bg-green-500">Seeker Job</button>
                <button onClick={()=>setTab('poster')} className="px-4 py-2 rounded-md bg-orange-400 transition-shadow hover:bg-green-500 text-white">Poster Job</button>
            </div>
            {
                tab==='poster'?<Poster></Poster>:<Seeker></Seeker>
            }
        </div>
    );
};

export default Category;