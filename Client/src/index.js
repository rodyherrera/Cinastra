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

import React from 'react';
import ReactDOM from 'react-dom';

/*
    ? Importing tools that will improve the user 
    ? experience when using our application, tools 
    ? such as ServiceWorker and ReportWebVitals, both 
    ? explained later, read on.
*/
import * as ServiceWorkerRegistration from './Utils/Client/PWA/ServiceWorkerRegistration';
import ReportWebVitals from './Utils/Client/PWA/ReportWebVitals';

/*
    * We import the file that will allow to load the 
    * application depending on the user's path, something 
    * like a Router, this is not called Router because it 
    * has other functionalities inside and I would 
    * not like to call it that.
*/
import Application from './Utils/Application';

/*
    * This is the file that will be called when 
    * starting the application, that is why the 
    * import of the general styles that will be used 
    * throughout the development of the application is done.
*/
import './Assets/StyleSheet/General.css';

/*
    ? Initializing the rendering of the application, the 
    ? function receives the Application, which is responsible 
    ? for redirecting by routes as indicated by the client's 
    ? path, in addition to making some listeners to improve the 
    ? user experience, as a second parameter it receives the document 
    ? node in which The application will load, it is a bad practice 
    ? to use the body but I use it because Cinastra uses Semantic 
    ? HTML and it is something ridiculous to put everything in a div...
*/
ReactDOM.render(<Application />, document.getElementsByTagName('body')[0]);

/*
    * From the ServiceWorker registration so that 
    * the customer can get a better user 
    * experience, we give him an unregister.
*/
ServiceWorkerRegistration.unregister();

/*
    ? We initialize WebVitals, WebVitals is a tool that allows 
    ? you to analyze any web page based on three common 
    ? metrics with the aim that probesional marketing developers 
    ? and business owners can study them and optimize the user experience.
*/
ReportWebVitals();