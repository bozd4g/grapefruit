import React from 'react';
import Container from '../Component/Container.jsx'


export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div style={{backgroundColor: global.primaryColor, height: '100%'}}>
            what's happening?
            </div>
        );
    }
}