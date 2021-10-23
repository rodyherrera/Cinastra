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
    ? We import the 'ReplaceAll' algorithm that will allow 
    ? us to replace characters with another within a string.
*/
const { ReplaceAll } = require('../Algorithms/String');

/* 
    * We import the blocked words that we have 
    * to block when they are detected either in the 
    * username, the name of the room or the messages 
    * that are sent to the room, in this way we can 
    * block them and create a service that is not toxic.
*/
const { BlockedWords } = Declarations.FamilyFriendly;

/*
    ? By creating the function that will allow us to 
    ? protect a message that has been detected 
    ? that contains a blocked word, the function 
    ? receives as the first parameter the blocked 
    ? word to be protected and as the second parameter 
    ? it receives the message where the blocked 
    ? word was detected.
*/
const ReplaceBlockedWord = (BlockedWord, Message) => {

    /*
        * By creating a variable that will 
        * contain the blocked word already protected 
        * with the characters so that some users cannot 
        * guess its meaning, this will not be a variable 
        * of constant type because its value will change 
        * in the execution of the function.
    */
    let FamilyFriendlyWord = BlockedWord;

    /*
        * We make a loop which will repeat the number of 
        * characters that the blocked word has divided in 
        * two, since we are going to replace half of the 
        * blocked word with '*', for example:

        * FamilyFriendlyWord = 'Fool'
        * After cycle: '**ol'
    */
    for(let Iterator = 0; Iterator < BlockedWord.length / 2; Iterator++)

        /*
            * We make the replacement of characters, where 
            * the character to be replaced will be 
            * replaced by '*' and this will be indicated 
            * according to the iterator of the for loop that 
            * will end until the half length that contains the 
            * blocked word is reached.
        */
        FamilyFriendlyWord = 
            FamilyFriendlyWord.substr(0, Iterator) 
            + '*' 
            + FamilyFriendlyWord.substr(Iterator + 1);

    /*
        * We return the message replaced with the 
        * parsed blocked word, also this function is 
        * not case sensitive.
    */
    return ReplaceAll(Message, BlockedWord, FamilyFriendlyWord);
}

/*
    ? Creating the function that will allow parsing 
    ? the message that reaches us as the first parameter 
    ? to family friendly, that is, it is not toxic.
*/
const ParseToFamilyFriendly = (Message) => {
    
    /*
        * Is message undefined?, Ok return
    */
    if(!Message)
        return;

    /*
        * What we will do is take the array that is 
        * in the JSON (Configuration File) and that we 
        * have previously declared, whose array contains 
        * all the blocked words to avoid toxicity, what we 
        * do is that for each word that exists in that 
        * array we will convert it to lowercase and check 
        * if the message also in lowercas contains the 
        * word, if so we will replace it using the function 
        * that we have previously created.
    */
    BlockedWords.forEach((Word) => {

        /*
            * Converting the blocked word to lowercase.
        */
        Word = Word.toLowerCase();

        /*
            * We do the check if the message in lowercase 
            * contains the blocked word, if this will be 
            * true, the message value will be reassigned with 
            * the blocked word current parsed in it.
        */
        if(Message.toLowerCase().includes(Word))

            /*
                * Making the reassignment of the variable 
                * with the message that returns the function 
                * that contains the message already passed 
                * with the blocked word, which is sent as the 
                * first parameter and as the second the message 
                * that we want to parse.
            */
            Message = ReplaceBlockedWord(Word, Message);
    });

    /*
        * After the cycle ends, we will return 
        * the message already parsed and non-toxic.
    */
    return Message;
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
module.exports = { ParseToFamilyFriendly };