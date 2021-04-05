import styled from 'styled-components';

export const HelpContainer = styled.div<{ helpState: boolean }>`
  z-index: 600;
  position: fixed;
  bottom: 16px;
  right: calc((100% - 1400px) / 2);

  width: ${({ helpState }) => (helpState ? '375px' : '0')};
  height: ${({ helpState }) => (helpState ? '568px' : '0')};

  font-family: Montserrat;

  transition: all 0.4s ease-in-out;
  box-shadow: 0px 45px 14px rgba(0, 0, 0, 0.21);
  overflow: hidden;

  @media only screen and (max-width: 1619px) {
    right: calc((100% - 1232px) / 2);
  }

  @media only screen and (max-width: 1024px) {
    right: 0;
    bottom: 0;
  }

  @media only screen and (max-width: 652px) {
    left: 0;
    right: 0;
    width: 100%;
  }

  .help__holder {
    position: relative;

    margin-top: 1.375rem;
  }

  .help__header {
    height: 155px;
    width: 100%;
    background: #00AA13;
    border-radius: 16px 16px 0 0;

    @media only screen and (max-width: 652px) {
      box-shadow: 1px 1px 12px 4px rgba(50, 50, 50, 0.15);
    }

    h2 {
      position: relative;

      padding: 1.875rem 0 1.25rem 1.875rem;
      margin: 0;

      color: #ffc600;
      font-size: 2.5rem;
      font-weight: 800;
      line-height: 1;
      text-align: start;

      &:before {
        content: '';
        position: absolute;
        top: 0.75em;
        left: 0;

        height: 45px;
        width: 15px;
        background-color: #ffc600;
      }
    }

    h3 {
      margin: 0;

      font-family: Montserrat;
      color: white;
      font-size: 1rem;
      text-align: center;
      font-weight: 500 !important;

      & + h3 {
        margin-top: 0.6rem;
      }
    }

    #helpClose {
      z-index: 4;
      position: absolute;
      top: -1.25rem;
      right: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      height: 40px;
      width: 40px;
      margin: 0;
      background: white;
      border-width: 0;
      border-radius: 50%;
      box-shadow: 0 0 4px 2px rgba(50, 50, 50, 0.2);

      color: #00AA13;
      font-size: 20px;

      cursor: pointer;

      &:focus {
        outline: -webkit-focus-ring-color auto 1px;
      }
    }
  }

  .help__content {
    height: 391px;
    background: white;
    border-bottom: 3px solid #e2af00;

    .content__info {
      display: flex;
      align-items: center;

      padding: 1.875rem 1.25rem 0.625rem 1.25rem;

      i {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 50px;
        margin-right: 1rem;

        font-size: 3.125rem;
        color: #ffc600;
      }

      .info__content {
        display: flex;
        flex-direction: column;

        color: #6d839a;
      }

      .info__title {
        font-size: 1rem;
        font-weight: 500;
        line-height: 2;
      }

      .info__subtitle {
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 1.2;

        &--small {
          font-size: 1rem;
        }
      }
    }
  }
`;
