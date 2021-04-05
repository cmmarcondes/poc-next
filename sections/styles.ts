import styled from 'styled-components';

export const Container = styled.div`
  .sc-lp {
    &__main {
      max-width: 100%;
    }
  }
`;

export const Section = styled.div`
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;

  .section__content {
    display: flex;

    padding: 20px 10px;

    overflow-x: auto;

    &::-webkit-scrollbar {
      height: 0.6rem;
    }

    &::-webkit-scrollbar-track {
      background-color: lightgray;
      border-radius: 0.3rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: yellow;
      border-radius: 0.3rem;
      outline: 1px solid slategrey;
    }

    button + button {
      margin-left: 16px;
    }
  }
`;
