import React from 'react';
import Container from '../Component/Container.jsx';
import '../css/main.css';

export default class Introduction extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='introduction'>
                 <div className='logo' onClick={() => {this.props.logoClickEvent()}}>
                        <div className='logoInner'>
                            <a href='#introduction'><p>fb</p></a>
                        </div>
                    </div>
                <div className='header'>
                    <a href='#contact' onClick={() => this.props.contactClickEvent()}>contact</a>
                </div>
            </div>
        );
    }
}