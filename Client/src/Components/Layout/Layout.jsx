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
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal';
import { RiGithubLine, RiLockPasswordLine } from 'react-icons/ri';
import * as Declarations from '../../Infrastructure.json';
import './Layout.css';

const Layout = () => {
    const Routes = Declarations.Routes;
    const { Repository, Author } = Declarations.Cinastra;

    return (
        <>
            <Fade clear>
                <header>
                    <Link to={Routes.Auth}>
                        <h1>Cinastra</h1>
                    </Link>

                    <nav>
                        <ul className='Header-Navegation-Links-Container'>
                            <li>
                                <Link to={Routes.Agreement} title='Terms and conditions'>
                                    <i className='Header-Icon'>
                                        <RiLockPasswordLine />
                                    </i>
                                </Link>
                            </li>
                                        
                            <li>
                                <a title='Click for view Cinastra in Github' href={Repository} target='_blank' rel='noopener noreferrer'>
                                    <i className='Header-Icon'>
                                        <RiGithubLine />
                                    </i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
            </Fade>
            
            <Outlet />

            <Fade clear>
                <footer>
                    <p>Made with love by 
                        <a href={Repository} target='_blank' rel='noopener noreferrer'>
                            <span className='Non-Trim-Left'>{Author}</span>
                        </a>
                    </p>
                </footer>
            </Fade>
        </>
    );
};

export default Layout;