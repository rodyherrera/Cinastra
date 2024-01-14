/***
 * Copyright (C) Rodolfo Herrera Hernandez. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root 
 * for full license information.
 *
 * =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
 *
 * For related information - https://github.com/rodyherrera/Cinastra/
 * 
 * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 ****/

import React from 'react';
import Fade from 'react-reveal';
import './Agreement.css';

export default function Agreement(){
    const Agreements = [
        // ! [TITLE, DESCRIPTION, COMPLEMENT]
        ['Restrictions', 'The service is not available for children under 13 years old, it is something that cannot be avoided, we cannot do magic and know the age of the person who is using our service, the risk will depend on the person, a risk that can cause different perceptions to reality, changes of thought and/or ideologies, you do not know who you are talking to, what type of person he is and even if he is a pedophile and/or criminal, an individual over 13 years of age is able to identify or recognize in an obvious way and/or clear what is right and what is wrong, for when you have to leave the chat and when not.', 'Toxicity is something that cannot be avoided, it is easy to recognize toxic people, people whose characteristics are to directly and negatively affect loved ones, friends... egocentric and narcissistic people, our systems block words that are considered offensive, to have a more "FamilyFriendly" environment, that is, an environment for everyone who can interact freely and make friends without having to endure toxic environments, we block offensive words with the help of an algorithm, in this way we make the word not show entirely and we try to maintain a pleasant environment for everyone.'],
        ['Dangers', "When connecting to a room and interacting with more people, unless these are your friends, you do not know who is behind the screen, as I mentioned above, it is recommended that people using this service be over 13 years old, but it is evident that a simple alert is not enough for the asshole, you should never send your private data through this network, never give your real name and/or indications of your identity or who you really are, Cinastra does not comply with large security systems to protect your data and that everything that is being talked about is saved and then recovered later, everything you write and receive is temporary, it will be loaded into the server's RAM, it is not saved in a database or in files unlike From other services, we do not guarantee that you are safe when using this service and that your personal data is, the least you can do is take care of the things that come out of your computer, that is, be careful with what you have.", 'We do not have control of what enters the server, we cannot help you with your problems caused in this messaging network, we do not take care of the actions that our users do with the people who are interacting with them, we do not take charge of the use that it people give this network.'],
        ['Privacy', 'We guarantee that everything is temporary and anonymous, messages are not stored in any database, everything is loaded into RAM, simply a variable, the data you share will not be stored anywhere, we do not use your public data as IP addresses to recommend things or use them while you interact to give information about you to other people, we use your local storage to save information related to your login, which includes your login next to the room, every time you enter we save that data in your local storage, we do not use Cookies and that is why we do not warn you to accept them, the only person who depends on your privacy is you, the data you share on this network and with whom you interact.'],
        ['Open Source', 'Cinastra is open source under the MIT license, a license that allows the reuse of software, both to be free and private, Cinastra is open to collaborations and new integrations, being open source people who understand how the technology with which it works. This software built can find vulnerabilities and misuse them, but of course it was mentioned when we talked about the danger, we are not responsible for the use that is given to this anonymous and temporary messaging software, when using the MIT license, the software is more accessible to a greater number of developers, they are free to use the source code of Cinastra as they please and do whatever they are, both for their own benefit and to improve the application and be something more than a simple experiment.']
    ];

    return (
        <main id='Agreement-Main'>
            <Fade clear>
                <section id='Agreement-Heading'>
                    <article>
                        <h1>Terms and conditions</h1>
                    </article>
                    <article>
                        <p>Agreement that you accept automatically when using our 
                            anonymous and temporary messaging service.</p>
                    </article>
                </section>

                <section id='Agreement-Terms-Container'>
                    {(Agreements).map(([ Title, Description, Complement ], Index) => (
                        <article className='Agreement-Term-Container' key={Index}>
                            <div>
                                <h3 className='Spaced-Heading'>{Title}</h3>
                            </div>
                            <div>
                                <p>{Description}</p>
                            </div>
                            {(Complement) && (
                                <div>
                                    <p>{Complement}</p>
                                </div>
                            )}
                        </article>
                    ))}
                </section>
            </Fade>
        </main>
    )
};