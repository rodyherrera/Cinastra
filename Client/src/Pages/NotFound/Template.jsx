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
    ? This is the 'NotFound' page that will act as 
    ? an 'HTTP 404' error, that is, the requested page 
    ? was not found or specifically that the client's 
    ? path did not match any of the established 
    ? pages, what we will do here is not show a nice message 
    ? to the user telling him that the page does not 
    ? exist, otherwise we will redirect him to the authentication 
    ? page and send him an alert, but to do the redirection 
    ? we need to import the 'Redirect' component of 'react-router'.
*/
import { Redirect } from 'react-router';

/*
    ? We import the 'Alert' component, this component 
    ? will allow us to insert an alert in the document to 
    ? inform the user about an event, this is not a component 
    ? in itself since it does not use JSX, but I consider 
    ? it a component because it is something that It will be 
    ? used several times throughout the anatomy of the Client's 
    ? source code, this to improve the user experience when 
    ? using our service and alert them about an error or 
    ? notify them about a specific action.
*/
import { Alert } from '../../Components/Alert/Component';

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
import * as Declarations from '../../Configuration.json';

/*
    * We save in a variable the routes that 
    * our application will have, these routes 
    * are defined in the file 'Configuration.json' 
    * inside the folder 'src' of the root of the 
    * anatomy of the Client's source code, in this way 
    * we can access the routes of the application and 
    * when modifying any we only have to modify it in 
    * that file and not in the entire application, it is 
    * stored as a constant because its value 
    * will never change.
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
export default function NotFound(){
    
    /*
        * Using the component of 'Alert' imported 
        * and explained previously, where we send 
        * a message which will be the message that 
        * will serve as an alert for the user or 
        * notify him depending on the use that is 
        * given together with its type that is nothing 
        * out of the ordinary. common, the type only makes 
        * that depending on it change the color of the 
        * left border of the alert.
    */
    Alert({
        Message: Declarations.UserExperience.Pages.OnNotFound,
        Type: 'Information' });

    /*
        * Finally we redirect the user to the authentication 
        * page together with the alert that notifying 
        * him that the requested page was not found, I 
        * find that doing this is more useful than 
        * doing a full page for a page not found error 
        * 'HTTP 404 - Not Found' due to We simply 
        * redirect you to a page and alert you that the 
        * page you requested does not exist.
    */
    return <Redirect to={Routes.Auth} />
};