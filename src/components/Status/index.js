import React, { useContext } from 'react';

import { BsCircleFill } from 'react-icons/bs'
import { BiRightArrow } from 'react-icons/bi'

import { Container } from './styles';
import Button from '../Button';
import { CountdownContext } from '../../contexts/CountdownContext';

function Status({ status }) {
    const { config } = useContext(CountdownContext)

    const { active, working, timeBreak } = config

    const firstColor = (!active && working) || (!timeBreak) ? 'var(--green)' : 'var(--yellow)'
    const secondColor = (!active && working) || (!timeBreak) ? 'var(--green)' : 'var(--light-blue)'

    return (
        <Container active={active} working={working} timeBreak={timeBreak} >
            <h2>{working && !timeBreak ? status : 'Pausa'}</h2>
            <section>
                <BsCircleFill color={firstColor} />
                <BsCircleFill color={secondColor} />
                <BsCircleFill color={'var(--light-blue)'} />
            </section>
            <div>
                <Button icon={<BiRightArrow />} />
            </div>
        </Container>
    )
}

export default Status;