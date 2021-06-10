import React from 'react';

import { Container, Buttons, Display, Count, Title } from './styles';

import { HiArrowCircleUp, HiArrowCircleDown } from 'react-icons/hi'

function Counter({ title }) {
    return (
        <Container>
            <Buttons>
                <HiArrowCircleUp size={40} />
                <HiArrowCircleDown size={40} />
            </Buttons>
            <Display>
                <Count>25</Count>
                <Title>{title}</Title>
            </Display>
        </Container>
    )
}

export default Counter;