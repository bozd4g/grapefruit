import React from 'react';
import Container from '../Component/Container.jsx'


export default class Last extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            primaryColor: '#ffbd39',
            defaultBackgroundColor: '#f5f5f5'
        }
    }

    render() {
        return(
            <div>
                <Container backgroundColor={global.windowBackgroundColor}>
                   
                </Container>
            </div>
        );
    }
}