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

const Declarations = JSON.parse(require('fs').readFileSync('./Infrastructure.json'));
const FileSystem = require('fs');

const ArgumentsParser = () => {
    const Arguments = process.argv;
    let ParsedArguments = {};
    Arguments.forEach((Argument => {
        Argument = Argument.toLowerCase();
        const WayOne = Argument.includes('=');
        const WayTwo = Argument.includes('::');
        if(WayOne || WayTwo){
            const Data = Argument.split((WayOne) ? '=' : '::');
            ParsedArguments[Data[0]] = Data[1];
        }
    }));
    return ParsedArguments;
};

const GetServerConfig = () => {
    const ParsedArguments = ArgumentsParser();
    const ServerConfig = Declarations.Server;
    const SSLConfig = Declarations.SSL;
    const SSL = {};

    if(FileSystem.existsSync(SSLConfig.Cert) && FileSystem.existsSync(SSLConfig.Key)){
        SSL.cert = FileSystem.readFileSync(SSLConfig.Cert);
        SSL.key = FileSystem.readFileSync(SSLConfig.Key);
    }

    return {
        hostname: ParsedArguments.hostname || ServerConfig.DefaultHostname,
        port: ParsedArguments.port || ServerConfig.DefaultPort,
        Cinastra: Declarations.Information,
        SSL
    };
};

module.exports = { GetServerConfig };
