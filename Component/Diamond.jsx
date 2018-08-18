import React from 'react';
import MediaQuery from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/main.css';

export default class Diamond extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: null
        };

    }

    initializeContent() {
        var contentStyle = {
            fontSize: this.props.fontSize,
            color: this.props.color
        };

        var iconStyle = {
            color: this.props.color,
            height: '100%',
            width: '90%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            verticalAlign: 'middle'
        };

        var item = null;
        if(this.props.text == null)
            item = <a id='icon' style={iconStyle} href={this.props.redirect}>
                <FontAwesomeIcon className='icon default' size='2x' icon={this.props.icon}></FontAwesomeIcon>
                </a>;
        else
            item = <a id='content' href={this.props.redirect}>
                <p style={contentStyle}>{this.props.text}</p>
                </a>;

        this.setState( {
            content: item
        })
    }

    componentWillMount() {
        this.initializeContent();
    }

    render() {
        const diamondStyle = {
            position: this.props.position,
            height: this.props.height,
            width: this.props.height,
            backgroundColor: this.props.backgroundColor,
        };
        const innerStyle = {
            height: this.props.height,
            width: this.props.height,
        };

        return(
            <div style={diamondStyle} className='diamond'>
                <div style={innerStyle} className='inner'>
                    {this.state.content}
                </div>
            </div>
        );
    }
}