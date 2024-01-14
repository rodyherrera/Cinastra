/***
 * Copyright (C) Rodolfo Herrera Hernandez. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project root 
 * for full license information.
 *
 * =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+
 *
 * For related information - https://github.com/rodyherrera/Cinastra/
 * 
 * =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 ****/

const Http = require('http');
const Https = require('https');
const Express = require('express');
const SocketIO = require('socket.io');
const Router = require('./Network/Router');

const SocketProcesses = require('./Network/Processes');
const Helpers = require('./Internal/Helpers');

const ServerConfig = Helpers.GetServerConfig();

const Application = Express();

let Server;

if(ServerConfig.SSL.cert && ServerConfig.SSL.key)
    Server = Https.createServer(ServerConfig.SSL, Application);
else
    Server = Http.createServer(Application);


const IO = SocketIO(Server, {
    cors: {
        origin: '*'
    }
});

Application.use(Router);
SocketProcesses(IO);

Server.listen(ServerConfig, () => {
    console.clear();
    console.log(`
 /> Cinastra Messenger.
    > Developed by ${ServerConfig.Cinastra.Author}
    > ${ServerConfig.Cinastra.Repository}
    > ${ServerConfig.Cinastra.Mail}
 
 /> Backend Server initialized successfully.
    
    * (( ${ServerConfig.hostname}:${ServerConfig.port} ))
`)});
