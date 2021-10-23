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
    ? This component, as its name says, is the header 
    ? bar of the room container, it will be divided 
    ? into 3 parts, in its left container, right 
    ? container and the central container, each one 
    ? will be divided into its own component, and here 
    ? we do the import of them, 3 components are imported 
    ? that are equivalent to those mentioned above.
*/
import LeftContainer from './Containers/Left/Component';

/*
    ? Previously the left container of the bar was 
    ? imported, now we will import the central container.
*/
import CenterContainer from './Containers/Center/Component';

/*
    ? Finally we import the right container that will 
    ? have the upper bar of the room container.
*/
import RightContainer from './Containers/Right/Component';

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
 
    ? The component receives two parameters where the first 
    ? is the Getter of the Room state variable and the second 
    ? is the function that will allow the client to clean the 
    ? messages from the room in the respective container. 
*/
export default function RoomHeaderBar({ GetRoom, OnClearChat }){

    /*
        * Finally we return the content of 
        * the authentication page.
    */
    return (
        <article id='Chat-Room-Information-Container'>
            {/*
                * We define the containers that the bar will 
                * have inside an <article>, because this should 
                * be inside a <section>, as we cannot use 
                * <article> again we will use <div> and within 
                * them will be the corresponding components 
                * previously imported and explained to complete 
                * the top bar of the room counter.
            */}
            <div>
                
                {/*
                    * We load the left container as the 
                    * first component, it cannot be the 
                    * right or the central one because that 
                    * is how the order should be. 
                */}
                <LeftContainer />
            </div>

            <div>

                {/*
                    * Now since this container has the 
                    * left and right sides, this should 
                    * be the central one and that is why 
                    * we place that component in this place.
                    
                    * We send the component the Getter of the Room 
                    * state variable received as a parameter in this 
                    * component, in this way we will allow access to 
                    * the name of the Room in said component. 
                */}
                <CenterContainer GetRoom={GetRoom} />
            </div>

            <div>

                {/*
                    * Finally we load the right container 
                    * of the bar of the container of the room.
                    
                    * We send the component the function that will 
                    * allow the user to clear the messages, a 
                    * function received as a parameter in the component.
                */}
                <RightContainer OnClearChat={OnClearChat} />
            </div>
        </article>
    );
}