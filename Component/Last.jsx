import React from 'react';
import Title from '../Component/Title.jsx';


export default class Last extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='footer' style={{backgroundColor: global.windowBackgrounColor, height: '100%'}}>
                <Title color={this.props.color} title={this.props.title}/> 
            </div>
        );
    }
}