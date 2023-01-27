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
import ReactEmoji from 'react-emoji';
import './Stranger.css';

export default function StrangerMessage({ User, Text }){
    return (
        <section>
            <p>
                <span className='Chat-Generic-Message-Name Select-Text Chat-Message-Username'>
                    {User}:
                </span> <span className='Chat-Generic-Message-Text Select-Text Chat-Message-Text'>
                    {ReactEmoji.emojify(Text)}
                </span>
            </p>
        </section>
    );
}