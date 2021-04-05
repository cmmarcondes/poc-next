/* istanbul ignore file */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */

import styled, { css } from 'styled-components';

interface ButtonData {
  loading?: number;
  extendsize?: string;
  height?: string;
  width?: string;
  variant?: string;
}

const Button = styled.button<ButtonData>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({ height }) => height || 'unset'};
  width: ${({ width }) => width || '233px'};
  border-radius: 6px;
  border-width: 2px;

  font-weight: 600;

  white-space: nowrap;

  &.btn-negativo {
    &--custom-mobile {
      @media only screen and (max-width: 652px) {
        &:hover {
          border-color: #ffc107;
          background-color: #ffc107;
        }

        &:focus {
          box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);
        }
      }
    }
  }

  &.simule-button--max-width {
    width: 100%;
  }

  &.simule-button--modal-size {
    padding: 17px 25px;

    font-size: 0.875rem;
    line-height: 1;
  }

  &.simule-button--unset-width {
    width: unset;
  }

  &.simule-button--uppercase-mobile {
    @media only screen and (max-width: 652px) {
      text-transform: uppercase;
    }
  }

  .simule-button {
    &__icon {
      &--right {
        margin-left: 10px;
      }

      &--left {
        margin-right: 10px;
      }

      &--max-size {
        font-size: 1.125rem;
      }
    }
  }

  &.btn-xs {
    padding: 0 0.8rem;

    font-weight: 600;
    line-height: 2;
  }

  ${({ extendsize }) =>
    extendsize === 'super-sm' &&
    css`
      &.btn-sm {
        width: unset;
        padding: 7.5px 10px;
        border-radius: 6px;

        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1;

        @media only screen and (max-width: 652px) {
          padding: 7.5px 15px;
        }

        i {
          font-weight: 100;
        }
      }
    `}

  &.simule-button--width-mobile {
    @media only screen and (max-width: 652px) {
      width: 255px;
    }
  }

  ${({ loading }) =>
    loading &&
    css`
      & > div {
        align-items: center;

        height: 22px;
        padding: 0;
      }
    `}
`;

export default Button;
