import React from 'react';
import Title from '../../Title.jsx';
import { Row, Col } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faMedium, faLinkedin, faSpotify, faGithub } from '@fortawesome/free-brands-svg-icons';
import Diamond from '../../Diamond.jsx';
import MediaQuery from 'react-responsive';
import '../../../css/main.css';


export default class Last extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentYear: new Date().getFullYear()
        };
    }

    divClicked(url) {
        window.location.href = url;
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
                                    <MediaQuery query={global.minWidth}>
                                        <Col xs={2} className='email'>
                                            <div onClick={() => this.divClicked('mailto:me@furkanbozdag.com')}>
                                                <FontAwesomeIcon icon={faEnvelope} size='3x' />
                                                <p>send email.</p>
                                            </div>
                                        </Col>
                                        <Col xs={5}></Col>
                                        <Col xs={5} className='social'>
                                            <Row>
                                                <Col xs className='icon'>
                                                    <div onClick={() => this.divClicked('https://www.facebook.com/bozd4g/')}>
                                                        <FontAwesomeIcon className='icon facebook' icon={faFacebook} size='3x' />
                                                    </div>
                                                </Col>
                                                <Col xs className='icon'>
                                                    <div onClick={() => this.divClicked('https://www.instagram.com/bozd4g/')}>
                                                        <FontAwesomeIcon className='icon instagram' icon={faInstagram} size='3x' />
                                                    </div>
                                                </Col>
                                                <Col xs className='icon'>
                                                    <div onClick={() => this.divClicked('https://www.twitter.com/bozd4g/')}>
                                                        <FontAwesomeIcon className='icon twitter' icon={faTwitter} size='3x' />
                                                    </div>
                                                </Col>
                                                <Col xs className='icon'>
                                                    <div onClick={() => this.divClicked('https://www.medium.com/@bozd4g/')}>
                                                        <FontAwesomeIcon className='icon medium' icon={faMedium} size='3x' />
                                                    </div>
                                                </Col>
                                                <Col xs className='icon'>
                                                    <div onClick={() => this.divClicked('https://www.linkedin.com/in/bozd4g/')}>
                                                        <FontAwesomeIcon className='icon linkedin' icon={faLinkedin} size='3x' />
                                                    </div>
                                                </Col>
                                                <Col xs className='icon'>
                                                    <div onClick={() => this.divClicked('https://open.spotify.com/user/bozd4g/')}>
                                                        <FontAwesomeIcon className='icon spotify' icon={faSpotify} size='3x' />
                                                    </div>
                                                </Col>
                                                <Col xs className='icon'>
                                                    <div onClick={() => this.divClicked('http://www.github.com/bozd4g/')}>
                                                        <FontAwesomeIcon className='icon github' icon={faGithub} size='3x' />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </MediaQuery>
                                    <MediaQuery query={global.maxWidth}>
                                        <Col xs={12}>
                                            <Row center='xs'>
                                                <Col xs className='icon'>
                                                    <div onClick={() => this.divClicked('https://www.facebook.com/bozd4g/')}>
                                                        <FontAwesomeIcon className='icon facebook' icon={faFacebook} size='3x' />
                                                    </div>
                                                </Col>
                                                <Col xs className='icon'>
                                                    <div onClick={() => this.divClicked('https://www.instagram.com/bozd4g/')}>
                                                        <FontAwesomeIcon className='icon instagram' icon={faInstagram} size='3x' />
                                                    </div>
                                                </Col>
                                                <Col xs className='icon'>
                                                    <div onClick={() => this.divClicked('https://www.twitter.com/bozd4g/')}>
                                                        <FontAwesomeIcon className='icon twitter' icon={faTwitter} size='3x' />
                                                    </div>
                                                </Col>
                                                <Col xs className='icon'>
                                                    <div onClick={() => this.divClicked('https://www.medium.com/@bozd4g/')}>
                                                        <FontAwesomeIcon className='icon medium' icon={faMedium} size='3x' />
                                                    </div>
                                                </Col>
                                                <Col xs className='icon'>
                                                    <div onClick={() => this.divClicked('https://www.linkedin.com/in/bozd4g/')}>
                                                        <FontAwesomeIcon className='icon linkedin' icon={faLinkedin} size='3x' />
                                                    </div>
                                                </Col>
                                                <Col xs className='icon'>
                                                    <div onClick={() => this.divClicked('https://open.spotify.com/user/bozd4g/')}>
                                                        <FontAwesomeIcon className='icon spotify' icon={faSpotify} size='3x' />
                                                    </div>
                                                </Col>
                                                <Col xs className='icon'>
                                                    <div onClick={() => this.divClicked('http://www.github.com/bozd4g/')}>
                                                        <FontAwesomeIcon className='icon github' icon={faGithub} size='3x' />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </MediaQuery>
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
                                <MediaQuery query={global.minWidth}>
                                    <Col xs={6} style={{ color: '#757575' }}>
                                        © copyright {this.state.currentYear} | all rights reserved
                                    </Col>
                                </MediaQuery>
                                <MediaQuery query={global.maxWidth}>
                                    <Col xs={6} style={{ color: '#757575' }}>
                                        © copyright {this.state.currentYear}<br />all rights reserved
                                    </Col>
                                </MediaQuery>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}