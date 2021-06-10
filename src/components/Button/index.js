import React from 'react';
import { Link } from 'react-router-dom'

import { Container } from './styles';

function Button({ link, path }) {
    return (
        <Container>
            <Link to={path}>{link}</Link>
        </Container>
    )
}

export default Button;