import styled, { css } from 'styled-components';

interface FeatureData {
  flex: number | string;
  variant: string;
  responsive: boolean;
}

export const Container = styled.div<FeatureData>`
  flex: ${({ flex }) => flex};
  display: flex;
  flex-direction: column;

  padding: ${({ variant }) => (variant === 'small' ? '0' : '1rem')};

  @media only screen and (max-width: 375px) {
    padding: 0.275rem 0;
  }

  > i {
    color: white;
    font-size: 2.625rem;
  }

  .feature {
    &__content {
      > h3 {
        margin-top: 0.875rem;

        color: #FF80D8;
        font-size: 1rem;
        font-weight: 600;
        line-height: 2;

        @media only screen and (max-width: 950px) {
          margin-top: ${({ variant }) =>
            variant === 'small' ? '0' : '0.875rem'};

          line-height: ${({ variant }) => (variant === 'small' ? '1' : '2')};
        }
      }

      > p {
        margin-top: 0.625rem;

        color: white;
        font-size: ${({ variant }) =>
          variant === 'small' ? '0.75rem' : '0.9375rem'};
        font-weight: ${({ variant }) => (variant === 'small' ? '600' : '500')};
        line-height: 2.4;

        @media only screen and (max-width: 360px) {
          font-size: 0.7rem;
        }
      }
    }
  }

  ${({ responsive }) =>
    // eslint-disable-next-line operator-linebreak
    responsive &&
    css`
      @media only screen and (max-width: 950px) {
        flex-direction: row;
        align-items: center;

        width: 100%;

        > i {
          display: flex;
          justify-content: center;

          min-width: 3rem;
          margin-bottom: 0;
          margin-right: 1.25rem;
        }
      }
    `}
`;
