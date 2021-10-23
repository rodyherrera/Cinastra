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
    ? We import the function that will allow us 
    ? to make our message FamilyFriendly, in this 
    ? way we make sure that the string we want 
    ? to verify is not offensive to some glass people.
*/
const { ParseToFamilyFriendly } = require('./FamilyFriendly');

/*
    ? We import the 'ReplaceAll' algorithm that will allow 
    ? us to replace characters with another within a string.
    
    ? We import the 'StringGenerator' algorithm that 
    ? clearly if your IQ is NOT less than 70 you can 
    ? realize that it is to generate a random string.
*/
const { StringGenerator, ReplaceAll } = require('../Algorithms/String');

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
    ? Creating the function that will allow 
    ? parsing the credentials that we receive, here 
    ? we refer to the username and the name of the 
    ? room, the function receives two parameters where 
    ? the first is the field we are talking about 
    ? and the second the value of it.
*/
const ParseCredentialValue = (Field, Value) => {
    
    /*
        * We create two variables that we will obtain 
        * from our configuration file that contains 
        * definitions that we will use throughout the 
        * anatomy of the Server source code, we obtain 
        * the maximum length of characters and minimum 
        * length of characters of the field that we have 
        * received as a parameter.
    */
    const { MaxLength, MinLength } = Declarations.Auth.Fields[Field];

    /*
        * We check if the value we have received as 
        * the second parameter is undefined, null or 
        * an empty string, in this way we are going to 
        * reassign the value of the variable with random 
        * characters whose length will be the maximum number 
        * of characters that the field accepts
    */
    if(!Value)

        /*
            * Making the reassignment of the variable 
            * generating random characters whose maximum 
            * length will be the previously 
            * defined and explained.
        */
        Value = StringGenerator(MaxLength);

    /*
        * Replacing all the blank spaces that the string has.
    */
    Value = ReplaceAll(Value.trim(), ' ', '');

    /*
        * We will also save in a constant the length 
        * that contains our value that we have received 
        * as the second parameter, this since we will need 
        * to know the length more than once and it is a 
        * process that JavaScript must do of the character 
        * count, so that it only does it once. we will save 
        * in a variable.
    */
    const ValueLength = Value.length;

    /*
        * We will verify if the lowercase value parameter 
        * is equal to 'room', room is a reserved word 
        * therefore what we will do is return the value with 
        * random characters whose length will be the value of 
        * the maximum length variable that the field accepts 
        * decreased by 4 that are the number of characters 
        * contained in the string 'room'
    */
    if(Value.toLowerCase() === 'room')

        /*
            * Reassign the value with the auto generated string.
        */
        Value = StringGenerator(MaxLength - 4);
    
    /*
        * We check if the number of characters 
        * that the string has is less than the 
        * minimum number of characters that the 
        * field must accept, in this way we can auto 
        * generate characters so that the string is valid.
    */
    if(ValueLength < MinLength)
        Value += StringGenerator(MaxLength - ValueLength);
    
    /*
        * We check if the length of the string is 
        * greater than the maximum length that the 
        * field can accept, if so, with the help of a 
        * slice, we will reassign the variable up to the 
        * maximum length that the field accepts.
    */
    else if(ValueLength > MaxLength)
        Value = Value.slice(0, MaxLength);

    /*
        * We return the message with the offending words parsed.
    */
    return ParseToFamilyFriendly(Value);
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
module.exports = { ParseCredentialValue };