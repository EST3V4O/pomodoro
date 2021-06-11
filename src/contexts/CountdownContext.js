import React, { createContext, useState } from 'react';

export const CountdownContext = createContext({})

function CountdownProvider({ children }) {
    const [config, setConfig] = useState({
        active: false,
        timeBreak: false,
        working: true,
        finished: false,
    })

    return (
        <CountdownContext.Provider value={
            {
                config, setConfig
            }
        }>
            {children}
        </CountdownContext.Provider>
    )
}

export default CountdownProvider;