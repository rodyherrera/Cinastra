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
    ? Creating the 'StringGenerator' function that will allow 
    ? the generation of a set of random characters which will 
    ? be used a lot throughout the execution of Cinastra, the 
    ? function receives as the first parameter the length of 
    ? the string that you want to generate, which by default 
    ? is 8 and as a second parameter, it receives the characters 
    ? that you want to use to generate the string that is also 
    ? established by default.
*/
export const StringGenerator = (Length = 8, Characters = '123456789abcdefABCDEF') => {

    /*
        * Creating a variable that will serve as a 
        * temporary variable, I like to call it 
        * Buffer, this variable will have our generated 
        * string, which will be returned with it, this 
        * variable is manipulated within the for loop where 
        * the generation of our string is done.
    */
    let Buffer = '';

    /*
        * Creating a for loop that will generate 
        * each character in the string, that 
        * is, if the default value of the string 
        * is 8, the for loop will give 8 cycles to 
        * generate each character until reaching the 
        * length that was established as a parameter.
    */
    for(let Iterator = 0; Iterator < Length; Iterator++)

        /* 
            * Equating to the buffer a random character 
            * from the set that was established as the second 
            * parameter, be it a custom one or the one 
            * established by default, it is for that reason that 
            * the Buffer variable is of type let, that is, its 
            * value will not be constant.
        */  
        Buffer += Characters.charAt(Math.floor(Math.random() * Length));
    
    /*
        * Finally we return our Buffer variable 
        * that contains the random string.
    */
    return Buffer;
}