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

import React from 'react';
import ReactDOM from 'react-dom';
import ReportWebVitals from './ReportWebVitals';
import Application from './Application';
import ScrollToTop from './Components/ScrollToTop';
import { BrowserRouter } from 'react-router-dom';
import { MultiProvider } from 'react-pendulum';
import { QuickSignInProvider } from './Services/QuickSignIn/Context';
import * as ServiceWorkerRegistration from './ServiceWorkerRegistration';
import './Assets/StyleSheet/General.css';

ReactDOM.render(
    <MultiProvider
        providers={[
            <BrowserRouter />,
            <ScrollToTop />,
            <QuickSignInProvider />
        ]}
    >
        <Application />
    </MultiProvider>,
    document.getElementById('Cinastra-Root')
);

ServiceWorkerRegistration.register();
ReportWebVitals();