import React from 'react';
import Title from '../Component/Title.jsx';
import '../css/main.css';


export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div style={{backgroundColor: global.primaryColor, height: '100%'}}>
                <Title color={this.props.color} title={this.props.title}/>
            </div>
        );
    }
}