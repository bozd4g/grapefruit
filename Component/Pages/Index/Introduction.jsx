import React from 'react';
import Wrapper from '../../Wrapper.jsx';
import Diamond from '../../Diamond.jsx';
import MediaQuery from 'react-responsive';
import '../../../css/main.css';

export default class Introduction extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const mobileHeader = {
            fontSize: '2em',
            marginTop: '25%'
        };

        return(
            <div className='introduction'>
                <MediaQuery query={global.minWidth}>
                    <Diamond redirect='#introduction'
                        position='fixed'
                        text='fb'
                        height='120px'
                        width='120px'
                        fontSize='40px'/>
                </MediaQuery>
                <MediaQuery query={global.maxWidth}>
                    <Diamond redirect='#introduction'
                        position='fixed'
                        text='fb'
                        height='80px'
                        width='80px'
                        fontSize='25px'/>
                </MediaQuery>

                <div className='header'>
                    <MediaQuery query={global.minWidth}>
                        <a href='#contact'>contact</a>
                    </MediaQuery>
                    <MediaQuery query={global.maxWidth}>
                        <a style={mobileHeader} href='#contact'>contact</a>
                    </MediaQuery>
                </div>
                <Wrapper/>
            </div>
        );
    }
}