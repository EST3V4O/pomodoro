import styled from "styled-components";

export const Container = styled.div`
    min-width: 170px;
    min-height: 150px;
    padding: 1rem 0;

    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const Buttons = styled.div`
    height: 85px;
    padding: 0.3rem 0;
    padding-right: 0.3rem;
    margin-top: calc((100px - 85px) / 2);
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    svg {
        transition: color 0.5s ease;
        opacity: 0.45;
    }

    svg:hover {
        color: var(--yellow)
    }
`

export const Display = styled.div`
    width: 100%;
    height: calc(150px - 2rem);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const Count = styled.div`
    width: 100%;
    height: 100px;
    background: var(--light-blue);

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;

    box-shadow: var(--shadow);

    font-size: 4.5rem;
    font-weight: bold;
    padding-top: 0.8rem;
    padding-bottom: 0.4rem;

`

export const Title = styled.h3`
    margin-top: 0.8rem;
`
