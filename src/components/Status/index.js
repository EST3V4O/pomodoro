import React from 'react';

import { BsCircleFill } from 'react-icons/bs'
import { BiRightArrow } from 'react-icons/bi'

import { Container } from './styles';
import Link from '../Link';

function Status({ status }) {
    return (
        <Container>
            <h2>{status}</h2>
            <section>
                <BsCircleFill />
                <BsCircleFill />
                <BsCircleFill />
            </section>
            <div>
                <Link icon={<BiRightArrow />}/>
            </div>
        </Container>
    )
}

export default Status;