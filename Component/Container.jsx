import React from 'react';
import Introduction from '../Component/Introduction.jsx';
import Content from '../Component/Content.jsx';
import Last from '../Component/Last.jsx';

export default class Container extends React.Component {

    constructor(props) {
        super(props);

        this.onLogoClicked = this.onLogoClicked.bind(this);
        this.onContactClicked = this.onContactClicked.bind(this);
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
                                  contactClickEvent={this.onContactClicked}></Introduction>
                </div>
                <div id='content' style={container}>
                    <Content></Content>
                </div>
                <div id='contact' style={container} ref={(div) => {this.lastSide = div;}}>
                    <Last></Last>
                </div>
            </div>
        );
    }
}