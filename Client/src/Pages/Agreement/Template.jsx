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
    ? We import the Fade component from the 'react-reveal' 
    ? library, this library is the equivalent to 
    ? 'animation.css' when developing a normal website without 
    ? ReactJS, with this library we can access the animations 
    ? provided by 'animation.css ', generally throughout the anatomy 
    ? of Cinastra's source code, the Fade component will be used a 
    ? lot, I like the animation and / or effect it does on its 
    ? children nodes JAJAJAJ.
*/
import Fade from 'react-reveal';

/*
    ? By importing the header component of the 
    ? agreement page, this will serve to show you 
    ? a welcome message or what the agreement page 
    ? is about when the user enters.
*/
import Heading from '../../Components/Agreement/Heading/Component';

/*
    ? Importing the component that will include 
    ? all the terms that the user will accept 
    ? when using our service.
*/
import Terms from '../../Components/Agreement/Terms/Component';

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
export default function Agreement(){

    /*
        * Finally we return the content 
        * of the agreement page
    */
    return (
        <main id='Agreement-Main'>
            {/* 
                * We use the Fade component that, as 
                * previously mentioned, will allow us 
                * to show a pleasant animation that will 
                * make the component and its content load 
                * in a more pleasant way for the user, its 
                * their nodes will be affected by the animation.
            */}
            <Fade clear>
                {/*
                    * Making use of the Heading component that 
                    * will show the header of the agreement 
                    * page, previously imported and explained.
                */}
                <Heading />
                
                {/*
                    * Finally we import the component of 
                    * terms that will contain the service
                */}
                <Terms />
            </Fade>
        </main>
    )
};