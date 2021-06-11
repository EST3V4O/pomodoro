import React, { useReducer } from 'react';

import { Container } from './styles';
import { MdPause } from 'react-icons/md'

function Button({ icon, active, setActive, first, setFirst }) {
    function reducer(state, action) {
        const activeAble = true

        switch(action.type) {
            case 'first':
                return {
                    active: setActive(!active || activeAble),
                    first: setFirst(false)
                }
            case 'active':
                return {
                    active: setActive(!active)
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, { active, first })

    return (
        <Container>
            {
                first ? (
                    <button onClick={() => dispatch({ type: 'first' })} >{icon}</button>
                ) : (
                    <button onClick={() => dispatch({ type: 'active' })} ><MdPause /></button>
                )
            }
        </Container>
    )
}

export default Button;