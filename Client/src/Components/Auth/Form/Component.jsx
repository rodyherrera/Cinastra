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
    ? in the execution of the page.
*/
import React, { useState } from 'react';

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
import Fade from 'react-reveal/Fade';

/*
    ? We import the function that will allow us to obtain 
    ? the client's authentication data according to their 
    ? last session in Cinastra, if it is the first time that 
    ? the user enters our service, random data will be generated 
    ? according to what is established in our configuration file.
*/
import { GetQuickSignInData } from '../../../Utils/Client/QuickSignIn';

/*
    ? We import the 'AgreementMessage' component that 
    ? will allow us to show the agreement message of our 
    ? service, which the user will automatically accept 
    ? when using Cinastra.
*/
import AgreementMessage from './AgreementMessage/Component';

/*
    ? We import the connect button that will help us to 
    ? take the user to the specified room so that they 
    ? can start interacting.
*/
import ConnectButton from './Fields/ConnectButton/Component';

/*
    ? We import the room field that will allow 
    ? the user to enter a room to connect to.
*/
import RoomField from './Fields/Room/Component';

/*
    ? Like the room field, we will import the username 
    ? field that will allow the user to enter their name 
    ? to access a room identified with it.
*/
import UsernameField from './Fields/Username/Component';

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
export default function Form(){
    
    /*
        * Creating two variables, one that will store the 
        * user name and another that will store the name of 
        * the room, both will store the data of the last session 
        * that the user had, if the user has not had any last 
        * session, that is, it is the first time that enter the 
        * site new data will be generated.
    */
    const { Username, Room } = GetQuickSignInData();

    /*
        * Creating a state variable that will allow 
        * access and set a username.
    */
    const [GetUsername, SetUsername] = useState(Username);

    /*
        * Creating another state variable that, like the one 
        * for the username, will allow obtaining and 
        * assigning a new room.
    */
    const [GetRoom, SetRoom] = useState(Room);

    /*
        * Finally we return the content of 
        * the authentication page.
    */
    return (
        <section className='Generic-Dark-Box-Shadow' id='Auth-Container'>
            
            {/*
                * We use the Fade component that, as 
                * previously mentioned, will allow us 
                * to show a pleasant animation that will 
                * make the component and its content load 
                * in a more pleasant way for the user, its 
                * their nodes will be affected by the animation.
            */}
            <Fade clear>
                <article id='Auth-Fields-Container'>

                    {/*
                        * Inside another container we will load the components 
                        * that we previously imported. We will begin by 
                        * importing the user name which will receive two 
                        * parameters, the first being the Getter of the state 
                        * variable that contains the user name and the second 
                        * parameter is the Setter of the same state 
                        * variable previously mentioned
                    */}
                    <UsernameField
                        GetUsername={GetUsername} 
                        SetUsername={SetUsername} />
                    
                    {/* 
                        * As a second component we will use the field so 
                        * that the user can establish a room, the 
                        * component will receive two parameters, the first 
                        * being the Getter of the room's state variable and 
                        * as the second parameter it receives the Setter of
                        * the same state variable mentioned above.
                    */}
                    <RoomField
                        GetRoom={GetRoom} 
                        SetRoom={SetRoom} />

                    {/* 
                        * As the last component in this container we will 
                        * load the connect button which will allow the user 
                        * to connect to the specified room with the specified 
                        * username, the button receives 4 parameters where 
                        * the first is the Setter of the username status 
                        * variable, the second is the Setter of the state 
                        * variable of the room, the third is the Getter of 
                        * the state variable of the username and the fourth 
                        * is the Getter of the state variable of the sa.a.
                    */}
                    <ConnectButton
                        SetUsername={SetUsername}
                        SetRoom={SetRoom}
                        GetUsername={GetUsername} 
                        GetRoom={GetRoom} />    

                </article>
                
                {/*
                    * Before closing the container, we will show 
                    * the agreement message that the user will 
                    * have when using our service.
                */}
                <AgreementMessage />
            </Fade>
        </section>
    );
}