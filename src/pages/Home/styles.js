import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding-top: 4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h1 {
        font-size: 3rem;
        padding-bottom: 5rem;
    }

    section {
        min-width: 50%;

        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    section:nth-child(3) {
        margin-top: 5rem;
    }
`