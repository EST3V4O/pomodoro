import React, { useContext } from 'react';

import { Container } from './styles';
import Counter from '../../components/Counter'
import Link from '../../components/Link';

import { CounterContext } from '../../contexts/CounterContext';

function Home() {
    const { 
        workMinutes, setWorkMinutes,
        breakMinutes, setBreakMinutes,
        howTime, setHowTime
    } = useContext(CounterContext)

    return (
        <Container>
            <h1>Pomodoro</h1>
            <section>
                <Counter title='Trabalho' counter={workMinutes} setCounter={setWorkMinutes} />
                <Counter title='Pausa' counter={breakMinutes} setCounter={setBreakMinutes} />
                <Counter title='Sessões' counter={howTime} setCounter={setHowTime} />
            </section>
            <section>
                <Link link='Continuar' path='/timer'/>
            </section>
        </Container>
    )
}

export default Home;