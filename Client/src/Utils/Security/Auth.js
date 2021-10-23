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
    ? Carrying out the import of the 'StringGenerator' 
    ? function, whose function is an algorithm or well 
    ? that sounds very elegant JAJAJ, let's call it a series 
    ? of instructions that will allow generating a random 
    ? string, this function will be used throughout this file, since 
    ? it has What to do with the Auth as its name indicates and is 
    ? to send the server the username without major mishaps, although 
    ? if this is violated nothing happens because the server still 
    ? parses it, then have rodi noob cooder why put this here if you do 
    ? it on the server, well this validation is done here because the 
    ? data once a room is started is saved in the client's 
    ? LocalStorage, then if the data you entered in the authentication 
    ? fields are not parsed here and parsed on the backend there is no way 
    ? I can save them to the LocalStorage from the server unless you make an 
    ? API, so sir I do this here here :).
*/
import { StringGenerator } from '../Algorithms/String';

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
    ? Defining the function that will allow generating 
    ? a default username based on one delivered by 
    ? parameter, this function is used in the implementation 
    ? of the 'QuickSignIn' function. Go to that file if you want 
    ? to know when this function is used, the point that is 
    ? exported for let it be used there, now we go into this function 
    ? to explain each purple magic I do.
*/
export const GenerateRandomUsername = (BaseUsername) => {

    /*
        * To the string that is received as a parameter we will 
        * add a character which is '-', this to separate the base 
        * string that was received with the string that will be 
        * generated to have a random username.
        
        * To give you an idea of ​​how this function 
        * works, let's suppose that our base string (BaseUsername) 
        * has a value of 'Anonymous'. be 'Anonymous' to be 
        * 'Anonymous-', then it will be verified what should 
        * be the maximum length of the username, length established 
        * in the file 'Configuration.json', this to complete the rest of 
        * the string with random characters, for example Suppose that 
        * the maximum number of characters is 14, our string 'Anonymous-' has 
        * 10 characters, the output of this function could be something like 
        * 'Anonymous-7137', 4 characters will be generated for the string 
        * to reach its maximum length and it will be a username random. 
    */
    BaseUsername += '-';

    /*
        * We store in a variable the maximum length of characters 
        * that the username must have, the maximum length of 
        * characters of the username is defined in the file 
        * 'Configuration.json', this value will be used to calculate 
        * the current length of the database base. username and 
        * subtract it with the maximum length so that we would 
        * obtain its difference, difference that will serve to 
        * autocomplete the username with random characters.
    */
    const { MaxLength } = Declarations.Auth.Fields.Username;

    /*
        * We return the base username with the added '-' character 
        * and concatenate it with the output of a random string 
        * whose length will be the difference between the length 
        * of the base string and the maximum number of characters 
        * that the string must contain.
        
        * So depending on how much of the difference will be the 
        * amount of random characters that will be concatenated to 
        * the base username received as a parameter apart from its 
        * concatenation of the '-' character.
    */
    return BaseUsername + StringGenerator(MaxLength - BaseUsername.length);
}

/*
    ? Function that will be used to parse the received 
    ? credentials, this function will be used in the 
    ? implementation of the 'QuickSignIn' feature, this 
    ? data in case you want to see how this function is 
    ? used in the program, this function receives as the 
    ? first parameter the Field to verify together with Its 
    ? value, the Field must be delivered because in this way we 
    ? are going to access its values ​​established in 
    ? 'Configuration.json', we also need its value to parse 
    ? it and make it valid so that a valid value is saved in 
    ? the user's LocalStorage.
*/
export const ParseCredentialValue = (Field, Value) => {
    
    /*
        * We save in a variable the minimum number of characters 
        * together with the maximum number of characters that the 
        * received Field must have as the first parameter, remember 
        * again that we access these values ​​because they are defined 
        * in the 'Configuration.json' file.
    */
    const { MaxLength, MinLength } = Declarations.Auth.Fields[Field];

    /*
        * We check if we really receive a value and this is not 
        * an empty string, in case it is we are going to assign 
        * it a random string whose length will be the maximum 
        * length that the Field should have, the maximum length 
        * that was previously stored in a variable.
    */
    if(!Value)
        Value = StringGenerator(MaxLength);

    /*
        * We save in a variable the length of the received 
        * value, a string that must be sent as the second 
        * parameter to the function, we save it in a variable 
        * because even though JavaScript is not a slow language, it
        * is a process that must be done to count the characters 
        * of the string, then as it will not undergo changes so 
        * that its length is changed, it will be stored in a 
        * variable so that we do not have to do the character counting
        * process over and over again.
    */
    const ValueLength = Value.length;

    /*
        * We make an assignment to the value received as 
        * the second parameter this time we are going to 
        * remove all its blank spaces that the string contains 
        * on the right and left, then with a 'replaceAll' we will 
        * remove all the blank spaces that the string has inside 
        * of it and not to its left or right.
    */
    Value = Value.trim().replaceAll(' ', '');

    /*
        * Now we are going to verify passing the string to 
        * lowercase if this is equal to the string 'room', it 
        * cannot be equal to room because it is a reserved word 
        * that will be used within the chat, if this is true it 
        * will be assigned a set of characters Random by taking 
        * the difference in the length of characters that the string 
        * 'room' has, which are 4, well then it would be the maximum 
        * length that the field must accept subtracted in 4 that will 
        * give the difference to generate random characters.
    */
    if(Value.toLowerCase() === 'room')
        return Value + StringGenerator(MaxLength - 4);

    /*
        * Now we will verify if the length of the string 
        * is less than the minimum amount of characters that 
        * the field must have, an amount previously saved in 
        * a variable, if this condition gives true as a result 
        * we will add random characters to the string where we 
        * will find the difference between the maximum value of 
        * characters that the field must have subtracted with the 
        * current number of characters.
    */
    if(ValueLength < MinLength)
        Value += StringGenerator(MaxLength - ValueLength);
    
    /*
        * Now we will verify if the number of characters that 
        * the received string has is greater than the maximum 
        * number of characters that the field must have, if 
        * this condition is true, what we will do is reassign 
        * the value of the variable that we have received as the 
        * second parameter to them. values ​​but whose maximum length 
        * will be the one established in 'Configuration.json' in the 
        * corresponding Field, we do this with the .slice method 
        * that has the string.
    */
    else if(ValueLength > MaxLength)
        Value = Value.slice(0, MaxLength);

    /*
        * Finally we return the value and all parsed and valid
    */
    return Value;
}

/*
    ? Development of the function that will serve to 
    ? check if a Field is valid or not, the function 
    ? receives as the first parameter the Field to 
    ? verify its validity and as the second parameter 
    ? it receives the value of the field to be verified, this 
    ? function is used in the page of Auth in its Form 
    ? component, to check if the input is valid or not and 
    ? show an alert when it is not and show its color in red, or 
    ? assign the 'outline red' if this function results in 
    ? false indicating that It's not valid.
*/
export const IsFormFieldValid = (Field, Value) => {

    /*
        * Obtaining and saving in a variable the maximum 
        * length and the minimum length that the received 
        * value must have as the second parameter according 
        * to the Field sent as the first parameter, we obtain 
        * these values ​​by accessing the general configuration 
        * of the application where the declaration of this 
        * information is, in the file 'Configuration.json'.
    */
    const { MaxLength, MinLength } = Declarations.Auth.Fields[Field];

    /*
        * Saving in a variable the length of the 
        * value received as the second parameter, this 
        * is because we will need to know its length more 
        * than once and we will have to execute the process 
        * of counting the characters of the string more than 
        * once, to avoid this we save the length of the variable
        * and we run the process only once.
    */
    const ValueLength = Value.length;

    /*
        * Finally we return a Boolean value, this by making 
        * conditions, this function will return true when the 
        * value of the string received as the second parameter 
        * is less than the maximum length that it must have according 
        * to the field, or if the length it has is less than the 
        * minimum amount that it must have the Field.
    */
    return (ValueLength > MaxLength) || (ValueLength < MinLength);
}