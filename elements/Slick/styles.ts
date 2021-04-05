import styled from 'styled-components';

interface IVariant {
  [key: string]: string;
}

const colors: IVariant = {
  amarelo: "yellow",
};

export const Container = styled.div`
  margin-left: 0.25rem;
  overflow-x: hidden;

  .slick-slide {
    user-select: none;

    &:focus {
      outline: none;
    }
  }

  .slick-track {
    display: flex;
  }

  button,
  li {
    height: 6.4px;
    width: 24px;
    border: none;
    border-radius: 6px;
    background-color: ${colors.amarelo};

    color: transparent;
    font-size: 0;
    opacity: 0.6;

    &:focus {
      border: 0;
      outline: none;
    }
  }

  button {
    width: 100%;
  }

  .slick-active {
    opacity: 1;

    width: 40px;
  }

  ul {
    display: flex !important;

    padding-left: 0.75rem;
    margin-top: 1.875rem;

    list-style: none;
  }

  li {
    margin: 0.25rem;

    transition: all 0.4s ease-in-out;
  }
`;

export default Container;
