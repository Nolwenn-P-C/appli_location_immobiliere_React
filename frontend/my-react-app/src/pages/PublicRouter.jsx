import React from 'react';
import {Routes, Route} from 'react-router-dom'

import Error from '@/_utils/Error';

import {Layout, Home, FicheLogement, APropos} from '@/pages'

const PublicRouter = () => {
    return (
        <div>
            <Routes>
                <Route element={<Layout/>}>
                    <Route index element={<Home/>}/>
                
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/fiche-logement/:id" element={<FicheLogement/>}/>
                    <Route path="/apropos" element={<APropos/>}/>

                    <Route path="*" element={<Error/>}/>
                </Route> 
            
            </Routes>
        </div>
    );
};

export default PublicRouter;