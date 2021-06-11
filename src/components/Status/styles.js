import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  color: ${props => props.countdown || props.first ? 'var(--green)' : 'var(--yellow)'};

  h2 {
    font-size: 3rem;
    font-weight: bold;
  }

  section {
    width: 100px;

    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 0.9rem;
  }

  svg:nth-child(3) {
    color: var(--light-blue);
  }

`;
