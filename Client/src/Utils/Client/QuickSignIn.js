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
    ? Importing the 'StringGenerator' function from the 
    ? set of algorithms in the String file, which should 
    ? clearly have sets of algorithms related to the name 
    ? of the same, that is to say with Strings, like this 
    ? function as its name says it will help us to generate 
    ? random characters , we will use it to complete the values 
    ? ​​of some fields, this because in QuickSignIn it must be 
    ? being manipulated from the client side because it acts 
    ? with the LocalStorage, there is no way to manipulate 
    ? the client's LocalStorage from the server side unless 
    ? it is With an API, that is why we do certain validations 
    ? before saving the data there, of course, it can be 
    ? manipulated, it is frontend, but a common user will not do 
    ? it and if he does it he would not be doing damage or sending 
    ? garbage to the server, simply the garbage would be saved 
    ? locally on your client and on top of it with errors.
*/
import { StringGenerator } from "../Algorithms/String";

/*
    ? When importing functions that will help us parse 
    ? the data that we receive in some functions that 
    ? are defined in this file, remember that 'QuickSignIn' 
    ? is a Cinastra feature that will allow us to save the data 
    ? from the last login in the client's LocalStorage, As 
    ? previously, in the other import, I mentioned that this 
    ? cannot be done in the backend and must be done on the 
    ? client side, that is why we import this function to save 
    ? the data in a safe, correct and valid way.
*/
import { ParseCredentialValue, GenerateRandomUsername } from "../Security/Auth";

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
    * Saving in a variable the configuration of 
    * default fields that the Auth will have, the 
    * login, since these fields when starting the 
    * site for the first time will not be 
    * empty, they will be auto-completed, with an 
    * auto-generated username based on the name User 
    * default that is defined in the file 'Configuration.json' and 
    * the same with the Room, the room is not auto 
    * generated, the Room by default if there is no one in 
    * the LocalStorage is defined in the aforementioned file 
    * that is imported as 'Declarations'.
*/
const { DefaultRoom, DefaultUsername } = Declarations.Auth;

/*
    * From the 'Configuration.json' file of which I 
    * mentioned in the other variable assignment, we 
    * will also obtain another set of data that will 
    * be used in this file, these are the credential 
    * configurations, configurations that will serve to 
    * obtain, for example, the minimum length and the 
    * maximum length that each field that the login 
    * will have must have.
*/                       
const CredentialsConfig = Declarations.Auth.Fields;

/*
    ? By creating the function that will allow 
    ? us to obtain the data of the last session 
    ? start, this function will allow us to remember 
    ? the username and the name of the room to which 
    ? the user connected the last time, in this way the 
    ? user will not have to establish the same values ​​
    ? every time you use the service, if it is the first 
    ? time that the user enters Cinastra as you can 
    ? imagine, it will not have data from a last session in 
    ? the LocalStorage, that is why previously by destroying 
    ? the configuration data we declared the name user name by 
    ? default that will be used as a base to generate a random one 
    ? and we also declare a room by default, if the user connects 
    ? to a room with that data or modifies them they will be 
    ? saved in their LocalStorage for a next new login.
*/
export const GetQuickSignInData = () => {

    /*
        * We start by saving the username in a 
        * variable, we will obtain the username 
        * from the LocalStorage in case it is null 
        * or undefined, we will generate a random 
        * username passing it as the base username 
        * parameter the default username established 
        * in In the configurations file, both this 
        * variable and the variable that the Room also 
        * stores are variables of type let, this because 
        * their value can change in the execution of the function.
    */
    let Username = 
        localStorage.getItem('Username') || GenerateRandomUsername(DefaultUsername);
    
    /*
        * As when obtaining the username we will do it 
        * with the Room, using a let variable because 
        * its value can change in the execution of the 
        * function and doing the obtaining from the 
        * LocalStorage, if it is the first time that the user 
        * enters to the site, this retrieval may give null or 
        * undefined results, so if this is the case, the default 
        * room established in the configuration file 
        * will be set as the value.
    */
    let Room = 
        localStorage.getItem('Room') || DefaultRoom;

    /*
        * We will check if the username contains 
        * the * character, this character will be 
        * placed when the value has words that are 
        * considered offensive, these words are defined 
        * in the server-side configuration file, we will 
        * not save the parsed value so that it is not 
        * offensive In the LocalStorage, we will save it
        * without * so that the asterisks that it has will 
        * be replaced by random characters, we will do this
        * using the StringGenerator function that
        * was imported previously
    */
    if(Username.includes('*')){
        
        /*
            * We reassign the value of the variable 
            * Username, where its new value will be 
            * the same but with those removed and with 
            * the blank spaces removed.
        */
        Username = Username.replaceAll('*', '').replaceAll(' ', '');

        /*
            * Now as we have replaced characters and we 
            * do not know whether or not it meets the 
            * minimum requirements of the field, what we 
            * will do is complete with random characters 
            * up to the maximum number of characters that 
            * the user field accepts, the maximum amount 
            * established in the configuration file, so We 
            * will therefore calculate the difference that 
            * exists between the maximum number of characters
            * that the user field accepts with the maximum length 
            * of the field that it has with the characters 
            * already removed, in this way we will complete according 
            * to the result of the difference as many characters as 
            * this indicates it in a way that we will reach the 
            * maximum number of characters that the field accepts.
        */
        Username += StringGenerator(
            CredentialsConfig.Username.MaxLength - Username.length);

        /*
            * Now we establish in the user's LocalStorage 
            * the new user name already parsed and 
            * validated, in this way we will have it clean 
            * so as not to have it with asterics and space names.
        */
        SetQuickSignInData({ Username: Username });
    }
    
    /*
        * As we did with the username, we will verify if 
        * the room that the user entered contains 
        * asterisks, if it contains asterisks it means that 
        * the room contains words that are considered 
        * offensive, words that are established in 'Configuration.json' in
        * the code anatomy server source, if this is true we will
        * make a series of instructions to save the room value in 
        * a clean and valid way for a future quick login.
    */
    if(Room.includes('*')){
        
        /*
            * We reassign the room value to the same 
            * value but with the asterics removed 
            * and the blanks removed.
        */
        Room = Room.replaceAll('*', '').replaceAll(' ', '');
        
        /*
            * As we did with the username, we will 
            * verify the difference between the maximum 
            * length of characters that the room field 
            * accepts, the maximum amount of characters 
            * defined in the 'Configuration.json' file of 
            * the anatomy of the source code of the client in t
            * he 'src' folder, in this way we will generate a random 
            * string based on the room without the asterics 
            * or blank spaces.
        */
        Room += StringGenerator(
            CredentialsConfig.Room.MaxLength - Room.length);

        /*
            * We establish in the client's LocalStorage 
            * the new value of the room already with the 
            * parsed and valid value, just as we did 
            * with the username.
        */
        SetQuickSignInData({ Room: Room });
    }

    /*
        * Finally, as the name of the function says, which 
        * is to obtain the login data that are in the 
        * LocalStorage and that if they do not exist, they are 
        * generated as explained above, we are going to return 
        * an object with the values, where the key to access 
        * the Username will be 'Username' and the key to 
        * access the name of the output will be 'Room', both 
        * making the respective variables also defined in the
        * development of the function.
    */
    return { Username, Room };
}

/*
    ? Declaration of the function that will allow 
    ? setting the username or room in the client's 
    ? LocalStorage, the function receives two parameters 
    ? where both are optional because they have undefined 
    ? values ​​assigned, clearly it must receive one of the 
    ? two, but that is not why The two values ​​will always be 
    ? assigned at the same time, for example in the 
    ? 'GetQuickSignInData' function we assign the values ​
    ? ​separately so that the other is undefined.
*/
export const SetQuickSignInData = ({ Username = undefined, Room = undefined }) => {

    /* 
        * We verify if the Boolean value of the 
        * Username variable received as a parameter 
        * is true, this means that the Username variable 
        * established as the first parameter is different 
        * from null to undefined and to false and that it 
        * really has a value, this value will be set in the 
        * LocalStorage of the user.
    */
    if(Username)
        
        /*
            * We establish in the LocalStorage of the user 
            * the Username that he sent us as the first 
            * parameter, its value will be parsed using the 
            * 'ParseCredentialsValue' function that is established 
            * in the 'Security' folder in the 'Auth' file, both 
            * contained in the 'Utils' directory from 'src'
        */
        localStorage.setItem('Username', ParseCredentialValue('Username', Username));
    
    /*
        * As we did with the username, we will verify 
        * if the second parameter we receive is as Boolean 
        * data true or not, that is, if the data is different 
        * from undefined, null or false, if so, we will 
        * set the value of room.
    */
    if(Room)

        /*
            * And again, as we did with the user, we 
            * set the value that he sent us as the 
            * second parameter in the LocalStorage but 
            * using the 'ParseCredentialsValue' 
            * function, which in the previous function 
            * explained its origin, in this way we 
            * save the parsed and valid data.
        */
        localStorage.setItem('Room', ParseCredentialValue('Room', Room));
}