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

import React, { useState, useEffect, useContext } from 'react';
import { Alert } from '../../Components/Alert/Alert';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { QuickSignInContext } from '../../Services/QuickSignIn/Context';
import Fade from 'react-reveal/Fade';
import Fields from '../../Components/Auth/Form/Fields';
import * as Declarations from '../../Infrastructure.json';
import './Auth.css';

export default function Auth(){
    const { GetQuickSignInData, SetQuickSignInData } = useContext(QuickSignInContext);
    const { Username, Room } = GetQuickSignInData();
    const [GetUsername, SetUsername] = useState(Username);
    const [GetRoom, SetRoom] = useState(Room);
    const Routes = Declarations.Routes;
    const { 
        OnUsernameAndRoomEmpty, 
        OnNotRoom, 
        OnNotUsername } = Declarations.Auth.Errors;

    const ConnectHandler = (Event) => {
        if(!GetRoom || !GetUsername){
            let Message = OnNotUsername;
            if(!GetRoom && !GetUsername)
                Message = OnUsernameAndRoomEmpty;
            else if(!GetRoom)
                Message = OnNotRoom;
            Alert({ 
                Message, 
                Identifier: 'Auth-Field-Validation',
                Type: 'Error' });
            Event.preventDefault();
            return;
        }
        SetQuickSignInData({
            Username: GetUsername,
            Room: GetRoom });
    };

    useEffect(() => {
        return () => {
            SetRoom('');
            SetUsername('');
        };
    }, []);

    return (
        <main id='Join-Main'>
            <section id='Welcome-Section'>
                <Fade clear>
                    <article>
                        <h3 className='Spaced-Heading'>Welcome!</h3>
                    </article>

                    <article>
                        <h2 id='Page-Heading'>Connect with people around the world, talk with friends and share your things.</h2>
                    </article>
                </Fade>
            </section>

            <section className='Generic-Dark-Box-Shadow' id='Auth-Container'>
                <Fade clear>
                    <article id='Auth-Fields-Container'>
                        <Fields.Username
                            GetUsername={GetUsername} 
                            SetUsername={SetUsername} />

                        <Fields.Room
                            GetRoom={GetRoom} 
                            SetRoom={SetRoom} />

                        <Link onClick={ConnectHandler} to={Routes.Chat}>
                            <Button fullWidth variant='contained'>
                                <span>Connect</span>
                            </Button>
                        </Link>
                    </article>
                    
                    <section id='Auth-Agreement-Message-Container'>
                        <article>
                            <p>When you uses it you automatically accept the
                                <Link className='Non-Trim' id='Auth-Agreement-Message-Link' to={Routes.Agreement}>
                                    terms and conditions
                                </Link>
                            of this service.</p>
                        </article>
                    </section>
                </Fade>
            </section>
        </main> 
    );
}