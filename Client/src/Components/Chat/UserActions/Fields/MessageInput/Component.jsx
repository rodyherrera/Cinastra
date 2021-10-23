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
import * as Declarations from "../../../../../Configuration.json";

/*
    * We import into the set of security files 
    * that contains the anatomy of the client's 
    * source code the function that will help us to 
    * check if the message that the user entered is or 
    * is not valid, this will help us to show the input 
    * to the user in error doing so intuit that the input 
    * is invalid.
*/
import { IsMessageInvalid } from '../../../../../Utils/Security/Chat';

/*
    ? We import the style file that will be used in this 
    ? page, it is likely that classes that are not declared 
    ? in this file will be used, these classes or styles to 
    ? labels are declared in the file 'General.css' that is 
    ? inside the folder 'StyleSheet', same that is inside 
    ? the' Assets' folder inside 'src', said file as its name 
    ? says it will contain general styles that will be used 
    ? throughout the entire anatomy of the client's source code.
*/
import './StyleSheet.css';

/*
    * We obtain the maximum length of characters that 
    * the message must have, the maximum length 
    * defined in our configuration file.
*/
const { MaxLength } = Declarations.Chat.Message;

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
     
    ? The component receives 3 parameters, where the first is 
    ? the Getter of the state variable message, the second the
    ? Setter of the same state variable and as the last parameter 
    ? we import the function that will allow us to send a message. 
*/
export default function MessageInput({ GetMessage, SetMessage, SendMessage }){
    
    /*
        * We define a function that will be executed 
        * when the user types or removes characters 
        * from the input, what it will do is use the 
        * SetMessage parameter that I receive, which is 
        * the Setter of the state variable and set it 
        * according to the input value.
    */
    const OnChangeHandler = (Event) => SetMessage(Event.target.value);

    /*
        * We define another function that will serve to 
        * listen if the user presses the Enter key, when 
        * the user presses the enter key we will send the 
        * message to the server, within this function with 
        * the help of a conditional we verify if the pressed 
        * key is enter or not, if it is. We will use the function 
        * that we received as a parameter that is responsible 
        * for sending the message to the server and we will 
        * pass the message as a parameter.
    */
    const OnKeyPressHandler = (Event) => {
        if(Event.key === 'Enter')
            SendMessage(Event)
    };

    /*
        * Finally we return the content of 
        * the authentication page.
    */
    return (
        <div id='Chat-Message-Input-Container'>
            
            {/*
                * Inside an input we define the component 
                * that we have imported from ui material 
                * which will allow the user to type certain 
                * content in it.
            */}
            <TextField
                fullWidth
                aria-label='Message'
                name='Message'
                placeholder='Type a message...'
                error={IsMessageInvalid(GetMessage)}
                inputProps={{ maxLength: MaxLength }}
                value={GetMessage}
                onChange={OnChangeHandler}
                onKeyPress={OnKeyPressHandler} />
        </div>
    );
}