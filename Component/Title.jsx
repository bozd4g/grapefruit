import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import MediaQuery from 'react-responsive';


export default class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const mobileStyle = {
            paddingLeft: '5%',
            fontSize: '2.5em',
            color: this.props.color
        };
        
        return(
            <Row>
                <Col md={5}>
                    <MediaQuery query={global.minWidth}>
                        <h1 className='title' style={{color: this.props.color}}>{this.props.title}</h1>
                    </MediaQuery>
                    <MediaQuery query={global.maxWidth}>
                        <h1 className='title' style={mobileStyle}>{this.props.title}</h1>
                    </MediaQuery>
                </Col>
            </Row>
        );
    }
}