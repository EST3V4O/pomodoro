import React, { useContext } from 'react';

import { Container } from './styles';
import { MdPause } from 'react-icons/md'
import { CountdownContext } from '../../contexts/CountdownContext';

function Button({ icon }) {
    const { config, setConfig } = useContext(CountdownContext)

    const { active, working, timeBreak } = config

    function handleStartCountdown() {
        setConfig({
            ...config,
            active: !active,
            working: true,
            timeBreak: false,
            finished: false,
        })
    }

    function handleStartBreak() {
        setConfig({
            ...config,
            active: !active,
        })
    }

    return (
        <Container>
            {
                working ? (
                    working && !active ? (
                        <button onClick={handleStartCountdown} >{icon}</button>
                    ) : (
                        <button onClick={handleStartCountdown} ><MdPause /></button>
                    )
                ) : (
                    timeBreak && !active ? (
                        <button onClick={handleStartBreak} >{icon} </button>
                    ) : (
                        <button onClick={handleStartBreak} ><MdPause /> </button>
                    )
                )
            }
        </Container>
    )
}

export default Button;