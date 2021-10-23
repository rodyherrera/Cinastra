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

    ? will also import useEffect to execute a series of 
    ? instructions when the state or value of the 
    ? initialized variable changes.

    ? we also import useRef which returns a mutable ref 
    ? object whose property. current is initialized with 
    ? the passed argument (initialValue). The returned object 
    ? will remain persistent for the entire life of the 
    ? component. In essence, useRef is like a "box" that you 
    ? can keep in a mutable variable in its property.
*/
import React, { useEffect, useRef } from 'react';

/*
    ? We import the message component, which 
    ? will allow to display a message in the container.
*/
import Message from '../Message/Message';

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
    
    ? The component receives two parameters parameters 
    ? where the first corresponds to all the messages that the 
    ? room where the user is in has, this is the Getter of the 
    ? GetMessages state variable, also as the second parameter 
    ? we receive the Getter of the Name state variable.
*/
export default function Messages({ ChatMessages, GetName }){

    /*
        * We create a reference for the box, we set it 
        * to null using the previously exported and 
        * explained function useRef.
    */
    const MessageBoxReference = useRef(null);

    /*
        * We use a useEffect to execute an instruction 
        * when the component finishes its mount.
    */
    useEffect(() => {
        
        /*
            * To the reference that will be assigned to 
            * a node of the document, a listener will be 
            * added which will execute a series of instructions 
            * every time a node is inserted in the container 
            * to which the reference is made.
        */
        MessageBoxReference.current.addEventListener('DOMNodeInserted', (Event) =>

            /*
                * What we will do is that we will auto scroll 
                * the container, this so that if there are many 
                * messages in the room the user does not have to 
                * do a manual scroll for each time there is an outgoing 
                * or incoming message, if not each time it is detect a 
                * message we will auto scroll it.
            */
            Event.currentTarget.scroll({
                top: Event.currentTarget.scrollHeight, 
                behavior: 'smooth' }));
    }, []);

    /*
        * Finally we return the content of 
        * the authentication page.
    */
    return (
        <article ref={MessageBoxReference} className='Word-Wrapper' id='Chat-Room-Messages-Container'>
            
            {/*
                * We will assign the previously created 
                * reference to the parent container, this to 
                * then auto scroll every time a node is 
                * inserted, then we will map the array that we 
                * received as the first parameter that contains all 
                * the messages that the room specified by the user has.
            */}
            {ChatMessages.map((ChatMessage, Index) => 
                <div className='Chat-User-Message-Container' key={Index}>
                    
                    {/*
                        * Inside a container using the previously explained 
                        * and imported component 'Message' we will show it, we 
                        * send it two parameters where the first is equivalent 
                        * to the message we want to show and as the second 
                        * parameter we will send the Getter of the state 
                        * variable of the username that it has the client, this 
                        * to later verify if the message is from the client or 
                        * from an external user.
                    */}
                    <Message Message={ChatMessage} GetName={GetName} />
                </div> )}
        </article>
    );
}