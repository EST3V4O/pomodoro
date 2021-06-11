import React, { useContext, useState } from 'react';

import { BsCircleFill } from 'react-icons/bs'
import { BiRightArrow, BiTrendingUp } from 'react-icons/bi'

import { Container } from './styles';
import Button from '../Button';
import { CountdownContext } from '../../contexts/CountdownContext';

function Status({ status }) {
    const { active, setActive, first, setFirst } = useContext(CountdownContext)

    console.log(active)

    return (
        <Container countdown={active} first={first}>
            <h2>{first || active ? status : 'Pausa'}</h2>
            <section>
                <BsCircleFill color={active || first ? 'var(--green)' : 'var(--yellow)'} />
                <BsCircleFill color={active || first ? 'var(--green)' : 'var(--light-blue)'} />
                <BsCircleFill color={'var(--light-blue)'} />
            </section>
            <div>
                <Button 
                    icon={<BiRightArrow />}
                    active={active}
                    setActive={setActive}
                    first={first}
                    setFirst={setFirst}
                />
            </div>
        </Container>
    )
}

export default Status;