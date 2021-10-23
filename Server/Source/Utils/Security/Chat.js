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
    ? Importing the configuration file that 
    ? contains declarations which will serve in 
    ? different parts of the anatomy of the source 
    ? code, this is done to have the code more 
    ? controlled and when changing something, do it 
    ? in that file and not access each file to 
    ? change the value.
*/
const Declarations = JSON.parse(require('fs').readFileSync('./Configuration.json'));

/*
    ? We import the function that will allow us 
    ? to make our message FamilyFriendly, in this 
    ? way we make sure that the string we want 
    ? to verify is not offensive to some glass people.
*/
const { ParseToFamilyFriendly } = require('./FamilyFriendly');

/*
    * We import the maximum number of characters 
    * that the message must have, this maximum number 
    * of characters is defined in our configuration 
    * file that will be used throughout the anatomy of 
    * the server's source code.
*/
const { MaxLength } = Declarations.Chat.Message;

/*
    ? We create the function that will allow us 
    ? to parse the message, it clearly receives 
    ? the message that you want to parse as a parameter.
*/
const ParseMessage = (Message) => {

    /*
        * We check if the number of characters 
        * that the message has is higher than the 
        * maximum number it should have, in this 
        * way we will reassign the variable from up 
        * to the maximum number of characters allowed.
    */
    if(Message.length > MaxLength)

        /*
            * Making the assignment so that the message 
            * contains the same characters but up to the 
            * maximum length, we do this with the method of 
            * the string 'slice' that receives the 
            * beginning and the end.
        */
        Message = Message.slice(0, MaxLength);

    /*
        * Finally we return the message parsed this 
        * by calling the previously imported 
        * and explained function.
    */
    return ParseToFamilyFriendly(Message);
}

/*
    * We export the functions declared in this 
    * file in this way from other parts that contain 
    * the antomy of the source code of the Cinastra
    * server, these functions can be accessed that are 
    * here and in this way have a more modularized and clean 
    * code and easier to enter by What comments is the 
    * least you will lack.
*/
module.exports = { ParseMessage };