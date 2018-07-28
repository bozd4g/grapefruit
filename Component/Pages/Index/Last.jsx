import React from 'react';
import Title from '../../Title.jsx';
import Footer from '../Index/Footer.jsx';
import '../../../css/main.css';


export default class Last extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const lastStyle = {
            backgroundColor: global.windowBackgrounColor,
            height: '100%',
            position: 'relative'
        };

        return(
            <div className='footer' style={lastStyle}>
                <Title color={this.props.color} title={this.props.title}/>
                <Footer/>
            </div>
        );
    }
}