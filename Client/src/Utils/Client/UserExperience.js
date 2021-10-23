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
    ? Imported from React's Hooks tool, useEffect is 
    ? generally used for the initialization of variables 
    ? called APIs or to clean up a component before unmounting 
    ? it from the DOM. It is the functional equivalent of 
    ? componentDidMount, componentDidUpdate, and componentWillUnmount 
    ? in class components, we will use useEffect in functions that will 
    ? be used as components in this file.
*/
import { useEffect } from 'react';

/*
    ? By importing 'withRouter' from 'react-router-dom', 
    ? withRouter is a higher order component that will pass 
    ? the closest match, current location and history props 
    ? routes to the wrapped component every time it is 
    ? processed. Simply connect the component to the router, we 
    ? make use of this function, for example in the implementation 
    ? of the 'ScrollToTop' function, a component that will be used 
    ? so that when loading a page it is always initialize 
    ? the scroll at its top.
*/
import { withRouter } from 'react-router';

/*
    ? Declaration of the ScrollToTop function, this 
    ? function is used in 'Application.js' file defined 
    ? in the 'Utils' folder within the 'src' of the 
    ? source code, this function using useEffect will be 
    ? executing a series of instructions that will allow 
    ? each time it is detects a change in the client's 
    ? path, a scroll is made to the top of the page, with 
    ? this we will avoid that every time the user changes 
    ? pages depending on their current scroll, the new page 
    ? is loaded in different sections and not at the top, It 
    ? may be loaded in the middle, at the bottom, but with this 
    ? function we will make it always load at the top, the function 
    ? receives two parameters where the first is the 'children', this 
    ? because this will be used as a component, it is for Because 
    ? we use the withRouter function, it will also receive the 
    ? JavaScript location object together with its pathname to 
    ? make the listener of the client's path change and in this 
    ? way make it always be at the top of the page.
*/
export const ScrollToTop = withRouter( ({ children, location: { pathname } }) => {

    /*
        * With the help of useEffect we will detect 
        * when the client's path is changed, in this 
        * way we will make the scroll to the top of 
        * the requested page be made.
    */
    useEffect(() => 

        /*
            * Using the window.scrollTo method we do 
            * the magic, the function receives an object 
            * in which we indicate as the first parameter 
            * the top that the scroll will have, as the ScrollToTop 
            * function says, the value of the top will be at 
            * 0, indicating that it will be in the position 
            * initial, that is, at the top of the page, we will 
            * indicate the scroll left as a parameter as 0, which 
            * refers to the overflow-x and finally we will indicate 
            * the behavior that the scroll will have, in this case 
            * we tell it that the scroll is smooth, and would.
        */
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        }), [pathname]);

    /*
        * Finally we will return the child nodes 
        * that this component contains, if it does 
        * not contain any component, a null value will be returned.
    */
    return children || null;
});