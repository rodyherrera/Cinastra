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
    ? We import the 'StrangerMessage' component that we 
    ? will use to show in a generic way all the messages 
    ? that are sent by users other than the current one, that 
    ? is, this component will be to show messages from other 
    ? users who are in the room.
*/
import StrangerMessage from './MessageTypes/Stranger/Component';

/*
    ? We import the 'OwnerMessage' component which we will 
    ? use to show the message as long as the message belongs 
    ? to the user who is active in the session, in this way 
    ? we show the message with different styles than the 
    ? messages sent by other users have.
*/
import OwnerMessage from './MessageTypes/Owner/Component';

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
    
    ? The component receives two parameters, where the 
    ? first is a message object that will be unstructured 
    ? to obtain the user name to which the message belongs 
    ? and its respective message, as a second parameter we 
    ? obtain the Getter of the state variable that allows 
    ? obtaining the user name that the client has. 
*/
export default function Message({ Message: { Text, User }, GetName }){

    /*
        * Finally we return the content of 
        * the authentication page.
    */
    return User === GetName ?

        /*
            * If the username that the message corresponds 
            * to is the same as the username that the client 
            * has, it means that the message was sent by him and 
            * we will show the message as owner using the 
            * previously explained and imported component.
        */
        <OwnerMessage Text={Text} Owner={User} />
    :
        
        /*
            * If the username that the message corresponds 
            * to is different from the username that the client 
            * has, it means that the message was sent by someone 
            * else, therefore we will show the message with another 
            * component that was previously explained and imported.
        */
        <StrangerMessage Text={Text} User={User} />
};