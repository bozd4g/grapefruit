import React from 'react';
import Introduction from '../Component/Introduction.jsx';
import Content from '../Component/Content.jsx';
import Last from '../Component/Last.jsx';

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
            <div>
                <div id='introduction' style={container}>
                    <Introduction logoClickEvent={this.onLogoClicked} 
                                  contactClickEvent={this.onContactClicked}>
                    </Introduction>
                </div>
                <div id='content' style={container}>
                    <Content title="what's happening?" color='white'></Content>
                </div>
                <div id='contact' style={container} ref={(div) => {this.lastSide = div;}}>
                    <Last title='contact' color='#474747'></Last>
                </div>
            </div>
        );
    }
}