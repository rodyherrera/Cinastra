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
    ? We import icons that we will use in this 
    ? component, we import the icons from the 
    ? 'react-icons' library that contains many 
    ? enough and too many icons to be able to use 
    ? in our applications and to be able to make the user 
    ? interface more attractive and intuitive for the user.
*/
import { AiOutlineClose, AiOutlineClear } from 'react-icons/ai';

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
import * as Declarations from '../../../../../Configuration.json';

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
    
    ? The component receives a parameter which will
    ? allow cleaning the messages from its 
    ? container on the client. 
*/
export default function LeftContainer({ OnClearChat }){

    /*
        * Finally we return the content of 
        * the authentication page.
    */
    return (
        <div>
            {/*
                * We will show an icon that is intuitive 
                * for the user that shows that the chat 
                * can be cleaned, when the user clicks on 
                * the icon the function that is received 
                * by the component parameter will be called, this 
                * function allows cleaning the chat for the client 
                * of the room to which it is connected.
            */}
            <i className='Cursor-Pointer' onClick={OnClearChat}>
                <AiOutlineClear />
            </i>

            {/*
                * Now we show another icon that will allow the 
                * user to intuit that if he clicks, the chat will 
                * close, when he clicks we will take the user to the 
                * authentication page, we will indicate 'Routes.Auth' 
                * since we have saved in the previously declared 
                * constant called Routes the set of urls that our 
                * application will have.
            */}
            <Link  to={Routes.Auth}>
                <i><AiOutlineClose /></i>
            </Link>
        </div>
    );
}