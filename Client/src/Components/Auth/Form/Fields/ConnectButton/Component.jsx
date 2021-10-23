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
    ? We import the Button component from the 'material-ui' 
    ? library, in my opinion it is a button that may seem 
    ? pleasant to the user, whose design is not bad, that is 
    ? why I use it and I do not create my own button.
*/
import { Button } from '@mui/material';

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
import { Alert } from '../../../../Alert/Component';

/*
    ? We import the function that will allow us to establish 
    ? the data of the last session of the user in 
    ? the LocalStorage of the client
*/
import { SetQuickSignInData } from '../../../../../Utils/Client/QuickSignIn';

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
    * We get the error messages that can occur when trying to 
    * connect to the server, these messages are declared in the 
    * configuration file found in the 'src' folder of the 
    * client's source code.
*/
const { 
    OnUsernameAndRoomEmpty, 
    OnNotRoom, OnNotUsername } = Declarations.Auth.Errors;

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
     
    ? The component receives two parameters where the 
    ? first is the Getter of the user name status variable 
    ? and as the second parameter it receives the Getter 
    ? of the status variable that stores the room to which 
    ? the user wants to connect.
*/
export default function ConnectButton({ GetUsername, GetRoom }){

    /*
        * We create a function that will execute a series 
        * of instructions each time the button is clicked, that 
        * is, this function will be executed when the user wants 
        * to connect to the room that he specified.
    */
    const OnClickHandler = (Event) => {

        /*
            * With a conditional we will verify if the value 
            * of the room and the value of the username are 
            * undefined null or an empty string.
        */
        if(!GetRoom || !GetUsername){

            /*
                * We create a variable to define an error based 
                * on the conditionals that we are going to carry 
                * out in the condition and based on the final 
                * message we will show it to the user through an 
                * alert to inform them of the problem.
            */
            let Message;
            
            /*
                * If the room and the username are undefined null 
                * or an empty string we will show the user the error 
                * message that both fields are empty.
            */
            if(!GetRoom && !GetUsername)
                Message = OnUsernameAndRoomEmpty;
           
            /*
                * If the room is undefined null or empty string we 
                * will show the user a message that tells him 
                * that the room is empty.
            */
            else if(!GetRoom)
                Message = OnNotRoom;

            /*
                * If only the username is empty, we will show 
                * the user the corresponding message that they must 
                * complete or enter valid values in the username 
                * field because its value is null, undefined or 
                * an empty string.
            */
            else
                Message = OnNotUsername;

            /*
                * We show the alert according to the content 
                * of the message variable to inform you of 
                * what has happened.
            */
            Alert({ 
                Message, 
                Identifier: 'Auth-Field-Validation',
                Type: 'Error' });

            Event.preventDefault();
        }else

            /*
                * If everything is valid, the only thing 
                * we will do so that the user can connect to 
                * the room that he specified is to save the 
                * data that he entered in the LocalStorage through 
                * the function that we have imported and that will 
                * allow us to do so, in this way in a future Next 
                * session the user does not have to fill in the fields 
                * again with the default and auto generated values, but 
                * rather have them ready with the latest 
                * data as the same input.
            */
            SetQuickSignInData({
                Username: GetUsername,
                Room: GetRoom });
    };

    /*
        * Finally we return the content of 
        * the authentication page.
    */
    return (
        <div id='Auth-Connect-Button-Container'>

            {/*
                * Inside a container with the help of the Link 
                * tag when it is clicked we redirect it to the Chat 
                * page, and when it is clicked we will execute the 
                * function established previously, within this 
                * Link tag is the Button tag, a component previously 
                * imported from the library 'material-ui' whose component 
                * has as a child node a <span> that has the message 
                * 'Connect' as a text node.
            */}
            <Link onClick={OnClickHandler} to={Routes.Chat}>
                <Button fullWidth variant='contained'>
                    <span>Connect</span>    
                </Button>
            </Link>
        </div>
    );
};