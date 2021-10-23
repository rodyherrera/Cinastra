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

/*
    ? React import, this import will allow us 
    ? to write in JSX, that is, it will allow us 
    ? to write our page correctly, if this import 
    ? is not carried out it will give us errors because 
    ? the labels that we are establishing will not be 
    ? recognized, this will allow us to write in JSX.
*/
import React from 'react';

/*
    ? We import the TextField component from the 
    ? material-ui library, TextField is a component 
    ? that basically as its name says is a text field 
    ? or an input of type text, which we will use on this 
    ? page so that the user can type things, we use this 
    ? component because it is quite pleasing 
    ? to the eye of the user.
*/
import { TextField } from '@mui/material';

/*
    ? We import icons that we will use in this 
    ? component, we import the icons from the 
    ? 'react-icons' library that contains many 
    ? enough and too many icons to be able to use 
    ? in our applications and to be able to make the user 
    ? interface more attractive and intuitive for the user.
*/
import { FiUser } from 'react-icons/fi';

/*
    * We import the file 'Configuration.json' 
    * that contains the general configuration of 
    * the application so as not to have to modify 
    * specific values ​​along the antomy of the Client's 
    * source code, if not only access this file and find 
    * if the value to be modified is available there.
    
    ? As a standard throughout Cinastra's general 
    ? source code, this file that contains the 
    ? global configuration of the application is 
    ? imported as Declarations, say nothing.
*/
import * as Declarations from '../../../../../Configuration.json';

/*
    ? We import the 'Alert' component, this component 
    ? will allow us to insert an alert in the document to 
    ? inform the user about an event, this is not a component 
    ? in itself since it does not use JSX, but I consider 
    ? it a component because it is something that It will be 
    ? used several times throughout the anatomy of the Client's 
    ? source code, this to improve the user experience when 
    ? using our service and alert them about an error or 
    ? notify them about a specific action.
*/
import { Alert } from '../../../../Alert/Component';

/*
    ? We import the function that will allow us to verify 
    ? if the field with which we are working is valid or 
    ? not according to the configuration established in 
    ? the client's source code configuration file, this function 
    ? will return a true or a false depending on its value if 
    ? this is true we will show the border of the input in red 
    ? so that it can instigate that it has an error in its value 
    ? entered in the input.
*/
import { IsFormFieldValid } from '../../../../../Utils/Security/Auth';

/*
    * Collecting the data that is established in the configuration 
    * file that has the Client's source code, let's collect the 
    * maximum length and the minimum length of the field with which 
    * we are working to make certain validations and make the field safe.
*/
const { MaxLength, MinLength } = Declarations.Auth.Fields.Username;

/*
    * Creating the properties that the input will contain 
    * with the previously collected values defined in 
    * the configuration file.
*/
const InputProperties = {
    maxLength: MaxLength,
    minLength: MinLength
};

/*
    * Finally we declare the component, we use an 
    * export default because we are talking about a 
    * component and it is what we want to export, we do 
    * not want to export a set of functionalities, I use 
    * function () and not const = () because I did not find 
    * he way to assign a name to the const using the 
    * export default, so using function does allow the 
    * name to be used, remember that the readability and 
    * comprehension of the code comes first.
    
    ? The function receives two parameters where the first 
    ? is equivalent to the Setter of the state variable that 
    ? will store the username and the second parameter is 
    ? equivalent to the Getter of the same. 
*/
export default function UsernameField({ SetUsername, GetUsername }){

    /*
        * By creating a function that will execute its 
        * instructions every time the input value is 
        * modified, these instructions are validations 
        * that will be made with respect to the declarations 
        * made in the configuration file, if something is not 
        * right, the user will be informed through an alert.
    */
    const OnChangeHandler = (Event) => {
        
        /*
            * We set the value of the state variable that 
            * should store the username with the value 
            * that the input has.
        */
        SetUsername(Event.target.value);

        /*
            * We save in a constant the length of the 
            * chain with which we are working because it is a 
            * process that JavaScript must do to count each 
            * character of the chain to obtain the length, better 
            * save it in a variable and do the counting process only once.
        */
        const UsernameLength = GetUsername.length;

        /*
            * We check if the length of the string is less than 
            * the minimum length that the field should have, this 
            * minimum length should be set in the configuration file 
            * as explained above, if this condition returns 
            * true, that is, the length of the string is Less than the 
            * minimum it should have, an alert will be shown to the user 
            * informing him of the problem.
        */
        if(UsernameLength < MinLength)
            Alert({
                Message: `The username must contain at least ${MinLength} characters.`,
                Type: 'Error',
                Identifier: 'Auth-Field-Validation' });
        
        /*
            * If the previous condition is false, we will now 
            * check if the length of the chain is greater than 
            * the maximum length it must have, the maximum length 
            * also established in the configuration file, as 
            * previously explained in greater detail in the declaration 
            * of these variables, if this gives true the user will be 
            * informed using an alert about the problem.
        */
        else if(UsernameLength > MaxLength)
            Alert({
                Message: `Username cannot contain more than {MaxLength} characters.`,
                Type: 'Error',
                Identifier: 'Auth-Field-Validation' });
    };

    /*
        * Finally we return the content of 
        * the authentication page.
    */
    return (
        <div className='Auth-Field-Container' id='Auth-Username-Field-Container'>
            
            {/*
                * Inside a container we will show the field with 
                * which we are working using the material-ui component 
                * (TextField) since in my opinion the input it 
                * generates is quite nice or pleasant to the eye 
                * of the common user.
            */}
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