import React, { useContext, useEffect, useState } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';

import { Container } from './styles';

function Countdown({ workMinutes }) {
    const { active } = useContext(CountdownContext)

    const [currentTime, setCurrentTime] = useState(workMinutes * 60)

    const timeToMinutes = currentTime => Math.floor(currentTime / 60)
    const timeToSeconds = currentTime => currentTime % 60
    const formatTime = time => String(time).padStart(2, '0')

    let minutes = formatTime(timeToMinutes(currentTime))
    let seconds = formatTime(timeToSeconds(currentTime))

    useEffect(() => {
        if(active && currentTime > 0) {
            setTimeout(() => {
                setCurrentTime(currentTime - 1)
            }, 1000)
        }
    }, [active, currentTime])

    return (
        <Container>
            <section>
                <svg height="250" width="250">
                    <circle cx="125" cy="125" r="121"></circle>
                </svg>
                <div> {minutes}:{seconds} </div>
            </section>
        </Container>
    )
}

export default Countdown;