import React from 'react';
import Container from '../Component/Container.jsx'


export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Container backgroundColor={global.primaryColor}>
                
                </Container>
            </div>
        );
    }
}