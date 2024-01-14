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

import * as Declarations from '../../Infrastructure.json';
import './Alert.css';
const { Colors, Style } = Declarations.Components.Alert;

const AlertNodeID = 'Generic-Alert-Container';

const GetBorderColor = (AlertType) => {
    switch(AlertType.toLowerCase()){
        case 'success':
            return Colors.Success;
        case 'error':
            return Colors.Error;
        case 'information':
            return Colors.Information;
        default:
            return Colors.Default;
    }
}

export const RemoveAlertIfExists = (Identifier = undefined) => {
    const MaybeAlertNodeExists = document.getElementById(AlertNodeID);

    if(MaybeAlertNodeExists)
        if(Identifier)    
            if(MaybeAlertNodeExists.getAttribute('Identifier') === Identifier)
                MaybeAlertNodeExists.remove();
        else    
            MaybeAlertNodeExists.remove();
}

export const Alert = ({ Message, Type = '', Time = 3500, Identifier = undefined }) => {
    const BodyNode = document.getElementsByTagName('body')[0];

    RemoveAlertIfExists();

    const AlertContainer = document.createElement('section');
    const AlertMessageContainer = document.createElement('article');
    const AlertMessage = document.createElement('p');

    AlertContainer.id = AlertNodeID;

    if(Identifier)
        AlertContainer.setAttribute('alert-identifier', Identifier);

    AlertMessageContainer.style.borderLeft = 
        `${Style.BorderWidth} ${Style.BorderStyle} ${GetBorderColor(Type)}`;

    AlertMessage.innerHTML = Message;

    AlertMessageContainer.appendChild(AlertMessage);
    AlertContainer.appendChild(AlertMessageContainer);

    BodyNode.appendChild(AlertContainer);

    setTimeout(() => {
        AlertContainer.remove();
    }, Time);
}