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
import { RiMastodonLine } from 'react-icons/ri';
import './CurrentlyChatting.css'

export default function CurrentlyChatting({ Users }){
    return (
        <article>
            <h1>People currenly chatting</h1>
            {Users && Users.map(({ Name }) =>
                <div className='Chat-Currently-User-Container' key={Name}>
                    <div>
                        <i><RiMastodonLine /></i>
                    </div>

                    <div>
                        <h5>{Name}</h5>
                    </div>
                </div> )}
        </article>
    );
}