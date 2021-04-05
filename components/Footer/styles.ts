import styled, { css } from 'styled-components';

import Button from '../../elements/Button';

export const Container = styled.footer<{ simplified: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;

  width: 100%;
  background: #00AA13;

  ${({ simplified }) =>
    simplified &&
    css`
      @media only screen and (max-width: 652px) {
        background: #029619;
      }
    `};

  .footer-vr {
    &__holder {
      display: flex;
      justify-content: space-between;
      align-items: center;

      max-width: 1238px;
      width: 100%;
      padding: 2.75rem 0;
      margin: 0 4rem;

      @media only screen and (max-width: 1070px) {
        flex-direction: column;

        padding: 1.875rem 0px;
        margin: ${({ simplified }) =>
          simplified ? '0 1.375rem' : '0 1.375rem 3.25rem'};
      }

      ${({ simplified }) =>
        simplified &&
        css`
          @media only screen and (max-width: 652px) {
            padding: 0;
            margin: 0;

            button {
              background: #00AA13;
              padding-top: 30px !important;
              padding-bottom: 20px !important;
              border: 0 !important;
              border-radius: 15px 15px 0 0 !important;
              box-shadow: 0px 0px 8px #00000022;

              font-weight: 600 !important;

              i {
                display: none;
              }

              &:hover {
                background: white !important;
              }

              &::before {
                content: '';
                position: absolute;
                top: 10px;
                left: 50%;
                transform: translate(-50%, 0);

                background: #029619;
                height: 4px;
                width: 46px;
                border-radius: 2px;
              }
            }
          }
        `};
    }

    &__copyright {
      > img {
        flex-shrink: 0;

        height: ${({ simplified }) => (simplified ? '2.8125rem' : '4.5rem')};
        width: ${({ simplified }) => (simplified ? '2.8125rem' : '4.5rem')};
        margin-right: 2rem;

        @media only screen and (max-width: 1070px) {
          display: none;
        }
      }

      > span {
        color: white;
        font-size: 0.75rem;
        font-weight: 600;

        @media only screen and (max-width: 1070px) {
          line-height: 2;
          text-align: center;
        }

        ${({ simplified }) =>
          simplified &&
          css`
            @media only screen and (max-width: 652px) {
              font-size: 0.5rem;
            }
          `};
      }

      @media only screen and (max-width: 1070px) {
        display: flex;
        align-items: center;

        margin-bottom: 1.875rem;
      }
    }
  }

  .button {
    &__icon {
      font-size: 1.125rem;

      margin-right: 0.812rem;

      &--single {
        margin: 0 2.5px 0 2.8px;

        font-size: 1.5rem;
      }
    }
  }
`;

export const ContactButton = styled(Button)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem 3.28125rem;
  border-width: 2px;

  font-weight: 600;
  font-size: 1.125rem;

  &:hover,
  &:active {
    color: #00AA13 !important;
  }

  &.contact-button--custom-width {
    width: unset;

    padding: 1rem 3.28125rem;

    @media only screen and (max-width: 1070px) {
      width: 100%;
    }
  }
`;
