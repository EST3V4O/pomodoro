import React from 'react';

import { Container, Buttons, Display, Count, Title } from './styles';

import { HiArrowCircleUp, HiArrowCircleDown } from 'react-icons/hi'

function Counter({ title, counter, setCounter }) {

    function handlePlus() {
        setCounter(prevState => prevState + 1)
    }
    
    function handleMinus() {
        setCounter(prevState => prevState - 1)
    }

    return (
        <Container>
            <Buttons>
                <HiArrowCircleUp size={40} onClick={handlePlus} />
                <HiArrowCircleDown size={40} onClick={handleMinus} />
            </Buttons>
            <Display>
                <Count>{counter}</Count>
                <Title>{title}</Title>
            </Display>
        </Container>
    )
}

export default Counter;