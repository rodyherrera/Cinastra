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
    * We import the file 'Configuration.json' 
    * that contains the general configuration of 
    * the application so as not to have to modify 
    * specific values ​​along the antomy of the Client's 
    * source code, if not only access this file and find 
    * if the value to be modified is available there.
    
    ? As a standard throughout Cinastra's general 
    ? source code, this file that contains the 
    ? global configuration of the application is 
    ? imported as Declarations, say nothing.
*/
import * as Declarations from "../../Configuration.json";

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
import './StyleSheet.css';

/*
    * From our configuration file imported as 'Declarations' 
    * we obtain the value of the key defined within 'Cinastra' 
    * (Json.Object) that will contain our repository
    * and the author of the project.
*/
const { Repository, Author } = Declarations.Cinastra;

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
export default function Footer(){

    /*
        * Finally we return the content of 
        * the authentication page.
    */
    return (
        <Fade clear>

            {/*
                * We use the Fade component that, as 
                * previously mentioned, will allow us 
                * to show a pleasant animation that will 
                * make the component and its content load 
                * in a more pleasant way for the user, its 
                * their nodes will be affected by the animation.
            */}
            <footer>

                {/*
                    * We declare the <footer> tag since we are 
                    * making our application with Semantic HTML, and 
                    * as the name of the component says we are talking 
                    * about the footer.
                */}
                <p>Made with love by 
                    <a href={Repository} target='_blank' rel='noopener noreferrer'>

                        {/*
                            * We show a link which points to the 
                            * repository that we previously defined 
                            * as constant, with the help of target we make 
                            * it open in a new tab, within this link we show 
                            * the name of the author with the 
                            * help of the span tag.
                        */}
                        <span className='Non-Trim-Left'>{Author}</span>
                    </a>
                </p>
            </footer>
        </Fade>
    );
}