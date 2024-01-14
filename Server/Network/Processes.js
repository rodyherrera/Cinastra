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

const ChatSecurity = require('../Utilities/Security/Chat');
const UserManager = require('../Internal/Manager');

const SocketProcesses = (IO) => {
    IO.on('connect', (Socket) => {
        Socket.on('join', ({ Username, Room }, Callback) => {
            const { ClientError, User } = UserManager.Add({
                Identifier: Socket.id,
                Name: Username, Room });
            if(ClientError)
                if(!Callback)
                    return;
                else
                    return Callback(ClientError);
            Socket.join(User.Room);
            Socket.emit('Message', {
                User: 'Room',
                Text: `${User.Name}, welcome to room ${User.Room}.` });
            Socket.broadcast.to(User.Room).emit('Message', {
                User: 'Room',
                Text: `${User.Name} has joined!` });
            IO.to(User.Room).emit('RoomData', {
                Room: User.Room,
                Users: UserManager.GetUsersInRoom(User.Room) });
            (Callback) && (Callback());
        });
    
        Socket.on('SendMessage', (Message, Callback) => {
            const User = UserManager.Get(Socket.id);
            if(!User){
                Socket.disconnect();
                return;
            }
            IO.to(User.Room).emit('Message', {
                User: User.Name,
                Text: ChatSecurity.ParseMessage(Message) });
            (Callback) && (Callback());
        });
    
        Socket.on('disconnect', () => {
            const User = UserManager.Remove(Socket.id);
            if(User){
                IO.to(User.Room).emit('Message', {
                    User: 'Room',
                    Text: `${User.Name} has left.` });
                IO.to(User.Room).emit('RoomData', {
                    Room: User.Room,
                    Users: UserManager.GetUsersInRoom(User.Room) });
            }
        });
    });
}

module.exports = SocketProcesses;