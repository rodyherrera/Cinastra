/***
 * Copyright (C) Rodolfo Herrera Hernandez. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root 
 * for full license information.
 *
 * =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
 *
 * For related information - https://github.com/rodyherrera/Cinastra/
 * 
 * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 ****/

import React from 'react';
import { Route, Navigate, Routes as RoutesBox, useLocation } from 'react-router-dom';
import { Alert } from './Components/Alert/Alert';
import Pages from './Pages';
import Layout from './Components/Layout'
import * as Declarations from './Infrastructure.json';

export default function Application(){
    const Location = useLocation();
    const { OnConnect, OnDisconnect } = Declarations.UserExperience.NetworkListeners;
    const Routes = Declarations.Routes;

    window.addEventListener('offline', () => 
        Alert({ Message: OnDisconnect, Type: 'Information' }));

    window.addEventListener('online', () => {
        Alert({ Message: OnConnect, Type: 'Success' });
        return <Navigate to={Routes.Auth} /> });
            
    return (
        <RoutesBox location={Location} key={Location.pathname}>
            <Route element={<Layout />}>
                <Route exact path={Routes.Auth} element={<Pages.Auth />} />
                <Route path={Routes.Chat} element={<Pages.Chat />} />
                <Route path={Routes.Agreement} element={<Pages.Agreement />} />
                <Route path='*' element={<Pages.NotFound />} />
            </Route>
        </RoutesBox>
    );
}
