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
    ? We import the 'Link' component from the 
    ? 'react-router-dom' library, which will allow us to generate 
    ? a link so that when the user presses it, it is redirected to the 
    ? page where the link leads, this component should only be 
    ? use when you want to take to pages that contain the application 
    ? and not external, for that use an <a>.
*/
import { Link } from 'react-router-dom';

/*
    ? We import icons that we will use in this 
    ? component, we import the icons from the 
    ? 'react-icons' library that contains many 
    ? enough and too many icons to be able to use 
    ? in our applications and to be able to make the user 
    ? interface more attractive and intuitive for the user.
*/
import { RiGithubLine, RiLockPasswordLine } from 'react-icons/ri';

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
import * as Declarations from '../../../Configuration.json';

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
    * From the declarations file we capture the GitHub 
    * repository of our application, this is because 
    * on this page that is to declare Links will be 
    * the GitHub icon that will allow us to send to the 
    * respective repository of our application when 
    * the client clicks on it.
*/
const { Repository } = Declarations.Cinastra;

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
export default function NavLinks(){
    
    /*
        * Finally we return the content of 
        * the authentication page.
    */
    return (
        <ul className='Header-Navegation-Links-Container'>
            {/* 
                * We create an unordered list to make 
                * the declaration of our links from the 
                * header of our page.
            */}

            {/* 
                * Now with the help of a <li> we are 
                * going to declare an element in the 
                * unordered list which will act as a link 
                * in the header of our page, clearly for 
                * this to be a link we must within the <li> 
                * node create another <a> node so that when 
                * the user presses it, they are redirected 
                * to a specific link.
            */}
            <li>
                {/*
                    * Unlike other links that may exist in 
                    * the header using the <a> node, there will 
                    * be other cases that we will use the <Link> 
                    * component to send the user when he clicks to 
                    * another page that belongs to the application 
                    * and not to another external page, in In this case 
                    * we will use <Link> to send the user to the 
                    * terms and conditions page
                */}
                <Link to={Routes.Agreement} title='Terms and conditions'>
                    {/*
                        * We make use of the icon that we have 
                        * previously imported, this so that when 
                        * the user clicks on this icon, it is sent 
                        * to the path of terms and conditions that 
                        * was previously defined as constant and 
                        * obtained from our configuration file.
                    */}
                    <i className='Header-Icon'>
                        <RiLockPasswordLine />
                    </i>
                </Link>
            </li>
                        
            <li>
                {/*
                    * This link will be so that the user can 
                    * access the repository in GitHub of our 
                    * application, this because our app is open 
                    * source, as GitHub is an external platform 
                    * that has nothing to do with an internal 
                    * page of our application we use the node <a> 
                    * whose href will indicate the Respository variable 
                    * whose is a constant that contains the link of 
                    * the repository of our project that is defined in 
                    * our configuration file.
                */}
                <a title='Click for view Cinastra in Github' href={Repository} target='_blank' rel='noopener noreferrer'>
                    {/*
                        * Like the set of links that the page header 
                        * will have, this will also be represented by 
                        * an icon, clearly from GitHub that will refer to 
                        * the page and that probably the user if their IQ 
                        * is greater than 100 (IQ > 100) will You will 
                        * notice that the icon indicates the repository of 
                        * our application.
                    */}
                    <i className='Header-Icon'>
                        <RiGithubLine />
                    </i>
                </a>
            </li>
        </ul>
    );
}