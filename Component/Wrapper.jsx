import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import '../css/wrapper.css';

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
                                <section className='wrapper'>
                                    <h1>hey!<br />I'm
                                    <div class="verticalFlip">
                                            <span>furkan.</span>
                                            <span>developer.</span>
                                            <span>minimalist.</span>
                                            <span>designer.</span>
                                            <span>coder.</span>
                                        </div>
                                    </h1>
                                </section>
                                <p>I'm <b><a>designing</a></b> as hobby, <b><a>coding</a></b> as lovely and sometimes <b><a>writing</a></b> something at somewhere like <b><a href="https://github.com/bozd4g" target="_blank">github</a></b>, <b><a href="https://twitter.com/bozd4g" target="_blank">twitter</a></b> and <b><a href="https://medium.com/@bozd4g" target="_blank">medium</a></b>.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}