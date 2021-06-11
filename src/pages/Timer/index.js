import React, { useContext } from 'react';

import Countdown from '../../components/Countdown';
import Header from '../../components/Header';
import Status from '../../components/Status';

import CountdownProvider from '../../contexts/CountdownContext';
import { CounterContext } from '../../contexts/CounterContext';

import { Container, Main } from './styles';

function Timer() {
    const { workMinutes } = useContext(CounterContext)

    return (
        <Container>
            <Header />
            <Main>
                <CountdownProvider>
                    <Countdown workMinutes={workMinutes} />
                    <Status status='Trabalho'/>
                </CountdownProvider>
            </Main>
        </Container>
    )
}

export default Timer;