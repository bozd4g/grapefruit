import React from 'react';
import Container from '../Component/Container.jsx';
import scrollToComponent from 'react-scroll-to-component';
import '../css/main.css';

export default class Introduction extends React.Component {
    constructor(props) {
        super(props);

        this.logoOnClick = this.logoOnClick.bind(this);
    }

    logoOnClick() {
        scrollToComponent(this.Main, {offset: 0, align: 'top', duration: 1000})
    }

    render() {
        return(
            <div ref={(div) => {this.Main = div;}}>
                <Container backgroundColor={global.windowBackgroundColor}>
                        <div className='logo' onClick={this.logoOnClick}>
                             <div className='logoInner'>
                                 <a href='#'><p>fb</p></a>
                             </div>
                        </div>
                </Container>
            </div>
        );
    }
}