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
    ? Importing a load node component that 
    ? will be circular, we will import this 
    ? from the material-ui library.
*/
import CircularProgress from '@mui/material/CircularProgress';

/*
    ? We import the Fade component from the 'react-reveal' 
    ? library, this library is the equivalent to 
    ? 'animation.css' when developing a normal website without 
    ? ReactJS, with this library we can access the animations 
    ? provided by 'animation.css ', generally throughout the anatomy 
    ? of Cinastra's source code, the Fade component will be used a 
    ? lot, I like the animation and / or effect it does on its 
    ? children nodes JAJAJAJ.
*/
import Fade from 'react-reveal';

/*
    ? We import the 'StringGenerator' function, which 
    ? is an algorithm but it sounds very elegant, it is 
    ? simply a set of instructions that allows us to 
    ? generate a random string that we will use 
    ? on this page.
*/
import { StringGenerator } from '../../Utils/Algorithms/String';

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
    ? We store constants in a variable that 
    ? contains the ID that our alert node will 
    ? have, this is because we are going to use 
    ? it more than once and it is better to store 
    ? it in a variable than to change it several times.
*/
const LoadingScreenIdentifier = 'Loading-Screen-Container';

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
     
    * The component as the first parameter receives 
    * the message that the loading screen will have, as 
    * the second parameter it receives the maximum time 
    * that the loading screen will have and as the last 
    * parameter it receives the function in case the waiting 
    * time sent as the second parameter ends.
*/
export default function LoadingScreen({ Message, TimeOut, OnTimeOut }){

    /*
        * We generate an identifier for the node of 
        * the loading screen, this identifier will help 
        * us to check if the loading screen is or is not 
        * in the set of nodes that the page has, so that 
        * if it is not there and the waiting time ends it 
        * means that you no longer need to run 
        * the OnTimeOut function.
    */
    const Identifier = StringGenerator();

    /*
        * We establish a setTimeout that will 
        * execute a set of instructions after the 
        * timeout set as a parameter in the function passes.
    */
    setTimeout(() => {

        /*
            * Once the waiting time has passed, we will 
            * save the node of the loading screen in a 
            * constant, we will obtain it by ID which was 
            * previously stored in a constant for the simple 
            * reason that I mentioned that said ID we were 
            * going to use it more than once.
        */
        const Node = document.getElementById(LoadingScreenIdentifier);

        /*
            * Now we verify using an if if the value of 
            * the constant is different from null or 
            * undefined, if this is the case, it is because the 
            * node actually exists on the page and was not 
            * removed by the other component that includes it, then 
            * what we will do is execute the function that 
            * comes as the third parameter, but first we are 
            * going to verify if the attribute that the loading 
            * screen has 'loader-identifier' is the same as the one that 
            * was saved in our constant, we do this to make sure that 
            * we are deleting a Correct alert and not another 
            * incorrect one, if this is true we execute the function.
        */
        if(Node)
            if(Node.getAttribute('loader-identifier') === Identifier)
                OnTimeOut();
    }, TimeOut);

    /*
        * Finally we return the content 
        * of the agreement page
    */
    return (
        <aside id={LoadingScreenIdentifier} loader-identifier={Identifier}>
            {/*
                * We use the Fade component that, as 
                * previously mentioned, will allow us 
                * to show a pleasant animation that will 
                * make the component and its content load 
                * in a more pleasant way for the user, its 
                * their nodes will be affected by the animation.
            */}
            <Fade clear>
                <article>
                    {/*
                        * We create a container and inside this 
                        * we show the component that we imported 
                        * previously from material-ui that is responsible 
                        * for showing a progressive circle animation so 
                        * that the user, if he does not have an intellectual 
                        * coefficient (IQ) lower than 80, can infer that loading.
                    */}
                    <CircularProgress />
                </article>

                <article id='Loading-Screen-Message-Container' className='Word-Wrapper'>
                    {/*
                        * Finally, in another container below the 
                        * progressive circle so that the user can 
                        * infer that it is a loading page, we are going 
                        * to show the message that arrived as the first 
                        * parameter so that the user can read and be 
                        * informed that it is waiting for it to load.
                    */}
                    <p>{Message}</p>
                </article>
            </Fade>
        </aside>
    );
};