import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import MediaQuery from 'react-responsive';
import '../css/main.css';


export default class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const mobileStyle = {
            marginBottom: '-15%',
            marginLeft: '2%',
        };
        const mobileTextStyle = {
            fontSize: '3em',
            color: this.props.color
        };

        return (
            <Row>
                <Col md={5}>
                    <MediaQuery query={global.minWidth}>
                        <div className='title'><h1 style={{color: this.props.color}}>{this.props.title}</h1></div>
                    </MediaQuery>
                    <MediaQuery query={global.maxWidth}>
                        <div className='title' style={mobileStyle}><h1 style={mobileTextStyle}>{this.props.title}</h1></div>
                    </MediaQuery>
                </Col>
            </Row>
        );
    }
}