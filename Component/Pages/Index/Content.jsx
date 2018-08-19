import React from 'react';
import Title from '../../Title.jsx';
import { Row, Col } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import MediaQuery from 'react-responsive';
import '../../../css/main.css';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            status: false,
            posts: []
        }
    }

    componentDidMount() {
        var data = null;
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40bozd4g')
            .then(res => {
                data = res.data.items;

                if(data == null) {
                    alert("Posts is not found!");
                    return;
                }    
                
                this.getLastPosts(data.filter(function(e) {
                    return e.categories.length > 0
                }));
            })
    }

    replaceAll(s, replaceWhat, replaceTo){
        var re = new RegExp(replaceWhat, 'g');
        return s.replace(re,replaceTo);
    }

    getLastPosts(d) {
        const mobileBody = {
            marginTop: '2vh',
            marginBottom: '2.5vh',
            padding: '3vh 15px'
        };
        const mobileText = {
            fontSize: '1.25em',
            whiteSpace: 'unset',
            maxHeight: 2 * 25 // lineCount * lineHeight
        };

        const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];
        var rows = [];
        for (var i = 0; i < 3; i++) {
            var link = d[i].link;
            var date = new Date(d[i].pubDate);

            rows.push(
                <Row>
                    <MediaQuery query={global.minWidth}>
                        <Col xs={1} className='date'>
                            <p>{date.getDate()}<br/>{months[date.getMonth()]}</p>
                        </Col>
                        <Col xs={11}>
                            <Row className='body'>
                                <a href={link} target='_blank'>{this.replaceAll(d[i].title, '&amp', '&')}</a>
                            </Row>
                        </Col>
                    </MediaQuery>
                    <MediaQuery query={global.maxWidth}>
                        <Row className='date'>
                            <p style={mobileText}>{date.getDate()} {months[date.getMonth()]}</p>
                        </Row>
                        <Row className='body' style={mobileBody}>
                            <a style={mobileText} href={link} target='_blank'>{this.replaceAll(d[i].title, '&amp', '&')}</a>
                        </Row>
                    </MediaQuery>
                </Row>
            );
        }

        this.setState({
            posts: rows
        });
    }

    render() {
        const mediumLink = 'https://www.medium.com/@bozd4g/';
        const mobilePost = {
            boxSizing: 'border-box',
            margin: '0 3%',
            marginTop: '5%'
        }
        
        return (
            <div style={{ backgroundColor: global.primaryColor, height: '100%', width: '100%' }}>
                <Title color={this.props.color} title={this.props.title} />

                <MediaQuery query={global.minWidth}>
                    <div id='lastPosts' className='post'>
                        {this.state.posts}
                    </div>
                </MediaQuery>
                <MediaQuery query={global.maxWidth}>
                    <div id='lastPosts' className='post' style={mobilePost}>
                        {this.state.posts}
                    </div>
                </MediaQuery>

                <Row className='viewAll'>
                    <Col xs={12}>
                        <Row center='xs'>
                            <Col className='text'><a href={mediumLink} target='_blank'>view all</a></Col>
                            <Col className='arrow'>
                                <a href={mediumLink} target='_blank'><FontAwesomeIcon icon={faLongArrowAltRight} size='2x'></FontAwesomeIcon></a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}