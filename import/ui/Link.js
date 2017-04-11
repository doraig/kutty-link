/**
 * Created by ezaiuud on 4/10/2017.
 */

import React from 'react';
import { browserHistory } from 'react-router'

export default class Link extends React.Component {

    render() {
        return (
            <div>
            <p>Link component here</p>
            <button onClick={() => browserHistory.push('/')}>Logout</button>
            </div>
        );
    }
};
