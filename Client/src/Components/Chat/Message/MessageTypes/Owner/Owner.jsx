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
import ReactEmoji from 'react-emoji';
import './Owner.css';

export default function OwnerMessage({ Owner, Text }){
    return (
        <section>
            <p>
                <span className='Chat-Generic-Message-Name Select-Text Chat-Message-OwnerName'>
                    {Owner}:
                </span> <span className='Chat-Generic-Message-Text Select-Text Chat-Message-OwnerText'>
                    {ReactEmoji.emojify(Text)}
                </span>
            </p>
        </section>
    );
}