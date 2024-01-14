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
import Fade from 'react-reveal';
import io from 'socket.io-client';
import * as Declarations from '../../Infrastructure.json';
import LoadingScreen from '../../Components/LoadingScreen';
import Messages from '../../Components/Chat/Messages';
import CurrentlyChatting from '../../Components/Chat/CurrentlyChatting';
import { TextField, Button } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import { AiOutlineClear, AiOutlineClose, AiOutlineSend } from 'react-icons/ai';
import { HiOutlineStatusOnline } from 'react-icons/hi';
import { IsMessageInvalid } from '../../Utilities/Runtime';
import { Alert, RemoveAlertIfExists } from '../../Components/Alert/Alert';
import { QuickSignInContext } from '../../Services/QuickSignIn/Context';
import './Chat.css'

let Socket;

export default function Chat(){
    RemoveAlertIfExists('Auth-Field-Validation');
    const Navigate = useNavigate();
    const [GetName, SetName] = useState('');
    const [GetRoom, SetRoom] = useState('');
    const [GetUsers, SetUsers] = useState([]);
    const [GetMessage, SetMessage] = useState('');
    const [GetMessages, SetMessages] = useState([]);
    const [GetError, SetError] = useState('');
    const [GetIsLoading, SetIsLoading] = useState(true);
    const { Server, ConnectionTimeOut } = Declarations.Backend;
    const { OnNotOnline, OnServerDown } = Declarations.Chat;
    const Routes = Declarations.Routes;
    const { MaxLength } = Declarations.Chat.Message;
    const { GetQuickSignInData } = useContext(QuickSignInContext);

    useEffect(() => {
        if(!GetError)
            return;
        Alert({ Message: GetError, Type: 'Error' });
        Navigate(Routes.Auth);
    }, [GetError]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const OfflineHandler = () => SetError(OnNotOnline);
        window.addEventListener('offline', OfflineHandler);
        const { Username, Room } = GetQuickSignInData();
        SetIsLoading(true);
        Socket = io.connect(Server);
        SetRoom(Room);
        SetName(Username);
        Socket.emit('join', { Username, Room },
            (ClientError) => {
                (ClientError) && (SetError(ClientError));
                SetIsLoading(false);
            });
        Socket.on('Message', (Message) => 
                SetMessages(GetMessages => [...GetMessages, Message]));
        Socket.on('RoomData', ({ Users }) => SetUsers(Users));
        return () => {
            window.removeEventListener('offline', OfflineHandler);
            Socket.disconnect();
            SetName('');
            SetRoom('');
            SetUsers([]);
            SetMessages([]);
            SetMessage('');
            SetError('');
            SetIsLoading(false);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const SendMessageHandler = () =>
        (GetMessage) && (Socket.emit('SendMessage', GetMessage, () => SetMessage('')))

    return (
        <main id='Chat-Main'>
            {(GetIsLoading) && (
                <LoadingScreen
                    TimeOut={ConnectionTimeOut}
                    OnTimeOut={() => SetError(OnServerDown)}
                    Message={`Connecting to the server, wait a moment, ${GetName}.`} /> 
            )}

            <Fade clear>
                <section className='Generic-Dark-Box-Shadow' id='Chat-Messages-Container'>
                    <article id='Chat-Room-Information-Container'>
                        <div>
                            <div>
                                <i><HiOutlineStatusOnline /></i>
                            </div>
                        </div>

                        <div>
                            <div id='Chat-Room-Name-Container' className='Text-Ellipsis'>
                                <h3>{GetRoom}</h3>                    
                            </div>
                        </div>

                        <div>
                            <div>
                                <i className='Cursor-Pointer' onClick={() => 
                                        SetMessages([{ 'User': 'Room', 'Text': 'The chat was cleaned.' }])}>
                                    <AiOutlineClear />
                                </i>
                                <Link to={Routes.Auth}>
                                    <i><AiOutlineClose /></i>
                                </Link>
                            </div>
                        </div>
                    </article>

                    <Messages GetName={GetName} ChatMessages={GetMessages} />
            
                    <article id='Chat-User-Actions-Container'>
                        <div id='Chat-Message-Input-Container'>
                            <TextField
                                fullWidth
                                aria-label='Message'
                                name='Message'
                                placeholder='Type a message...'
                                error={IsMessageInvalid(GetMessage)}
                                inputProps={{ maxLength: MaxLength }}
                                value={GetMessage}
                                onChange={(Event) => SetMessage(Event.target.value)}
                                onKeyPress={(Event) => (Event.key === 'Enter') && SendMessageHandler()} />
                        </div>

                        <div id='Chat-Message-Send-Button-Container'>
                            <Button id='Chat-Message-Send-Button' fullWidth onClick={() => SendMessageHandler(GetMessage)}>
                                <AiOutlineSend />
                            </Button>
                        </div>
                    </article>
                </section>
                
                <section className='Generic-Dark-Box-Shadow'>
                    <CurrentlyChatting Users={GetUsers} />
                </section>
            </Fade>
        </main> 
    );
}