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
    ? Importing the security functions that correspond 
    ? to the Chat, in this way we will have access to 
    ? the security functions corresponding to it.
*/
const ChatSecurity = require('../../Utils/Security/Chat');

/*
    ? Importing the functions that we can do with 
    ? the user, adding, deleting, etc.
*/
const UserManager = require('../../Internal/User/Manager');

/*
    ? By creating the function that will allow to 
    ? initialize the Socket server processes, it 
    ? receives its IO (Input / Output) as a parameter, in 
    ? this function the vital process occurs 
    ? so that Cinastra can work.
*/
const SocketProcesses = (IO) => {

    /*
        * In the IO that we receive we will verify that 
        * when a 'connect' is detected from the client 
        * we are going to execute the series of instructions 
        * that are defined in the callback of the same, the 
        * same callback receives a Socket that will serve to 
        * perform actions on it.
    */
    IO.on('connect', (Socket) => {

        /*
            * With the client's Socket that we have received 
            * as a parameter we will add the first 
            * listener, which will be the 'join', we will 
            * define that we will receive two parameters, where 
            * the first will be the User Name and the second the name 
            * of the room to which the user wants connect, as 
            * another parameter we will receive a Callback to 
            * which we will call and we will pass an error 
            * in case the connection that the client makes 
            * causes some kind of inconvenience.
        */
        Socket.on('join', ({ Username, Room }, Callback) => {

            /*
                * We define two constants, one that will be the 
                * ClientError whose value will not be undefined 
                * or null when there is an error, the other constant 
                * will be the username that it has, we will send 
                * it using the user manager to add to the array of 
                * users, sending it the Socket identifier, name and room.
            */
            const { ClientError, User } = UserManager.Add({
                Identifier: Socket.id,
                Name: Username, Room });
                
            /*
                * If the ClientError variable is not undefined, null 
                * or contains an empty string, we will execute the 
                * callback of the function and we will pass the 
                * content of the ClientError variable as a parameter.
            */
            if(ClientError)
                if(!Callback)
                    return;
                else
                    return Callback(ClientError);
    
            /*
                * We indicate the room to the join of the Socket.
            */
            Socket.join(User.Room);
            
            /*
                * We issue a message to the room saying 
                * that the user has joined the specified room.
            */
            Socket.emit('Message', {
                User: 'Room',
                Text: `${User.Name}, welcome to room ${User.Room}.` });
            
            /*
                * We tell other users that the user 
                * has entered the room.
            */
            Socket.broadcast.to(User.Room).emit('Message', {
                User: 'Room',
                Text: `${User.Name} has joined!` });
    
            /*
                * We issue the data of the room that 
                * contains the name of the room and 
                * the users that exist in it.
            */
            IO.to(User.Room).emit('RoomData', {
                Room: User.Room,
                Users: UserManager.GetUsersInRoom(User.Room) });
            
            /*
                * We execute the callback without sending 
                * a parameter since no error occurred.
            */
           if(Callback)
              Callback();
        });
    
        /*
            * When the user wants to send a message, the 
            * instructions defined here will be 
            * executed, we will receive the message and a 
            * callback as parameters.
        */
        Socket.on('SendMessage', (Message, Callback) => {
            
            /*
                * We obtain the user and save it in a 
                * constant, the user is obtained through 
                * the identifier that the Socket has.
            */
            const User = UserManager.Get(Socket.id);

            /*
                * We check if the user is null, undefined 
                * or an empty string, in this way we 
                * disconnect it from the socket server and return.
            */
            if(!User){
                Socket.disconnect();
                return;
            }

            /*
                * We issue the message to the room, we send 
                * the User who will be the issuer and as a 
                * second parameter we send the text which we 
                * parse it using the previously imported and 
                * explained security methods provided 
                * by 'ChatSecurity'.
            */
            IO.to(User.Room).emit('Message', {
                User: User.Name,
                Text: ChatSecurity.ParseMessage(Message) });
                    
            /*
                * We execute the callback, we do not 
                * send any parameter because no error 
                * has occurred.
            */

            if(Callback)
               Callback();
        });
    
        /*
            * When the user wants to disconnect, this 
            * series of instructions will be executed
        */
        Socket.on('disconnect', () => {

            /*
                * We obtain the user and save it in a 
                * constant, the user is obtained through 
                * the identifier that the Socket has.
            */
            const User = UserManager.Remove(Socket.id);
            
            /*
                * We check if the user is not undefined, null 
                * or an empty string to execute another 
                * series of instructions.
            */
            if(User){
                
                /*
                    * We issue a message to all 
                    * users in the room that the user has left.
                */
                IO.to(User.Room).emit('Message', {
                    User: 'Room',
                    Text: `${User.Name} has left.` });
                
                /*
                    * Now we update the information 
                    * of the room, with the new users
                */
                IO.to(User.Room).emit('RoomData', {
                    Room: User.Room,
                    Users: UserManager.GetUsersInRoom(User.Room) });
            }
        });
    });
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
module.exports = SocketProcesses;