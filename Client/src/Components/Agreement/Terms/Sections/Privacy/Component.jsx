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
export default function Privacy(){

    /*
        * Finally we return the content of 
        * the authentication page.
    */
    return (
        <article className='Agreement-Term-Container'>

            {/*
                * We load into a container the content 
                * of what we are dealing with in terms and 
                * conditions, its format will be that the 
                * first container will be the title about what 
                * we are dealing with and all the other containers 
                * will be definitions to explain what is 
                * done and how it works.
            */}
            <div>

                {/*
                    * Showing in a container as previously 
                    * mentioned the title that refers to 
                    * what we are talking about.
                */}
                <h3 className='Spaced-Heading'>Privacy</h3>
            </div>

            {/*
                * Containers with <p> tags that explain what we 
                * want to talk about and that the user is informed 
                * when using our service.
            */}
            <div>
                <p>We guarantee that everything is temporary and anonymous, messages are not 
                stored in any database, everything is loaded into RAM, simply a variable, the data 
                you share will not be stored anywhere, we do not use your public data as IP addresses 
                to recommend things or use them while you interact to give information about you to 
                other people, we use your local storage to save information related to your 
                login, which includes your login next to the room, every time you enter we save 
                that data in your local storage, we do not use Cookies and that is why we do not 
                warn you to accept them, the only person who depends on your privacy is you, the data 
                you share on this network and with whom you interact.</p>
            </div>
        </article>
    );
}