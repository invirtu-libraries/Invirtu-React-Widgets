import React, { useEffect } from 'react';

import useScript from '../../util/useScript';
import Config from '../../constants/Config';
import Widgets from '../../util/Widgets';
import WidgetOptions from '../../interfaces/WidgetOptions';

const Broadcasting = ({id, auth_token} : WidgetOptions) => {

    useScript(Config.connector_script, Config.connector_script_id);

    let current_widget = document.getElementById(id);

    if(current_widget) {
        
        let parent = current_widget.parentNode;
        
        if(parent) {
            parent.removeChild(current_widget);
        }
    }

    const widget = React.createElement('bw:widget', { type: 'broadcast', id: id })

    setTimeout(() => {
        Widgets.loadWidgets();
    }, 1500);

    useEffect(() => {

        let script = document.getElementById(Config.connector_script_id) as HTMLElement | null;

        if(script){

            script.addEventListener('load', () => {

                //Ensure the conector has been loaded
                Widgets.init(auth_token);

                //Reload the widgets if it hasn't be done already
                Widgets.loadWidgets();
            });

            //Double checking for loaded
            setTimeout(() => {
                Widgets.loadWidgets();
            }, 5000);
        }

    })

    return (
        <>
            {widget}
        </>
    )
}

export default Broadcasting;