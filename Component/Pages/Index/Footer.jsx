import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import '../../../css/main.css';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentYear: new Date().getFullYear()            
        };
        
    }

    render() {
        return(
             <Row className='copyright'>
                <Col xs={12}>
                    <Row center='xs'>
                        <Col xs={6}>
                            © copyright {this.state.currentYear} | all rights reserved
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}