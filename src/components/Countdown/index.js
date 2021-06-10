import React from 'react';

import { Container } from './styles';

function Countdown() {
    return (
        <Container>
            <section>
                <svg height="250" width="250">
                    <circle cx="125" cy="125" r="121"></circle>
                </svg>
                <div> 25:00 </div>
            </section>
        </Container>
    )
}

export default Countdown;