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
    ? We begin to destructurize the data of the 
    ? file 'Configuration.json' to access the values ​​
    ? that we need to occupy in this file.
*/
const { MaxLength } = Declarations.Chat.Message;

/*
    * This file is contained within a directory which 
    * will be called 'Security' and how can you tell if 
    * your IQ is not less than 80 the functions that this file 
    * contains correspond to security checks on the client side, this 
    * function of IsMessageIsValid It will check if the 
    * length of the message is greater than the maximum number 
    * of characters that the message should have, this maximum number 
    * of characters for the messages is established in the file 
    * 'Configuration.json' so if you want to change its value you only 
    * have to access That file, the function, as you can see, receives 
    * the message to be verified and it will return a true or false 
    * depending on the number of characters that the received message 
    * has, if it is true the message is invalid and the input of the 
    * same will be marked in red, that is with an 'outline red', otherwise 
    * the input will continue to act normal, that is, it will continue 
    * normal if this returns false, which means that the message is valid.
*/
export const IsMessageInvalid = (Message) => Message.length > MaxLength;