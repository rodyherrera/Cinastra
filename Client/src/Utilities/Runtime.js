import { StringGenerator } from './Algorithms';
import * as Declarations from '../Infrastructure.json';
const { MaxLength } = Declarations.Chat.Message;

export const GenerateRandomUsername = (BaseUsername) => {
    BaseUsername += '-';
    const { MaxLength } = Declarations.Auth.Fields.Username;
    return BaseUsername + StringGenerator(MaxLength - BaseUsername.length);
}

export const ParseCredentialValue = (Field, Value) => {
    const { MaxLength, MinLength } = Declarations.Auth.Fields[Field];
    if(!Value)
        Value = StringGenerator(MaxLength);
    const ValueLength = Value.length;
    Value = Value.trim().replaceAll(' ', '');
    if(Value.toLowerCase() === 'room')
        return Value + StringGenerator(MaxLength - 4);
    if(ValueLength < MinLength)
        Value += StringGenerator(MaxLength - ValueLength);
    else if(ValueLength > MaxLength)
        Value = Value.slice(0, MaxLength);
    return Value;
}

export const IsFormFieldValid = (Field, Value) => {
    const { MaxLength, MinLength } = Declarations.Auth.Fields[Field];
    const ValueLength = Value.length;
    return (ValueLength > MaxLength) || (ValueLength < MinLength);
}

export const IsMessageInvalid = (Message) => Message.length > MaxLength;