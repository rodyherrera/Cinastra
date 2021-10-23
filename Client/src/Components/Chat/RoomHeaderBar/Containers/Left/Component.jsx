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
import { HiOutlineStatusOnline } from 'react-icons/hi';

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
export default function RightContainer(){

    /*
        * Finally we return the content of 
        * the authentication page.
    */
    return (
        <div>
            {/*
                * Inside a container we will show an icon that 
                * will serve as decoration since it will not have 
                * greater relevance or action in the room container 
                * bar, this icon will be a green icon that will be 
                * for the user to intuit that they have an active connection.
            */}
            <i><HiOutlineStatusOnline /></i>
        </div>
    );
};