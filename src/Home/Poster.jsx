import React from 'react';
import Fresher from './Fresher';
import Exprencend from './Exprencend';
import TopItCompany from './TopItCompany';

const Poster = () => {
    return (
        <div>
            {
                <Fresher></Fresher>
                
            }{
                <Exprencend></Exprencend>
            }
            {
                <TopItCompany></TopItCompany>
            }
        </div>
    );
};

export default Poster;