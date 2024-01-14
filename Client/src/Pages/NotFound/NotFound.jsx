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

import React, { useEffect } from 'react';
import { Navigate } from 'react-router';
import { Alert } from '../../Components/Alert/Alert';
import * as Declarations from '../../Infrastructure.json';

export default function NotFound(){
    const Routes = Declarations.Routes;
   
    useEffect(() => {
        Alert({
            Message: Declarations.UserExperience.Pages.OnNotFound,
            Type: 'Information' });
    }, []);

    return <Navigate to={Routes.Auth} />
};