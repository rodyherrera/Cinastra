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

import React from 'react';

/*
    ? Importing necessary components so that the 
    ? routes of the application work correctly, this 
    ? using the 'react-router-dom' library.
*/
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

/*
    * By importing the tools that will improve the 
    * user experience, the Alert serves to display an 
    * alert in a pleasant way to the user while on the 
    * site, while the ScrollToTop is used so that every 
    * time the user changes the page, it always starts, in 
    * the beginning and not in another part of it.
*/
import { Alert } from '../Components/Alert/Component';
import { ScrollToTop } from './Client/UserExperience';

/*
    * Importing the header and footer of the page 
    * that will be available on all pages, this is because 
    * it is loaded here and not in each of the 
    * pages and/or components.
*/
import Header from '../Components/Header/Component';
import Footer from '../Components/Footer/Component';

/*
    ? Importing the pages, these imports will be used 
    ? to show certain content depending on the 
    ? path that the client has, each of these pages 
    ? as you can know has a specific path, a path that 
    ? is defined in the 'Configuration.json' file located 
    ? in the src folder at the root of the Client's source code.
*/
import Chat from '../Pages/Chat/Template';
import Auth from '../Pages/Auth/Template';
import Agreement from '../Pages/Agreement/Template';
import NotFound from '../Pages/NotFound/Template';

/*
    ? By importing the JSON that contains general settings 
    ? of the application, this is done so that when something 
    ? has to be changed, the specific part does not have to be 
    ? searched in the file branch or in the anatomy of the source 
    ? code to make the modification, so that only have to access 
    ? the file and now, the data is imported as 
    ? an object called 'Declarations'.
*/
import * as Declarations from '../Configuration.json';

/*
    * Destructuring the data collected from the JSON, this 
    * to more easily access its default values ​​to facilitate 
    * their modification as previously explained, the first 
    * destructurization is of the messages when the user loses 
    * the connection and when it returns. to be 
    * reestablished, this because in the Application there is 
    * a listener of the client's network which if disconnected 
    * from the network will appear an alert informing you of the 
    * event, the same when you get it again, a message will be 
    * displayed that will tell you to It returned to establish 
    * communication with the network, the second corresponds to 
    * the application routes for each page, this to use them in 
    * the router and show the user content according to their path.
*/
const { OnConnect, OnDisconnect } = Declarations.UserExperience;
const Routes = Declarations.Routes;

/*
    ? Starting the development of the component that will 
    ? be imported by default to be used in another 
    ? file, this using the default export, you will notice 
    ? that in the file branch most functions are not declared 
    ? with the function keyword, but rather with const, you will see 
    ? that throughout the source code each component uses the 
    ? function keyword because I did not find a clear way to export 
    ? the component by default, readability comes first :).
*/
export default function Application(){

    /*
        * Implementing the client's network listener 
        * that will execute an alert on the page when 
        * it is detected that the connection has been 
        * lost, the alert will have as a message a value 
        * defined in 'Configuration.json', the same with 
        * the other listener that will be listening when 
        * the user returns to recover the connection, both 
        * have different types, one will be of the information 
        * type and the other of the success type, this has no 
        * major relevance, the only thing it does is show the 
        * color of the alert in a different way.
    */
    window.addEventListener('offline', () => 
        Alert({ Message: OnDisconnect, Type: 'Information' }));

    window.addEventListener('online', () => {
        Alert({ Message: OnConnect, Type: 'Success' });
        
        /* 
            * Unlike the other listener, in this one we will 
            * return the user to the Auth page, because when 
            * recovering the connection it will have to start 
            * again, in reality this is useful only when the 
            * user had a connection with the server through the 
            * Socket, but I think that the same It gives you a better 
            * experience to redirect you to the beginning when you 
            * reestablish the internet connection so that you can start 
            * your stay at the Cinastra again.
        */
        return <Redirect to={Routes.Auth} /> });
            
    /*
        ? Making the return of the application, this 
        ? return will be the first one that is called 
        ? when starting on the page because it contains 
        ? the Router, that is, this return will show the 
        ? content that is desired to the user because using 
        ? the router we will return true content depending 
        ? on the user's path.
    */
    return (
        <BrowserRouter>
            {/* 
                * In the parent component that is above this 
                * comment, the BrowserRouter is used, which will 
                * allow us to make use of the other tools to show 
                * the user certain content depending on their 
                * path, after that, that is, below this comment we 
                * return to enclose the others nodes using the ScrollToTop 
                * component, this component is responsible for each time 
                * the page is changed automatically scrolls to the top of 
                * it, in this way we prevent it from loading in the 
                * current scroll.
            */}
            <ScrollToTop>
                {/*
                    * Now we include the component of the header of 
                    * the page, the header will be loaded on all 
                    * pages and it is for that reason that it is defined here.
                */}
                <Header />
                    {/*
                        * We return to enclose a set of nodes with the 
                        * Switch component, the Switch component is used 
                        * to verify when the route does not match with 
                        * any of those established in its child nodes, that 
                        * way we will be able to redirect to a 404 page, that 
                        * is the Switch function (I think hehe)
                    */}
                    <Switch>
                        {/*
                            * Now we define the routes to show the user the content 
                            * according to their path, each path receives two 
                            * parameters except the first but it is because it is 
                            * Home ('/'), the others receive two parameters where one 
                            * is the path that indicates which path should have the 
                            * client to show said page, the second is the component 
                            * that is the page to show when the client's path matches 
                            * the established one.
                        */}
                        <Route exact path={Routes.Auth} component={Auth} />
                        <Route path={Routes.Chat} component={Chat} />
                        <Route path={Routes.Agreement} component={Agreement} />

                        {/*
                            * Heyy for this the switch is used, when we 
                            * indicate '*' we make that every time that no 
                            * match is made with any of the established 
                            * routes, it goes to this route, a route that we will 
                            * use as an HTTP 404 error, which means that the path of 
                            * the client does not match any valid path defined in 
                            * 'Configuration.json' and we are going to send it here <3.
                        */}
                        <Route path='*' component={NotFound} />
                    </Switch>
                <Footer />
            </ScrollToTop>
        </BrowserRouter> );
}