import styled from 'styled-components';

interface IContainer {
  simplified: boolean;
  background: string | undefined;
}

export const Container = styled.header<IContainer>`
  z-index: 120;
  position: ${({ simplified }) => (simplified ? 'relative' : 'absolute')};

  display: flex;
  justify-content: center;

  width: 100%;

  background: ${({ background }) => background};

  @media only screen and (max-width: 652px) {
    box-shadow: ${({ simplified }) =>
      simplified ? '0px 3px 6px #00000029' : '0'};
  }

  .header-vr__holder {
    display: flex;
    align-items: ${({ simplified }) => (simplified ? 'start' : 'center')};

    max-width: ${({ simplified }) => (simplified ? '1030px' : '1238px')};
    width: 100%;
    padding: 1.875rem 0;
    margin: 0 1.375rem;

    transition: all 0.4s ease-in-out;

    @media only screen and (max-width: 851px) {
      justify-content: ${({ simplified }) =>
        simplified ? 'start' : 'space-between'};

      padding: 1.25rem 0;
      margin: 0 1.375rem;
    }

    @media only screen and (max-width: 652px) {
      align-items: center;
    }

    > a {
      z-index: 24;
      flex-shrink: 0;

      height: ${({ simplified }) => (simplified ? '2.8125rem' : '4.5rem')};
      width: ${({ simplified }) => (simplified ? '2.8125rem' : '4.5rem')};
      margin-right: 2rem;

      img {
        width: ${({ simplified }) => (simplified ? '2.8125rem' : '4.5rem')};
        height: ${({ simplified }) => (simplified ? '2.8125rem' : '4.5rem')};
      }

      @media only screen and (max-width: 652px) {
        height: ${({ simplified }) => (simplified ? '4.5rem' : '60px')};
        width: ${({ simplified }) => (simplified ? '4.5rem' : '60px')};
        margin-right: ${({ simplified }) => (simplified ? '2.5rem' : '2rem')};

        img {
          width: 4.5rem;
          height: 4.5rem;
        }
      }
    }

    .title {
      display: ${({ simplified }) => (simplified ? 'block' : 'none')};

      color: white;

      > h1 {
        margin-bottom: 0.3rem;

        font-size: 2rem;
        font-weight: bold;
        line-height: 2.6rem;

        @media only screen and (max-width: 652px) {
          border-left: ${({ simplified }) =>
            simplified ? `8px solid #FFFFFF` : '0'};
          margin-bottom: 0;
          padding-left: ${({ simplified }) => (simplified ? '8px' : '0')};

          font-size: ${({ simplified }) =>
            simplified ? '1.625rem' : '1.4rem'};
          line-height: ${({ simplified }) => (simplified ? '1.25' : 'unset')};
        }
      }

      > span {
        font-size: 0.875rem;
        font-weight: 600;

        @media only screen and (max-width: 652px) {
          display: none;
        }
      }
    }
  }
`;

export const Menu = styled.div<{ simplified: boolean; menuState: boolean }>`
  display: ${({ simplified }) => (simplified ? 'none' : 'flex')};
  align-items: center;

  > button {
    display: none;

    height: 30px;
    width: 32px;
    background: none;
    border: none;

    font-size: 2rem;
    color: white;

    &:focus {
      outline: none;
    }

    @media only screen and (max-width: 851px) {
      z-index: 24;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  nav {
    @media only screen and (max-width: 851px) {
      z-index: 16;
      position: fixed;
      top: 0;
      right: ${({ menuState }) => (menuState ? '0' : '-100%')};

      display: flex;
      flex-direction: column;

      height: 100vh;
      width: 100%;
      padding: 7rem 2rem;
      background: rgba(0, 0, 0, 0.78);
      backdrop-filter: blur(12px);

      transition: right 0.4s ease-in-out;
    }

    > a {
      color: white;
      font-size: 0.875rem;
      font-weight: 700;
      text-transform: uppercase;

      &:hover {
        text-decoration: none;
      }

      & + a {
        margin-left: 3.375rem;
      }

      @media only screen and (max-width: 851px) {
        padding: 1.4rem 0;

        font-size: 1.2rem;
        text-transform: none;

        & + a {
          margin-left: 0;

          border-top: solid 1px #454545;
        }
      }
    }
  }
`;
