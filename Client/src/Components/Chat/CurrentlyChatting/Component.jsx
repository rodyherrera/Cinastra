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
    ? We import icons that we will use in this 
    ? component, we import the icons from the 
    ? 'react-icons' library that contains many 
    ? enough and too many icons to be able to use 
    ? in our applications and to be able to make the user 
    ? interface more attractive and intuitive for the user.
*/
import { RiMastodonLine } from 'react-icons/ri';

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
import './StyleSheet.css'

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
    
    ? The function receives as a parameter 
    ? the users that the room contains 
*/
export default function CurrentlyChatting({ Users }){

    /*
        * Finally we return the content of 
        * the authentication page.
    */
    return (
        <article>
            {/*
                * We show the title that the container 
                * will have that will serve to show the 
                * users who are in the room.
            */}
            <h1>People currenly chatting</h1>
            
            {/* 
                * Now we show the users that the room has 
                * by mapping them, where we will show an icon 
                * so that the mapping is pleasant to the 
                * user's eye next to the name of the user.
            */}
            {Users && Users.map(({ Name }) =>
                <div className='Chat-Currently-User-Container' key={Name}>
                    
                    {/* 
                        * We show the icon so that the 
                        * mapping is pleasing to the eye
                    */}
                    <div>
                        <i><RiMastodonLine /></i>
                    </div>

                    <div>

                        {/* 
                            * We show the username that is 
                            * connected to the room
                        */}
                        <h5>{Name}</h5>
                    </div>
                </div> )}
        </article>
    );
}