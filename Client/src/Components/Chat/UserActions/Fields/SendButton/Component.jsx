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
    ? We import the Button component from the 
    ? material-ui library so that our button has 
    ? an attractive appearance and improves 
    ? the user's view.
*/
import { Button } from '@mui/material';

/*
    ? We import icons that we will use in this 
    ? component, we import the icons from the 
    ? 'react-icons' library that contains many 
    ? enough and too many icons to be able to use 
    ? in our applications and to be able to make the user 
    ? interface more attractive and intuitive for the user.
*/
import { AiOutlineSend } from 'react-icons/ai';

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
    * Finally we declare the component, we use an 
    * export default because we are talking about a 
    * component and it is what we want to export, we do 
    * not want to export a set of functionalities, I use 
    * function () and not const = () because I did not find 
    * he way to assign a name to the const using the 
    * export default, so using function does allow the 
    * name to be used, remember that the readability and 
    * comprehension of the code comes first.
     
    ? The component receives two parameters where 
    ? the first indicates the function that will 
    ? allow the message to be sent to the server and 
    ? as the second parameter it receives the Getter 
    ? of the message status variable.
*/
export default function SendButton({ SendMessage, GetMessage }){

    /*
        * We create the function that will be executed when 
        * the user clicks on the send button, what this 
        * function will do is basically use the function 
        * that arrived as a parameter that will send the message 
        * using the other parameter that arrived, which is the 
        * Getter of the variable status message.
    */
    const OnClickHandler = () => SendMessage(GetMessage);

    /*
        * Finally we return the content of 
        * the authentication page.
    */
    return (
        <div id='Chat-Message-Send-Button-Container'>
            {/* 
                * We return inside a container the button 
                * that will allow the user to send 
                * the message to the server.
            */}
            <Button id='Chat-Message-Send-Button' fullWidth onClick={OnClickHandler}>

                {/*
                    * The button in its content will contain 
                    * an icon that will tell the user if it 
                    * is not a damn ape that the button 
                    * will be to submit.
                */}
                <AiOutlineSend />
            </Button>
        </div>
    );
};