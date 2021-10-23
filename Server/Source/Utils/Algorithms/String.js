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
    ? Creating a function that will allow 
    ? us to generate a string with random 
    ? characters, the function can receive parameters 
    ? but they are optional, the first corresponds 
    ? to the length of the generated string, and 
    ? the second corresponds to the alphabet that 
    ? will be used to generate the string.
*/
const StringGenerator = (
    Length = 8, 
    Characters = '123456789abcdefABCDEF') => 
{
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

/*
    ? Creating the function that will allow us 
    ? to replace characters regardless of whether 
    ? it is uppercase or lowercase, receives the 
    ? string to replace as the first parameter, the 
    ? second parameter that we want to replace and 
    ? the third parameter that we want to replace it with.
*/
const ReplaceAll = (Str, Replace, Replacement) => {

    /*
        * Green magic.
    */
    const Escape = Replace.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    const RegExpStr = new RegExp(Escape, 'ig');
    return Str.replace(RegExpStr, Replacement);
};

/*
    * We export the functions declared in this 
    * file in this way from other parts that contain 
    * the antomy of the source code of the Cinastra
    * server, these functions can be accessed that are 
    * here and in this way have a more modularized and clean 
    * code and easier to enter by What comments is the 
    * least you will lack.
*/
module.exports = { StringGenerator, ReplaceAll };
