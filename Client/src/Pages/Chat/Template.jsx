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

    ? We will carry out the import of useState to 
    ? initialize a state variable whose value will change 
    ? in the execution of the page, together with this we 
    ? will also import useEffect to execute a series of 
    ? instructions when the state or value of the 
    ? initialized variable changes.
*/
import React, { useState, useEffect } from 'react';

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
    ? We import the 'Redirect' component from the 'react-router-dom' 
    ? library, this component will serve us to redirect the user as 
    ? its name says to another page that has our application, also just 
    ? to this import we do the import of useHistory, that will allow 
    ? us to use the history object that the client provides us, this 
    ? since throughout the development of this section we are going 
    ? to set the path that the client has, for that we use the useHistory 
    ? here, in other words we will use it as the previous component 
    ? explained, as a redirector.
*/
import { Redirect, useHistory } from 'react-router-dom';

/*
    ? We import the function 'io' (Input / Output) from the library 
    ? 'socket.io-client', this function from the respective 
    ? library mentioned above will allow us to interact with 
    ? the Backend server that our application has, even written in 
    ? javascript using the technology of NodeJS with 
    ? a socket server of socket.io.
*/
import io from 'socket.io-client';

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
    ? We import the 'LoadingScreen' component, which 
    ? as its name indicates it will allow us to show 
    ? a loading screen that will be superimposed on 
    ? the current page, this loading screen will be used 
    ? on this page in case the server takes a long time to 
    ? respond, in than our connection with the same 
    ? afternoon, in this way we wait for the user 
    ? in a friendly way.
*/
import LoadingScreen from '../../Components/LoadingScreen/Component';

/*
    ? We import the component that will serve to show 
    ? the upper options that the room container will have, as 
    ? its name indicates it is the room's cinnamon bar.
*/
import RoomHeaderBar from '../../Components/Chat/RoomHeaderBar/Component';

/*
    ? We import the actions that will be available 
    ? to the user in the chat.
*/
import UserActions from '../../Components/Chat/UserActions/Component';

/*
    ? We import the component that will serve as the 
    ? same container that will show in a list the number 
    ? of users who are chatting in the room.
*/
import CurrentlyChatting from '../../Components/Chat/CurrentlyChatting/Component';

/*
    ? We import the component that will allow us to 
    ? show the messages of the room in which the user 
    ? is, what this component will do internally is to 
    ? receive the array with each message and make 
    ? a map to show them.
*/
import Messages from '../../Components/Chat/Messages/Component';

/*
    ? We import the Alert component together with the 
    ? 'RemoveAlertIfExists' function, both are not a component in 
    ? themselves, because it inserts a node in the document not 
    ? using JSX, but I consider it as a component since it 
    ? will be used in various parts of the anatomy of the client's 
    ? source code, the 'Alert' function will allow us to show an 
    ? alert to the user in a friendly and cute way and the 
    ? 'RemoveAlertIfExists' function will allow us to eliminate an 
    ? alert if it exists, it will also allow to receive an 
    ? identifier, alerts can have identifiers to be able to eliminate 
    ? a specific one and not eliminate others.
*/
import { Alert, RemoveAlertIfExists } from '../../Components/Alert/Component';

/*
    ? We import the 'GetQuickSignInData' function, which 
    ? is a function of the 'QuickSignIn' feature, a function 
    ? that will allow obtaining the data of the last session 
    ? of the user, said data is saved in the LocalStorage, if the 
    ? user does not have data from a last session because It may 
    ? be the first time that the user accesses the website, random 
    ? data will be generated.
*/
import { GetQuickSignInData } from '../../Utils/Client/QuickSignIn';

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
import './StyleSheet.css'

/*
    * We create a variable called Socket of type 
    * let, this variable will serve to store the 
    * connection of the Socket with our Backend 
    * server, it will be used only in this part of 
    * the code, here will be its logic.
*/
let Socket;

/*
    * We collect the data that we have stored in 
    * our configuration file, we will save the 
    * Server in a variable of constant type that 
    * refers to the IP address of the server that 
    * contains our Socket to connect from the 
    * client, we will also collect the maximum waiting 
    * time in milliseconds that the user will have in the 
    * loading screen that we have imported previously, this 
    * maximum waiting time will be the time that the 
    * user must wait in case the server takes a 
    * long time to send a response.
*/
const { Server, ConnectionTimeOut } = Declarations.Backend;

/*
    * Like the previous variable assignment, we are going 
    * to capture two values ​​from our configuration 
    * file, the first is 'OnNotOnline' which contains 
    * the message that will be displayed in case the 
    * user without internet connection tries to access 
    * this page, the second This message will correspond in 
    * case the server is down, saturated or turned off, this 
    * message will be displayed once the previously 
    * assigned time-out passes.
*/
const { OnNotOnline, OnServerDown } = Declarations.Chat;

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
export default function Chat(){
    
    /*
        * When this page is accessed we will 
        * eliminate all the alerts that have the 
        * identifier 'Auth-Field-Validation', alerts 
        * that will be displayed when any of the login 
        * fields are invalid, in this way using the 
        * previously explained and imported function we will 
        * eliminate those alerts when the user 
        * joins this chat page.
    */
    RemoveAlertIfExists('Auth-Field-Validation');
    
    /*
        * We will declare in a constant called History 
        * access to the methods of the client's history 
        * object, this using 'useHistory' that we have 
        * previously imported and it will facilitate access 
        * to its functionalities that it grants in the 
        * client, we will use it simply to make redirects.
    */
    const History = useHistory();
    
    /*
        * Now we make the declaration of the variables 
        * of constant type of states, with their respective 
        * Getters and Setters of their values ​​equal to 
        * 'useState', a function imported 
        * and explained previously.
    */

    /*
        * We declare the state variable that will allow 
        * us to store and use the username that it entered 
        * on the login page, or auto generated.
    */
    const [GetName, SetName] = useState('');
    
    /*
        * Declaration of the state variable that will 
        * allow us to store the name of the Room that 
        * the user entered or the one that exists by 
        * default, this to be shown on the screen and 
        * to be sent to other components, also to send 
        * it to the server and connect to the Specified 
        * room with specified username.
    */
    const [GetRoom, SetRoom] = useState('');

    /*
        * We declare the variable of states that 
        * will allow to store the number of users 
        * that the specified room contains.
    */
    const [GetUsers, SetUsers] = useState('');
    
    /*
        * State variable declaration that will allow 
        * to store the message that the user enters.
    */
    const [GetMessage, SetMessage] = useState('');

    /*
        * Declaration of the state variable that will 
        * allow the storage of all the messages that the 
        * room contains, both incoming and outgoing, with 
        * incoming I mean the messages that the user enters 
        * and outgoing I mean messages that other 
        * users send to the room.
    */
    const [GetMessages, SetMessages] = useState([]);

    /*
        * State variable declaration that will 
        * allow to obtain and establish errors that 
        * occure from the client side and then be 
        * redirected and warn you of the error t
        * hat has occurred.
    */
    const [GetError, SetError] = useState('');
  
    /*
        * With the help of an if we are going to verify 
        * the user's connection, whether or not he is 
        * connected to the network, if he is not connected 
        * we are going to show him an alert with the message 
        * previously obtained in our configuration file, and 
        * after this using our constant that contains the 
        * methods of the history object we are going to set 
        * the path to the client to the url that has the Auth 
        * page, making use of our previously defined 
        * constant called Routes.
    */
    if(!navigator.onLine){
        
        /*
            * Setting the alert to tell the user why 
            * they were redirected to the authentication page.
        */
        Alert({ Message: OnNotOnline, Type: 'Error' });

        /*
            * Establishing the path of the user in the 
            * corresponding one that refers to the 
            * authentication page.
        */
        History.push(Routes.Auth);
    }

    /*
        * Now we will verify that when the user is connected 
        * to the internet and loses it while on the chat 
        * page, once he loses it, he is redirected to the 
        * authentication page, his session will be closed 
        * automatically after a while.
    */
    window.addEventListener('offline', () => History.push(Routes.Auth));

    /*
        * Using our History object that contains the 
        * methods of the 'history' object that the client 
        * has available, we will make a listen, this will 
        * make each time a change in the client's path is 
        * detected, the instruction that contains this listen 
        * is executed, which is to disconnect the 
        * client from the server.
    */
    History.listen(() => Socket.disconnect());

    /*
        * Function that will be executed when you 
        * cannot have a response from the server, that 
        * is, the maximum waiting time established in 
        * the configuration file was timed out, after 
        * that these instructions defined in this 
        * function will be executed.
    */
    const OnCanNotConnectToServer = () => {
        
        /*
            * We establish the path of the client 
            * in the url that refers to the 
            * authentication page.
        */
        History.push(Routes.Auth);

        /*
            * We set the user an alert to inform 
            * him why he was redirected to the 
            * authentication page, as a message we 
            * indicate our variable 'OnServerDown' that 
            * we previously obtained from the configuration file.
        */
        Alert({ Message: OnServerDown, Type: 'Error' });
    }

    /*
        * Function that will be executed when an error 
        * is detected in our state variable, when its 
        * value is true as a non-empty string, its 
        * instructions will be executed.
    */
    const OnError = () => {
        
        /*
            * We establish an alert to inform the 
            * user that he has had an error and that 
            * due to this it will be reidrected, the 
            * alert will receive as a message the 
            * value of the state variable 'GetError'.
        */
        Alert({ Message: GetError, Type: 'Error' });
        
        /*
            * We do the redirection to 
            * the authentication page.
        */
        return <Redirect to={Routes.Auth} />
    }

    /*
        * Function that will be executed 
        * when you want to clean the chat.
    */
    const OnClearChat = () =>

        /*
            * We delete all our messages from the status 
            * variable and leave it with only one that says 
            * that the chat was cleaned, said message will 
            * be sent by the Room user whose user is reserved.
        */
        SetMessages([{
            'User': 'Room',
            'Text': 'The chat was cleaned.' }]);

    
    /*
        * Function that will be executed 
        * when the user tries to send a message.
    */
    const OnSendMessage = () => {

        /*
            * We verify that there really is a message 
            * in the state variable that allows us to 
            * obtain the message, if its value is different 
            * from null, undefined or an empty string, we are 
            * going to execute the following 
            * instruction inside the if.
        */
        if(GetMessage)
            
            /*
                * We are going to tell the server that we 
                * want to send a message, we send it as a 
                * second parameter the message we want to send 
                * and finally in the callback we will clean the 
                * message so that the user can send a new message.
            */
            Socket.emit('SendMessage', GetMessage, () => SetMessage(''));
    };

    /*
        * When the user enters the page with the help 
        * of the previously explained and imported 
        * useEffect, we are going to execute a series 
        * of instructions, instructions defined 
        * within the useEffect.
    */
    useEffect(() => {
        
        /*
            * We will store in a constant because its 
            * value will not change the username and 
            * room that the user entered when logging 
            * in, this data is stored in the LocalStorage 
            * and we will obtain it using the 'GetQuickSignInData' 
            * method that was previously imported from the '
            * 'QuickSignIn' feature.
        */
        const { Username, Room } = GetQuickSignInData();

        /*
            * In the variable that we have defined 
            * outside of this function we will assign the 
            * connection to the server, using the 'io'
            * method of the 'socket.io' client, we pass as a 
            * parameter the IP address of our server that should be 
            * defined in the file Of configuration.
        */
        Socket = io.connect(Server);

        /*
            * We set to our state variables the room and 
            * the username that we obtained from it when I 
            * started the session, data stored in the
        */
        SetRoom(Room);
        SetName(Username);
        
        /*
            * Now we tell the server that we want to 
            * enter, we pass it as a parameter an object 
            * that contains the username and the room to 
            * which the user wants to connect, as finally 
            * we will define the callback, that if it contains 
            * the ClientError parameter, we will establish our 
            * SetError state variable for the user to be 
            * redirected and warned of the error that has 
            * occurred on the server side.
        */
        Socket.emit('join', { Username, Room }, (ClientError) => {

            /*
                * We check if ClientError is not 
                * undefined, null or an empty string, in 
                * this case we have actually received an 
                * error so that it is set in our state variable.
            */
            if(ClientError)

                /*
                    * We set the error in the state variable.
                */
                SetError(ClientError);
        });
    }, []);


    /*
        * With the help of another useEffect, once the 
        * first one is executed, we will make a constant 
        * collection of all the messages that the server 
        * contains and the users that the room the user 
        * connected to contains.
    */
    useEffect(() => {
        
        /*
            * We set to our state variable the messages 
            * that the server contains since the user entered.
        */
        Socket.on('Message', (Message) => 
            SetMessages(GetMessages => [...GetMessages, Message]));
        
        /*
            * Like the previous instruction, we will set 
            * our state variable to all users that are 
            * connected in the specified room.
        */
        Socket.on('RoomData', ({ Users }) => SetUsers(Users));
    }, []);

    /*
        * Finally we will return the content of the 
        * page, first we will check if there are errors or 
        * not, in case there is an error and the state variable 
        * GetError is different from null, undefined or an empty 
        * string we will return the content that contains the 
        * function 'OnError 'which will be in charge of executing 
        * the necessary instructions when an error occurs.
    */
    return GetError ? OnError() : 
    ( <main id='Chat-Main'>

        {/*
            * If there is no error we will check 
            * if the state variable 'GetUsers' is 
            * undefined, if this is the case we will 
            * execute the load of the loading screen 
            * component, this because it means that we 
            * have not yet established the connection 
            * with the server or it has not yet been 
            * established. It returns the data we have asked 
            * for, or it is simply down or turned off.
        */}
        {!Boolean(GetUsers) && (
            /*
                * We return our load component which 
                * will receive three parameters, where 
                * the first is equivalent to the maximum 
                * waiting time that our loading screen will 
                * have, a value defined in our configuration 
                * file and obtained previously, then it will 
                * receive a function that will be executed 
                * when the time wait ends and finally the message 
                * that should be displayed on the loading screen.
            */
            <LoadingScreen
                TimeOut={ConnectionTimeOut}
                OnTimeOut={OnCanNotConnectToServer}
                Message={`Connecting to the server, wait a moment, ${GetName}.`} /> )}

        {/* 
            * We use the Fade component that, as 
            * previously mentioned, will allow us 
            * to show a pleasant animation that will 
            * make the component and its content load 
            * in a more pleasant way for the user, its 
            * their nodes will be affected by the animation.
        */}
        <Fade clear>
            {/*
                * We establish a section that will 
                * contain the necessary components to make it 
                * possible to display the messages that the 
                * requested room contains.
            */}
            <section className='Generic-Dark-Box-Shadow' id='Chat-Messages-Container'>
                {/* 
                    * We load the component that will allow 
                    * us to show the upper part of the 
                    * container, we will send it two parameters 
                    * where the first is the function that will 
                    * be used to eliminate the messages from the 
                    * chat and the second refers to the name of 
                    * the wings.
                */}
                <RoomHeaderBar OnClearChat={OnClearChat} GetRoom={GetRoom} />

                {/*
                    * Now we will load the messages that the requested 
                    * room contains, the component receives two 
                    * parameters where the first is the state 
                    * variable that contains the incoming and 
                    * outgoing room messages and the second is 
                    * the name of the user.
                */}
                <Messages ChatMessages={GetMessages} GetName={GetName} />
                
                {/*
                    * Now we will make use of the component that will 
                    * load the actions that the user of this container 
                    * can do, which will be to write a message and send 
                    * it, that is, an input and a button, we send the 
                    * GetMessage state variable that will allow obtaining 
                    * the user's message, as a second parameter receives the 
                    * Setter of the same and finally receives the function 
                    * that will allow to send the message to the server.
                */}
                <UserActions
                    GetMessage={GetMessage} 
                    SetMessage={SetMessage}
                    SendMessage={OnSendMessage} />
            </section>
            
            {/*
                * Making the declaration of another 
                * container that will be in charge of 
                * showing all the users that are connected 
                * to the specified room.
            */}
            <section className='Generic-Dark-Box-Shadow'>
                    
                    {/* 
                        * We load the component that will be in 
                        * charge of displaying the list of users 
                        * connected to the specified room, it 
                        * receives as the first parameter the stage 
                        * variable that contains the list of users.
                    */}
                    <CurrentlyChatting Users={GetUsers} />
            </section>
        </Fade>
    </main> );
}