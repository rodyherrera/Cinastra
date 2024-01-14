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

import React, { useEffect, useRef } from 'react';
import Message from '../Message/Message';
import './Messages.css'

export default function Messages({ ChatMessages, GetName }){
    const MessageBoxReference = useRef(null);

    useEffect(() => {
        MessageBoxReference.current.addEventListener('DOMNodeInserted', (Event) =>
            Event.currentTarget.scroll({
                top: Event.currentTarget.scrollHeight, 
                behavior: 'smooth' }));
    }, []);

    return (
        <article ref={MessageBoxReference} className='Word-Wrapper' id='Chat-Room-Messages-Container'>
            {ChatMessages.map((ChatMessage, Index) => 
                <div className='Chat-User-Message-Container' key={Index}>
                    <Message Message={ChatMessage} GetName={GetName} />
                </div>
            )}
        </article>
    );
}