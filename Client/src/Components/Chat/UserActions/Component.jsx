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
    ? We import the 'MessageInput' component that will 
    ? allow the user to write a message to be sent to 
    ? the respective room in which they are connected.
*/
import MessageInput from './Fields/MessageInput/Component';

/*
    ? We import the button that will allow us to 
    ? send the message to the server and to the room 
    ? to which it is connected so that all users connected 
    ? to it can view the message that the user sent.
*/
import SendButton from './Fields/SendButton/Component';

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
    
    ? The component receives 3 parameters where the first must 
    ? be the Getter of the message state variable, the 
    ? second parameter must be the function that will 
    ? allow the message to be sent to the server and 
    ? the third one will be the Setter of the message state variable. 
*/
export default function UserActions({ GetMessage, SendMessage, SetMessage }){

    /*
        * Finally we return the content of 
        * the authentication page.
    */
    return (
        <article id='Chat-User-Actions-Container'>

            {/*
                * We return the actions available to 
                * the user in the message container, these 
                * actions will be in another container 
                * that will be an article.
            */}

            {/*
                * We use the MessageInput component and 
                * we send it 3 parameters where the first 
                * is the Setter of the message state 
                * variable, the second is the Getter of it 
                * and as the last parameter we send the function 
                * that allows sending the message.
            */}
            <MessageInput 
                SetMessage={SetMessage} 
                GetMessage={GetMessage} 
                SendMessage={SendMessage} />

            {/*
                * Finally we use the other component that will 
                * allow showing a button to send the message 
                * that the user enters in the input previously 
                * sent, the component receives two parameters 
                * where the first is the function to send message 
                * and the other is the Getter of the state 
                * variable message.
            */}
            <SendButton 
                SendMessage={SendMessage} 
                GetMessage={GetMessage} />
        </article>
    );
}