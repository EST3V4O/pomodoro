import React from 'react';
import { Link as LinkRouter } from 'react-router-dom'

import { Container } from './styles';

function Link({ link, path}) {
    return (
        <Container>
            <LinkRouter to={path}>{link}</LinkRouter>
        </Container>
    )
}

export default Link;