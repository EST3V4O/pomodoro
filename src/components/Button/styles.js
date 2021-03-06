import styled from 'styled-components';

export const Container = styled.div`
    background: var(--light-blue);

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0.5rem;
    transition: filter 0.5s ease;

    box-shadow: var(--shadow);

    :hover {
    filter: brightness(1.1);
    }

    button {
      border-radius: 0.5rem;
      background: none;
      padding: 1rem 2rem;
      border: none;
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--text);
      cursor: pointer;
      
      display: flex;
      align-items: center;
      justify-content: center;
    }
`;
