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
    ? We import the Form component corresponding to 
    ? the authentication page that will allow the user to 
    ? enter the username and password in order to start interacting.
*/
import Form from '../../Components/Auth/Form/Component';

/*
    ? We import the top part of the authentication 
    ? page which will have something like a welcome message.
*/
import Heading from '../../Components/Auth/Heading/Component';

/*
    ? We import the style file that will be used in this 
    ? page, it is likely that classes that are not declared 
    ? in this file will be used, these classes or styles to 
    ? labels are declared in the file 'General.css' that is 
    ? inside the folder' StyleSheet ', same that is inside 
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
*/
export default function Auth(){
    
    /*
        * Finally we return the content of 
        * the authentication page.
    */
    return (
        <main id='Join-Main'>

            {/*
                * We use the Heading component referring 
                * to what will be the component that will 
                * contain the header of the authentication page.
            */}
            <Heading />

            {/*
                * Making use of the component of the form 
                * that will contain the authentication 
                * page, so that the user can enter their 
                * data and correctly access the chat.
            */}
            <Form />
        </main> 
    );
}