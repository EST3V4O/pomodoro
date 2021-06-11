import React from 'react';

import Countdown from '../../components/Countdown';
import Header from '../../components/Header';
import Status from '../../components/Status';

import CountdownProvider from '../../contexts/CountdownContext';

import { Container, Main } from './styles';

function Timer() {
    return (
        <Container>
            <Header />
            <Main>
                <CountdownProvider>
                    <Countdown />
                    <Status status='Trabalho'/>
                </CountdownProvider>
            </Main>
        </Container>
    )
}

export default Timer;