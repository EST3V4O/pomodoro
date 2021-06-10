import styled from 'styled-components';

export const Container = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 100%;
    padding: 1rem;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--light-blue);

    svg circle {
        fill: transparent;
        stroke: var(--green);
        stroke-width: 7px;
        stroke-linecap: round;
        stroke-dasharray: 800;
        stroke-dashoffset: 800;
        animation: animate 8s linear infinite;
    }

    div {
        position: absolute;
        width: 200px;
        height: 70px;
        top: calc(50% - 35px);
        left: calc(50% - 100px);

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 4rem;
        font-weight: bold;
    }

    @keyframes animate {
        100% {
            stroke-dashoffset: 0;
        }
    }


`;
