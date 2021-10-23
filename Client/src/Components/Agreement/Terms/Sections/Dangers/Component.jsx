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
export default function Dangers(){

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
                <h3 className='Spaced-Heading'>Dangers</h3>
            </div>

            {/*
                * Containers with <p> tags that explain what we 
                * want to talk about and that the user is informed 
                * when using our service.
            */}
            <div>
                <p>When connecting to a room and interacting with more 
                people, unless these are your friends, you do not know who 
                is behind the screen, as I mentioned above, it is recommended 
                that people using this service be over 13 years old, but it is 
                evident that a simple alert is not enough for the asshole, you 
                should never send your private data through this network, never 
                give your real name and/or indications of your identity or who 
                you really are, Cinastra does not comply with large security systems to 
                protect your data and that everything that is being talked about is 
                saved and then recovered later, everything you write and receive is 
                temporary, it will be loaded into the server's RAM, it is not saved in a 
                database or in files unlike From other services, we do not guarantee that 
                you are safe when using this service and that your personal data is, the least 
                you can do is take care of the things that come out of your computer, that is, be 
                careful with what you have.</p>
            </div>

            <div>
                <p>We do not have control of what enters the server, we cannot help you 
                with your problems caused in this messaging network, we do not take care 
                of the actions that our users do with the people who are interacting with 
                them, we do not take charge of the use that it people give this network.</p>
            </div>
        </article>
    );
}