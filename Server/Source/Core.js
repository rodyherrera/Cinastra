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
    ? Next, the methods will be saved in variable 
    ? of constant type provided by the libraries 
    ? that you want to import to develop the 
    ? Backend server of our service.
*/
const Http = require('http');
const Express = require('express');
const SocketIO = require('socket.io');
const Router = require('./Network/Router');

/*
    ? Next, the methods of the mini libraries that 
    ? are defined in the antomy of the server's source 
    ? code and are not external will be saved.
*/
const SocketProcesses = require('./Network/Socket/Processes');
const Helpers = require('./Internal/Helpers');

/*
    ? We obtain the configuration of the server that can 
    ? be auto generated with values defined in the configuration 
    ? file that has the source code of the server, or can be 
    ? established by passing them as an argument when the 
    ? server is started.
*/
const ServerConfig = Helpers.GetServerConfig();

/*
    ? Now we will declare the variables that will serve 
    ? as instances to be able to be manipulated 
    ? in other parts of our software.
*/
const Application = Express();
const Server = Http.createServer(ServerConfig.SSL, Application);
const IO = SocketIO(Server, {
    cors: {
        origin: '*'
    }
});

/*
    ? We make our Express application use the 
    ? Router that we imported previously.
*/
Application.use(Router);

/*
    ? We initialize the server processes on which 
    ? our messaging application will depend, we 
    ? pass as a parameter the IO (Input / Output) that 
    ? we have instantiated previously.
*/
SocketProcesses(IO);

/*
    ? We start the server, we indicate as the first 
    ? parameter the configuration that we have loaded for the 
    ? server and as the second parameter the callback that 
    ? is executed when the server is started.
*/
Server.listen(ServerConfig, () => {

    /*
        ? The console is cleaned, this because next, that 
        ? is, after this instruction we will show a message 
        ? and in this way we will do it cleanly.
    */
    console.clear();
    console.log(`
 /> Cinastra Messenger.
    > Developed by ${ServerConfig.Cinastra.Author}
    > ${ServerConfig.Cinastra.Repository}
    > ${ServerConfig.Cinastra.Mail}
 
 /> Backend Server initialized successfully.
    
    * (( ${ServerConfig.hostname}:${ServerConfig.port} ))
`)});