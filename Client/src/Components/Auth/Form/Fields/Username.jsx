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
 import { FiUser } from 'react-icons/fi';
 import * as Declarations from '../../../../Infrastructure.json';
 import { IsFormFieldValid } from '../../../../Utilities/Runtime';
 const { MaxLength, MinLength } = Declarations.Auth.Fields.Username;
 
 const InputProperties = {
     maxLength: MaxLength,
     minLength: MinLength
 };
 
 export default function UsernameField({ SetUsername, GetUsername }){
     const OnChangeHandler = (Event) => {
         SetUsername(Event.target.value);
         const UsernameLength = GetUsername.length;
 
         if(UsernameLength < MinLength)
             Alert({
                 Message: `The username must contain at least ${MinLength} characters.`,
                 Type: 'Error',
                 Identifier: 'Auth-Field-Validation' });
         else if(UsernameLength > MaxLength)
             Alert({
                 Message: `Username cannot contain more than {MaxLength} characters.`,
                 Type: 'Error',
                 Identifier: 'Auth-Field-Validation' });
     };
 
     return (
         <div className='Auth-Field-Container' id='Auth-Username-Field-Container'>
             <TextField
                 fullWidth
                 type='text'
                 label='Username'
                 aria-required='true'
                 name='Username'
                 aria-label='Username'
                 variant='filled'
                 error={IsFormFieldValid('Username', GetUsername)}
                 inputProps={InputProperties}
                 defaultValue={GetUsername}
                 onChange={OnChangeHandler} 
                 InputProps={{ endAdornment: <i><FiUser /></i>}} />
         </div>
     );
 }