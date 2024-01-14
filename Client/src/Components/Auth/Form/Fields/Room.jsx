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
 import { Alert } from '../../../Alert/Alert';
 import { TextField } from '@mui/material';
 import { BsChatLeftText } from 'react-icons/bs';
 import * as Declarations from '../../../../Infrastructure.json';
 import { IsFormFieldValid } from '../../../../Utilities/Runtime';
 
 const { MaxLength, MinLength } = Declarations.Auth.Fields.Room;
 
 const InputProperties = {
     maxLength: MaxLength,
     minLength: MinLength
 };
 
 export default function RoomField({ SetRoom, GetRoom }){        
     const OnChangeHandler = (Event) => {
         SetRoom(Event.target.value);
         const RoomLength = GetRoom.length;
         if(RoomLength < MinLength)
             Alert({
                 Message: `The room name must contain at least ${MinLength} characters.`,
                 Type: 'Error',
                 Identifier: 'Auth-Field-Validation' });
         else if(RoomLength > MaxLength)
             Alert({
                 Message: `The room name cannot contain more than ${MaxLength} characters.`,
                 Type: 'Error',
                 Identifier: 'Auth-Field-Validation' });
     };
 
     return (
         <div className='Auth-Field-Container'>
             <TextField
                 fullWidth
                 label='Room'
                 type='text'
                 variant='filled'
                 aria-required='true'
                 aria-label='Room'
                 name='Room'
                 error={IsFormFieldValid('Room', GetRoom)}
                 inputProps={InputProperties}
                 defaultValue={GetRoom}
                 onChange={OnChangeHandler} 
                 InputProps={{ endAdornment: <i><BsChatLeftText /></i> }} />
         </div>
     );
 }