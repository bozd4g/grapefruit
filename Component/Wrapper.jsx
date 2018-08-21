import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import '../css/wrapper.css';
import MediaQuery from 'react-responsive';

export default class Wrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='wrapperMain'>
                <Row>
                    <Col xs={12}>
                        <Row center='xs'>
                            <Col xs={7}>
                            <MediaQuery query={global.minWidth}>
                                <section className='wrapper'>
                                    <h1>hey!<br />I'm
                                        <div className="verticalFlip">
                                            <span>furkan.</span>
                                            <span>a developer.</span>
                                            <span>a designer.</span>
                                            <span>a coder.</span>
                                            <span>just human.</span>
                                        </div>
                                    </h1>
                                </section>
                            </MediaQuery>
                            <p>I'm <b><a>designing</a></b> as hobby, <b><a>coding</a></b> as lovely and sometimes <b><a>writing</a></b> something at somewhere like <b><a href="https://github.com/bozd4g" target="_blank">github</a></b>, <b><a href="https://twitter.com/bozd4g" target="_blank">twitter</a></b> and <b><a href="https://medium.com/@bozd4g" target="_blank">medium</a></b>.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}