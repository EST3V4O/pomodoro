import React, { createContext, useState } from 'react';

export const CountdownContext = createContext({})

function CountdownProvider({ children }) {
    const [active, setActive] = useState(false)
    const [first, setFirst] = useState(true)

    return (
        <CountdownContext.Provider value={
            {
                active, setActive,
                first, setFirst
            }
        }>
            {children}
        </CountdownContext.Provider>
    )
}

export default CountdownProvider;