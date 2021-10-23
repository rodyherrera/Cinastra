/***
 * Copyright (C) Rodolfo Herrera Hernandez. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root 
 * for full license information.
 *
 * =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
 *
 * For related information - https://github.com/CodeWithRodi/Cinastra/
 * 
 * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 ****/

import React from 'react';
import { Link } from 'react-router-dom';

import * as Declarations from '../../../../Configuration.json';
import './StyleSheet.css';

const Routes = Declarations.Routes;

export default function AgreementMessage(){
    return (
        <section id='Auth-Agreement-Message-Container'>
            <article>
                <p>When you uses it you automatically accept the
                    <Link className='Non-Trim' id='Auth-Agreement-Message-Link' to={Routes.Agreement}>
                        terms and conditions
                    </Link>
                of this service.</p>
            </article>
        </section>
    );
}