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
const { ParseToFamilyFriendly } = require('./FamilyFriendly');

const { MaxLength } = Declarations.Chat.Message;

const ParseMessage = (Message) => {
    if(Message.length > MaxLength)
        Message = Message.slice(0, MaxLength);
    return ParseToFamilyFriendly(Message);
}

module.exports = { ParseMessage };