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

const { ParseToFamilyFriendly } = require('./FamilyFriendly');
const { StringGenerator, ReplaceAll } = require('../Algorithms/String');
const Declarations = JSON.parse(require('fs').readFileSync('./Infrastructure.json'));

const ParseCredentialValue = (Field, Value) => {
    const { MaxLength, MinLength } = Declarations.Auth.Fields[Field];
    if(!Value)
        Value = StringGenerator(MaxLength);
    Value = ReplaceAll(Value.trim(), ' ', '');
    const ValueLength = Value.length;
    if(Value.toLowerCase() === 'room')
        Value = StringGenerator(MaxLength - 4);
    if(ValueLength < MinLength)
        Value += StringGenerator(MaxLength - ValueLength);
    else if(ValueLength > MaxLength)
        Value = Value.slice(0, MaxLength);
    return ParseToFamilyFriendly(Value);
}

module.exports = { ParseCredentialValue };