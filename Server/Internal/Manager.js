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

const AuthSecurity = require('../Utilities/Security/Auth');

const UserManager = {
    Users: [],
    IsExistingUserInRoom(Name, Room){
        return this.Users.find(
            (User) => (User.Room === Room) && (User.Name === Name));
    },

    Add({ Identifier, Name, Room }){
        if(!Name || !Room)
            return {
                ClientError: 'Username and room are required.'
            };
        Name = AuthSecurity.ParseCredentialValue('Username', Name);
        Room = AuthSecurity.ParseCredentialValue('Room', Room);
        if(this.IsExistingUserInRoom(Name, Room))
            return {
                ClientError: 'In the room you specified there is already someone with the same username you entered.'
            };
        const User = { Identifier, Name, Room };
        this.Users.push(User);
        return { User };
    },

    Remove(Identifier){
        const Index = this.Users.findIndex(
            (User) => User.Identifier === Identifier);
        if(Index !== -1)
            return this.Users.splice(Index, 1)[0];
    },

    Get(Identifier){
        return this.Users.find((User) => User.Identifier === Identifier);
    },

    GetUsersInRoom(Room){
        return this.Users.filter((User) => User.Room === Room);
    },
};

module.exports = UserManager;