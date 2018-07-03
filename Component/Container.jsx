import React from 'react';

export default class Container extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        var container = {
            height: '100%',
            width: '100%',
            backgroundColor: this.props.backgroundColor
        }

        return(
            <div style={container}>
                {this.props.children}
            </div>
        );
    }
}