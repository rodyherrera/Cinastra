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
    ? Importing the component that will 
    ? show the restrictions that our service has.
*/
import Restrictions from './Sections/Restrictions/Component';

/*
    ? Importing the component that will show 
    ? the dangers of using our service.
*/
import Dangers from './Sections/Dangers/Component';

/*
    ? Importing the component that talks about 
    ? the privacy that our service provides.
*/
import Privacy from './Sections/Privacy/Component';

/*
    ? Importing the component that talks about 
    ? the source code of our service.
*/
import OpenSource from './Sections/OpenSource/Component';

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
export default function Terms(){

    /*
        * Finally we return the content of 
        * the authentication page.
    */
    return (
        <section id='Agreement-Terms-Container'>
            
            {/*
                * We return within a container each part 
                * that the terms and conditions page will 
                * have, we do this to make each thing more 
                * accessible and modularized.
            */}            
            <Restrictions />
            
            <Dangers />
            
            <Privacy />

            <OpenSource />
        </section>
    );
}