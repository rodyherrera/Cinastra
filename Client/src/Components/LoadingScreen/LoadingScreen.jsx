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
import CircularProgress from '@mui/material/CircularProgress';
import Fade from 'react-reveal';
import { StringGenerator } from '../../Utilities/Algorithms';
import './LoadingScreen.css';

const LoadingScreenIdentifier = 'Loading-Screen-Container';

export default function LoadingScreen({ Message, TimeOut, OnTimeOut }){
    const Identifier = StringGenerator();

    setTimeout(() => {
        const Node = document.getElementById(LoadingScreenIdentifier);
        (Node && Node.getAttribute('loader-identifier') === Identifier) && (OnTimeOut());
    }, TimeOut);

    return (
        <aside id={LoadingScreenIdentifier} loader-identifier={Identifier}>
            <Fade clear>
                <article>
                    <CircularProgress />
                </article>

                <article id='Loading-Screen-Message-Container' className='Word-Wrapper'>
                    <p>{Message}</p>
                </article>
            </Fade>
        </aside>
    );
};