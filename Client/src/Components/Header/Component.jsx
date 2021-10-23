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
    ? We import the 'Link' component from the 
    ? 'react-router-dom' library, which will allow us to generate 
    ? a link so that when the user presses it, it is redirected to the 
    ? page where the link leads, this component should only be 
    ? use when you want to take to pages that contain the application 
    ? and not external, for that use an <a>.
*/
import { Link } from 'react-router-dom';

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
    ? We import the component that will contain 
    ? the links from the header of our application.
*/
import NavLinks from './NavLinks/Component';

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
    * As the last global assignment we will assign 
    * to the constant Routes the value that is in our 
    * configuration file, which corresponds to an object 
    * that contains the routes of all the pages of our 
    * application, this will be useful on this page 
    * because we will do redirects and we need to 
    * know the url that has said page.
*/
const Routes = Declarations.Routes;

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
export default function Header(){

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
            <header>
                {/*
                    * We declare the <header> tag, in this way we 
                    * use Semantic HTML, and within this we will 
                    * develop the component because it is about 
                    * it, to load the header of the page, as the first 
                    * node it will contain a link to the authentication 
                    * page, we use the component previously imported and 
                    * explained and we tell it that when it is clicked 
                    * it goes to the authentication route, a route that has 
                    * the constant Routes and routes that our configuration 
                    * file contains, inside it we show the name of our app 
                    * that will lead to the authentication page when clicked.
                */}
                <Link to={Routes.Auth}>
                    <h1>Cinastra</h1>
                </Link>
                
                {/* 
                    * Finally we make use of the <nav> tag referring 
                    * to the fact that it will include links that 
                    * will allow browsing through the site, we make 
                    * use of the previously imported and explained 
                    * component of <NavLinks /> which will contain the 
                    * set of links in the header of the page.
                */}
                <nav>
                    <NavLinks />
                </nav>
            </header>
        </Fade>
    );
}