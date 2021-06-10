import React from 'react';
import Countdown from '../../components/Countdown';


import Header from '../../components/Header';
import Status from '../../components/Status';

import { Container, Main } from './styles';

function Timer() {
    return (
        <Container>
            <Header />
            <Main>
                <Countdown />
                <Status status='Trabalho'/>
            </Main>
        </Container>
    )
}

export default Timer;