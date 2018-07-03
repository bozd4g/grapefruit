import React from 'react';
import Container from '../Component/Container.jsx'


export default class Last extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Container backgroundColor={this.props.backgroundColor}>
                   
                </Container>
            </div>
        );
    }
}