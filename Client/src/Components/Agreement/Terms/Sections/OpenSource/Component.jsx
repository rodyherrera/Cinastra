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
export default function OpenSource(){

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
                <h3 className='Spaced-Heading'>Open Source</h3>
            </div>

            {/*
                * Containers with <p> tags that explain what we 
                * want to talk about and that the user is informed 
                * when using our service.
            */}
            <div>
                <p>Cinastra is open source under the MIT license, a license that allows the 
                reuse of software, both to be free and private, Cinastra is open to 
                collaborations and new integrations, being open source people who understand 
                how the technology with which it works. This software built can find vulnerabilities 
                and misuse them, but of course it was mentioned when we talked about the danger, we 
                are not responsible for the use that is given to this anonymous and temporary 
                messaging software, when using the MIT license, the software is more accessible 
                to a greater number of developers, they are free to use the source code of Cinastra 
                as they please and do whatever they are, both for their own benefit and to improve 
                the application and be something more than a simple experiment.</p>
            </div>           
        </article>
    );
}
