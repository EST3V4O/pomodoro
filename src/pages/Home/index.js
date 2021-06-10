import React from 'react';

import { Container } from './styles';
import Counter from '../../components/Counter'
import Link from '../../components/Link';

function Home() {
    return (
        <Container>
            <h1>Pomodoro</h1>
            <section>
                <Counter title='Trabalho'/>
                <Counter title='Pausa'/>
                <Counter title='Sessões'/>
            </section>
            <section>
                <Link link='Continuar' path='/timer'/>
            </section>
        </Container>
    )
}

export default Home;