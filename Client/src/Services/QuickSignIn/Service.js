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

import { StringGenerator } from '../../Utilities/Algorithms';
import { ParseCredentialValue, GenerateRandomUsername } from '../../Utilities/Runtime';
import * as Declarations from '../../Infrastructure.json';

const { DefaultRoom, DefaultUsername } = Declarations.Auth;
const CredentialsConfiguration = Declarations.Auth.Fields;

const CIN_USERNAME_ID = 'CINASTRA_QUICK-SIGN-IN_USERNAME';
const CIN_ROOM_ID = 'CINASTRA_QUICK-SIGN-IN_ROOM';

export const SetQuickSignInData = ({ Username = undefined, Room = undefined }) => {
    (Username) && (
        localStorage.setItem(CIN_USERNAME_ID, ParseCredentialValue('Username', Username)));
    (Room) && (
        localStorage.setItem(CIN_ROOM_ID, ParseCredentialValue('Room', Room)));
};

export const GetQuickSignInData = () => {
    let Username = 
        localStorage.getItem(CIN_USERNAME_ID) || GenerateRandomUsername(DefaultUsername);
    let Room = 
        localStorage.getItem(CIN_ROOM_ID) || DefaultRoom;
    if(Username.includes('*')){
        Username = Username.replaceAll('*', '').replaceAll(' ', '');
        Username += StringGenerator(
            CredentialsConfiguration.Username.MaxLength - Username.length);
        SetQuickSignInData({ Username: Username });
    }
    if(Room.includes('*')){
        Room = Room.replaceAll('*', '').replaceAll(' ', '');
        Room += StringGenerator(
            CredentialsConfiguration.Room.MaxLength - Room.length);
        SetQuickSignInData({ Room: Room });
    }
    return { Username, Room };
};