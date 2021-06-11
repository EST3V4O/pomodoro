import styled from 'styled-components';

export const Container = styled.div`
  background: var(--light-blue);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  font-weight: bold;

  border-radius: 0.5rem;
  transition: filter 0.5s ease;

  box-shadow: var(--shadow);

  :hover {
    filter: brightness(1.1);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0.5rem;
    padding: 1rem 2rem;
  }
`;
