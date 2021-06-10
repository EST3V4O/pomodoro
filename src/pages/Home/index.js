import React from 'react';

import { Container } from './styles';
import Counter from '../../components/Counter'
import Button from '../../components/Button';

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
                <Button link='Continuar' path='/timer'/>
            </section>
        </Container>
    )
}

export default Home;