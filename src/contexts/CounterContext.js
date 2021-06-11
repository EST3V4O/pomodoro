import React, { createContext, useState } from 'react';

export const CounterContext = createContext({})

function CounterProvider({ children }) {
    const [workMinutes, setWorkMinutes] = useState(25)
    const [breakMinutes, setBreakMinutes] = useState(5)
    const [howTime, setHowTime] = useState(3)

    return (
        <CounterContext.Provider value={
            { 
                workMinutes, setWorkMinutes,
                breakMinutes, setBreakMinutes,
                howTime, setHowTime
            }
        }>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider;