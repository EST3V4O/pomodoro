import React from 'react';

import Link from '../Link'
import { Container } from './styles';

function Header() {
    return (
        <Container>
            <h1>Pomodoro</h1>
            <Link link='Início' path='/' />
        </Container>
    )
}

export default Header;