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
    ? We import the 'ReactEmoji' component from the 
    ? 'react-emoji' library to display emojis posted 
    ? by the user in the room.
*/
import ReactEmoji from 'react-emoji';

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
    ? first corresponds to the user who sent the message and 
    ? as the second parameter we receive the message sent by 
    ? the user received as the first parameter. 
*/
export default function StrangerMessage({ User, Text }){
 
    /*
        * Finally we return the content of 
        * the authentication page.
    */
    return (
        <section>

            {/*
                * Inside a paragraph tag with two <span> we 
                * will show the corresponding message, where the 
                * first <span> will contain the username that sent 
                * the message and the second <span> will contain the 
                * message sent by the username.
            */}
            <p>
                <span className='Chat-Generic-Message-Name Select-Text Chat-Message-Username'>

                    {/*
                        * We show the username to which 
                        * the message corresponds.
                    */}
                    {User}:
                </span> <span className='Chat-Generic-Message-Text Select-Text Chat-Message-Text'>
                    
                    {/*
                        * Finally we show the message but 
                        * first we parse it using the library 
                        * that will allow us to show emojis.
                    */}
                    {ReactEmoji.emojify(Text)}
                </span>
            </p>
        </section>
    );
}