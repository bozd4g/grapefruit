import React from 'react';
import Title from '../../Title.jsx';
import { Row, Col } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter, faMedium, faLinkedin, faSpotify, faGithub } from '@fortawesome/free-brands-svg-icons'
import '../../../css/main.css';


export default class Last extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentYear: new Date().getFullYear()
        };
    }

    render() {
        const lastStyle = {
            backgroundColor: global.windowBackgrounColor,
            height: '100%',
            position: 'relative'
        };

        return (
            <div className='footer' style={lastStyle}>
                <Title color={this.props.color} title={this.props.title} />

                {/* Email and Social Media Side */}
                <div className='footerContact'>
                    <div className='inner'>
                        <Row>
                            <Col xs={12}>
                                <Row>
                                    <Col xs={6} className='email'>
                                        <div className='diamond' onClick={() => { this.props.logoClickEvent() }}>
                                            <div className='diamondInner'>
                                                <a href='mailto:me@furkanbozdag.com'><FontAwesomeIcon className='icon default' icon={faEnvelope}
                                                    size='2x'></FontAwesomeIcon></a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={5} className='social'>
                                        <Row>
                                            <Col xs className='icon'>
                                                <a href='https://www.facebook.com/bozd4g/' alt='facebook' target='_blank'>
                                                    <FontAwesomeIcon className='icon facebook' icon={faFacebook} size='3x' />
                                                </a>
                                            </Col>
                                            <Col xs className='icon'>
                                                <a href='https://www.instagram.com/bozd4g/' alt='instagram' target='_blank'>
                                                    <FontAwesomeIcon className='icon instagram' icon={faInstagram} size='3x' />
                                                </a>
                                            </Col>
                                            <Col xs className='icon'>
                                                <a href='https://www.twitter.com/bozd4g/' alt='twitter' target='_blank'>
                                                    <FontAwesomeIcon className='icon twitter' icon={faTwitter} size='3x' />
                                                </a>
                                            </Col>
                                            <Col xs className='icon'>
                                                <a href='https://www.medium.com/@bozd4g/' alt='medium' target='_blank'>
                                                    <FontAwesomeIcon className='icon medium' icon={faMedium} size='3x' />
                                                </a>
                                            </Col>
                                            <Col xs className='icon'>
                                                <a href='https://www.linkedin.com/in/bozd4g/' alt='linkedin' target='_blank'>
                                                    <FontAwesomeIcon className='icon linkedin' icon={faLinkedin} size='3x' />
                                                </a>
                                            </Col>
                                            <Col xs className='icon'>
                                                <a href='https://open.spotify.com/user/bozd4g/' alt='spotify' target='_blank'>
                                                    <FontAwesomeIcon className='icon spotify' icon={faSpotify} size='3x' />
                                                </a>
                                            </Col>
                                            <Col xs className='icon'>
                                                <a href='http://www.github.com/bozd4g/' alt='github' target='_blank'>
                                                    <FontAwesomeIcon className='icon github' icon={faGithub} size='3x' />
                                                </a>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </div>

                {/* Copyrigt Side */}
                <div className='copyright'>
                    <Row>
                        <Col xs={12}>
                            <Row center='xs'>
                                <Col xs={6}>
                                    © copyright {this.state.currentYear} | all rights reserved
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}