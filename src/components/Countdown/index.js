import React, { useContext, useEffect, useState } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import { CounterContext } from '../../contexts/CounterContext';

import { Container } from './styles';

function Countdown() {
    const { workMinutes, breakMinutes, howTime } = useContext(CounterContext)
    const { config, setConfig } = useContext(CountdownContext)

    const [times, setTimes] = useState(howTime)

    const { active, timeBreak, working } = config
    const [currentTime, setCurrentTime] = useState(workMinutes * 60)
    
    const timeToMinutes = currentTime => Math.floor(currentTime / 60)
    const timeToSeconds = currentTime => currentTime % 60
    const formatTime = time => String(time).padStart(2, '0')

    const minutes = formatTime(timeToMinutes(currentTime))
    const seconds = formatTime(timeToSeconds(currentTime))

    useEffect(() => {
        if(timeBreak) {
            setCurrentTime(breakMinutes * 60)
            setConfig({
                ...config,
                active: !active,
            })
        }
    }, [timeBreak])

    useEffect(() => {
        if(active && currentTime > 0 && times > 0) {
            setTimeout(() => {
                setCurrentTime(currentTime - 1)
            }, 1000)
        }

        if(currentTime === 0) {
            if(timeBreak) {
                setCurrentTime(workMinutes * 60)
                setTimes(prevState => prevState - 1)
                setConfig({
                    ...config,
                    active: !active,
                    timeBreak: !timeBreak,
                    working: !working,
                })
            } else {
                setConfig({
                    ...config,
                    timeBreak: !timeBreak,
                    working: !working,
                })
            }
        }

        if(times === 0 ) {
            setConfig({
                ...config,
                finished: true
            })
        }
    }, [active, currentTime, times])

    const color = (!active && working) || (!timeBreak) ? 'var(--green)' : 'var(--yellow)'

    return (
        <Container
            totalTime={working || timeBreak ? workMinutes* 60 : breakMinutes * 60}
            active={active}
            working={working}
            timeBreak={timeBreak}
            color={color}
        >
            <section>
                <svg height="250" width="250">
                    <circle cx="125" cy="125" r="121" ></circle>
                </svg>
                <div> {minutes}:{seconds} </div>
            </section>
        </Container>
    )
}

export default Countdown;