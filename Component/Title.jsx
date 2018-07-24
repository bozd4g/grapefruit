import React from 'react';
import {Row, Col} from 'react-flexbox-grid';

export default class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Row>
                <Col md={5}>
                    <h1 className='title' style={{color: this.props.color}}>{this.props.title}</h1>
                </Col>
            </Row>
        );
    }
}