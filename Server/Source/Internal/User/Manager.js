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
    ? Importing the methods provided by AuthSecurity 
    ? to be able to have a secure authentication, without 
    ? bugs or other types of attack that may seem 
    ? offensive, also have access to validations.
*/
const AuthSecurity = require('../../Utils/Security/Auth');

/*
    * Creating the object that will serve as a 
    * controller to do different actions with the users
*/
const UserManager = {

    /*
        ? Creating an array that will contain all the 
        ? users that will be connected to the Cinastra 
        ? backend server network.
    */
    Users: [],

    /*
        ? Function to verify that a user exists or not 
        ? in the room, that is why it receives as the 
        ? first parameter the user to find and as the second 
        ? parameter it receives the room in which it 
        ? is desired to search.
    */
    IsExistingUserInRoom(Name, Room){

        /*
            * Returning the search result, true if the 
            * specified user exists in the specified 
            * room, false if it does not exist.
        */
        return this.Users.find(
            (User) => (User.Room === Room) && (User.Name === Name));
    },

    /*
        ? Function that will allow adding a user to 
        ? the list that we have defined previously to 
        ? connect it to the network, it receives as 
        ? the first parameter the identifier, as the second 
        ? parameter the name and as the third parameter 
        ? the room to be connected
    */
    Add({ Identifier, Name, Room }){

        /*
            * We check if the parameter received as 
            * name and the parameter received as room 
            * are not undefined, null or an empty 
            * string, if either of the two are, we return 
            * a ClientError that says that the username and 
            * the room are required.
        */
        if(!Name || !Room)
            return {
                ClientError: 'Username and room are required.'
            };

        /*
            * If the username exists and the room will 
            * also reassign its value to the same but now 
            * parsed, this using the methods provided by the 
            * import performed as 'AuthSecurity' that was 
            * previously explained.
        */
        Name = AuthSecurity.ParseCredentialValue('Username', Name);
        Room = AuthSecurity.ParseCredentialValue('Room', Room);
        
        /*
            * We check if the user exists in the room, we 
            * send the name and the room in which we want 
            * to search, if it exists we return a client 
            * error that will say that the user already 
            * exists in the specified room.
        */
        if(this.IsExistingUserInRoom(Name, Room))
            return {
                ClientError: 'In the room you specified there is already someone with the same username you entered.'
            };

        /*
            * We create an object with the user's data 
            * and then add it to the list of users connected 
            * to the network and then return the object.
        */
        const User = { Identifier, Name, Room };

        /*
            * We add the user to the list that contains 
            * the users connected to the network.
        */
        this.Users.push(User);

        /*
            * We return the user to be able to 
            * access their information.
        */
        return { User };
    },

    /*
        ? By creating the function that will allow 
        ? removing users, the function receives as a 
        ? parameter the identifier of the client socket 
        ? connection, this to eliminate it from the list 
        ? of users connected to the network.
    */
    Remove(Identifier){

        /*
            * Finding the index where the 
            * customer's data is found and then deleting it.
        */
        const Index = this.Users.findIndex(
            (User) => User.Identifier === Identifier);
        
        /*
            * If the index is -1 it means that the user was 
            * not found in the list, therefore it does not exist 
            * or is not connected, otherwise we return the 
            * list without the user.
        */
        if(Index !== -1)
            return this.Users.splice(Index, 1)[0];
    },

    /*
        ? Creating the function that will allow obtaining 
        ? the user object that is in the list with all the users 
        ? connected to the network, the function receives as a 
        ? parameter the identifier of the client socket.
    */
    Get(Identifier){

        /*
            * Performing the search for the client's 
            * socket id, if it exists, its instance will be returned.
        */
        return this.Users.find((User) => User.Identifier === Identifier);
    },

    /*
        ? Function that will allow us to obtain all the 
        ? users connected to a specified room, said room 
        ? will be sent as a parameter to this 
        ? function, within it we will apply a filter to 
        ? the list of users connected to the server.
    */
    GetUsersInRoom(Room){

        /*
            * Performing the filter to obtain the list of 
            * users connected to the room specified as a parameter.
        */
        return this.Users.filter((User) => User.Room === Room);
    },
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
module.exports = UserManager;