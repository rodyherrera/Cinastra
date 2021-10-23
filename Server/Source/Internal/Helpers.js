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
const FileSystem = require('fs');

/*
    ? Creating the function that will allow 
    ? parsing the arguments with which the 
    ? server was called.
*/
const ArgumentsParser = () => {

    /*
        * We save in a variable the arguments 
        * with which the server was executed.
    */
    const Arguments = process.argv;

    /*
        * We create an object to store the 
        * data we want to capture.
    */
    let ParsedArguments = {};

    /*
        * Now for each argument with which the server 
        * was called, let's do a foreach to execute a 
        * series of instructions.
    */
    Arguments.forEach((Argument => {
        
        /*
            * We reassign the value of the argument that we 
            * are receiving in the callback to it but in lowercase.
        */
        Argument = Argument.toLowerCase();

        /*
            * We are going to have two ways to receive 
            * arguments, the first will be using '=' as an allocator 
            * and the second will be using '::' as an allocator.

            ? Examples:

            ? npm start hostname::0.0.0.0 port::8000

            ? npm start hostname = 0.0.0.0 port = 8000
        */
        const WayOne = Argument.includes('=');
        const WayTwo = Argument.includes('::');

        /*
            * We check if either of the two is NOT a null 
            * defined or an empty string in this way we 
            * will execute a series of instructions.
        */
        if(WayOne || WayTwo){
            
            /*
                * We create a variable that will contain the 
                * key and the value according to the method 
                * that was detected for the parameter that we want 
                * to save in the variable 'ParsedArguments'
            */
            let Data;

            /*
                * If the way one (=) is detected, the received 
                * argument will be split into two parts when the 
                * '=' character is detected, where the index 0 will 
                * correspond to the name of the parameter and the 
                * index 1 will correspond to the value of the parameter.
            */
            if(WayOne)
                Data = Argument.split('=');

            /*
                * The same as the above, nothing more than 
                * if it is not way one (=) it will be way two (::)
            */
            else
                Data = Argument.split('::');

            /*
                * We store in a variable the identifier or name 
                * of the parameter, which will correspond to the 0 
                * index of the array.
            */
            const Identifier = Data[0];

            /*
                * Saving in another variable the value of the 
                * identifier or name of the parameter of the 
                * index 0, the value of the parameter will be 
                * in the index 1.
            */
            const Value = Data[1];

            /*
                * Saving the information in the object, where 
                * the key will be the identifier and its value 
                * will be the value.
            */
            ParsedArguments[Identifier] = Value;
        }
    }));

    /*
        * We return the arguments <3
    */
    return ParsedArguments;
};

/*
    ? Creating the function to obtain the server 
    ? configuration starting with the configuration 
    ? defined in the configuration file or by parameters 
    ? sent to the server call.
*/
const GetServerConfig = () => {

    /*
        * Saving in a variable the arguments parsed 
        * with which the server was called, this to 
        * capture some data if it exists or load the 
        * default ones defined in the configuration file.
    */
    const ParsedArguments = ArgumentsParser();

    /*
        * Saving in another variable the default configuration 
        * in case the parameters expected when calling 
        * the server do not appear.
    */
    const ServerConfig = Declarations.Server;

    const SSLConfig = Declarations.SSL;

    const SSL = {};

    if(FileSystem.existsSync(SSLConfig.Cert) && FileSystem.existsSync(SSLConfig.Key)){
        SSL.Cert = FileSystem.readFileSync(SSLConfig.Cert);
        SSL.Key = FileSystem.readFileSync(SSLConfig.Key);
    }

    /*
        * We return an object with the data.
    */
    return {
        hostname: ParsedArguments.hostname || ServerConfig.DefaultHostname,
        port: ParsedArguments.port || ServerConfig.DefaultPort,
        Cinastra: Declarations.Information,
        SSL
    };
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
module.exports = { GetServerConfig };
