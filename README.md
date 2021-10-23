# Cinastra
#### Private, anonymous and temporary messaging for everyone

Cinastra is a private and temporary messaging web service that allows you to interact with people around the world through rooms, you can create the rooms that you want in an unlimited way and with unlimited users within them, everything that is spoken will not be saved in the cloud or in some database, everything is stored at runtime.

### Features
- High privacy
- Runtime storage
- Unlimited room creation
- Family friendly system
- Highly customized alerts and messages for the user
- Responsive design that fits up to a small 320px wide screen
- Supports sending emojis by chat
- Source code commented and explained
- Loading screens and more!

### Installation
To install and run this software without problems you will need to do the installation `step by step`, take some time and read the installation process in detail, this because `you will have to apply a small configuration that will be to tell the client the address of the server to the one to connect`.

```bash
# Cloning the repository
git clone https://github.com/CodeWithRodi/Cinastra/
# Accessing the generated directory
cd Cinastra
# Accessing the client's source code directory and installing the nodes_modules
cd Client && npm install
# Accessing the server directory and installing the node_modules
cd ../Server && npm install
```

Once you have installed the node_modules from the client and server source code, `we can move on to the next section that pertains to the configuration so that you can correctly mount the services`.

### Configuring the Server application
Inside the repository directory there is the `Server folder`, where it has a `.json file that is called Configuration`, this file contains statements that will be used throughout the execution of the server, in this file you must `configure the address where you want the server is running`, where you must declare the hostname and port of the same, by `default the hostname is '0.0.0.0' and the port is 6500`, you can modify them to your need, the file would be something like this:

```bash
"Server": {
    "DefaultHostname": "0.0.0.0",
    "DefaultPort": 6500
}
```

If you do not want to apply the configuration of the server address statically you can set it every time you run the server, this passing it as an argument to call, clearly for this you have to be inside the Server directory.

```bash
npm start port::6500 hostname::0.0.0.0
# Or
npm start port=6500 hostname=0.0.0.0
```
In the configuration file mentioned above there are other statements that will be used throughout the execution of the program, I invite you to look at the source code, it is all documented and you can see how they work and interact with the configuration file.

### Configuring the Client application
It is time to give the last touch to start our messaging application, we must start the client application, but `the client application does NOT know which is the address of the server` to which it has to connect to start interacting with the Socket, it is That is why the client application also contains a `configuration file, this is located inside its directory, in the 'src' folder`, therefore you must enter the Client directory, then the src directory and then open the `Configuration.json` file , in which you will find a key called `"Backend"` which has another called `"Server"` that must have as value `the address of the server that was previously established`, this should look something like this:
```bash
"Backend": {
    "Server": "http://0.0.0.0:6500/",
    "ConnectionTimeOut": 10000
}
```

`Where "Server" should have the same address that has been defined previously in the server configuration file` or the address that is assigned using arguments.

If you notice inside the Client folder you have an .env file, which contains the `PORT where you want the ReactJS application to run, by default it is 5500.`

Finally, you will notice that the client configuration file is also extensive, the source code is all documented so that you can visualize and learn from it and see how one thing interacts with the other.

### Starting the application
You should open two consoles, one to initialize the client's server and the other to initialize the server.
```bash
# (IN THE ROOT DIRECTORY)
cd Client && npm start
```

Now on the other console
```bash
# (IN THE ROOT DIRECTORY)
cd Server && npm start
```

The servers should be initialized so that if you access the React application server you could already be viewing content and if the server has loaded you can start using the application.

### Using SSL
##### Not tested
If you want to use SSL certificate both on the server or on the client in this section we will explain how to do it, inside the Client folder there is a file called .env, which contains statements that the server will use, where is `HTTPS`, `SSL_CRT_FILE` and `SSL_KEY_FILE` which you must complete according to the address of those files in the anatomy of the client's source code, for example:

```bash
# (IN .env file of Client folder)
HTTPS = true
SSL_CRT_FILE = MyCertFile.pem
SSL_KEY_FILE = MyKeyFile.pem
```

For the server it is quite similar, the only thing you have to do is go to the configuration file that is located at the root of the `'Server'` directory and look for where it says `"SSL"`, where it has two fields, one called "Cert" and the other `Key`. "which you must complete so that the SSL of the backend server can be done, for example:

```bash
"SSL": {
    "Cert": "MyCertFile.pem",
    "Key": "MyKeyFile.pem"
}
```
and you could now npm start both the client server and the server with your SSL configuration!

### Contributions
Cinastra was only created to test my skills with these technologies, it is expected that updates are reviewed for good, you are free to do with the code and do something much better or contribute to it.

### Remember to drink water bby.
