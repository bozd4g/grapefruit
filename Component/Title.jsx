import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import MediaQuery from 'react-responsive';


export default class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Row>
                <Col md={5}>
                    <MediaQuery query="(min-width: 900px)">
                        <h1 className='title' style={{color: this.props.color}}>{this.props.title}</h1>
                    </MediaQuery>
                    <MediaQuery query="(max-width: 900px)">
                        <h1 className='mobileTitle' style={{color: this.props.color}}>{this.props.title}</h1>
                    </MediaQuery>
                </Col>
            </Row>
        );
    }
}