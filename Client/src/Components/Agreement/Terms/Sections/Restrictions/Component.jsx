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
export default function Restrictions(){

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
                <h3 className='Spaced-Heading'>Restrictions</h3>
            </div>

            {/*
                * Containers with <p> tags that explain what we 
                * want to talk about and that the user is informed 
                * when using our service.
            */}
            <div>
                <p>The service is not available for children under 13 years 
                old, it is something that cannot be avoided, we cannot do 
                magic and know the age of the person who is using our 
                service, the risk will depend on the person, a risk that 
                can cause different perceptions to reality, changes of thought 
                and/or ideologies, you do not know who you are talking to, what 
                type of person he is and even if he is a pedophile and/or criminal, an
                individual over 13 years of age is able to identify or recognize in an 
                obvious way and/or clear what is right and what is wrong, for when you 
                have to leave the chat and when not.</p>
            </div>

            <div>
                <p>Toxicity is something that cannot be avoided, it 
                is easy to recognize toxic people, people whose 
                characteristics are to directly and negatively affect 
                loved ones, friends... egocentric and narcissistic 
                people, our systems block words that are considered 
                offensive, to have a more "FamilyFriendly" environment, that 
                is, an environment for everyone who can interact freely and 
                make friends without having to endure toxic environments, we 
                block offensive words with the help of an algorithm, in this 
                way we make the word not show entirely and we try to maintain 
                a pleasant environment for everyone.</p>
            </div>
        </article>
    );
}