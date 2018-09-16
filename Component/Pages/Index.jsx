import React from 'react';
import Introduction from '../Pages/Index/Introduction.jsx';
import Content from '../Pages/Index/Content.jsx';
import Last from '../Pages/Index/Last.jsx';

export default class Index extends React.Component {

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
                    <Introduction/>
                </div>
                <div id='content' style={container}>
                    <Content title="what's happening?" color='white'></Content>
                </div>
                <div id='contact' style={container}>
                    <Last title="contact with me." color='#757575'></Last>
                </div>
            </div>
        );
    }
}