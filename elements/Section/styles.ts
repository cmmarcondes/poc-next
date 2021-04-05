import styled from 'styled-components';
import Title from '../../elements/Title';

interface IVariant {
  [key: string]: string;
}

const bgVariantColors: IVariant = {
  primary: "white",
  secondary: "green",
  dark: '#029619',
};

const fontVariantColors: IVariant = {
  primary: "gray",
  secondary: "white",
  dark: "white",
};

export const Container = styled.div<{ variant: string }>`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 3.75rem 0;
  background: ${({ variant }) => bgVariantColors[variant]};

  .section {
    &__holder {
      display: flex;
      flex-direction: column;

      width: 100%;
      max-width: 1238px;
    }

    &__content {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      @media only screen and (max-width: 1240px) {
        padding: 0 1.25rem;
      }

      @media only screen and (max-width: 950px) {
        flex-direction: column;
        align-items: center;
      }

      &--flex-row {
        @media only screen and (max-width: 950px) {
          flex-direction: row;
          flex-wrap: nowrap;
          overflow-x: hidden;
        }
      }

      &--flex-column {
        flex-direction: column;
        align-items: center;

        > h3 {
          margin-bottom: 1.25rem;

          font-size: 1.625rem;
          font-weight: bold;
          text-align: center;
          line-height: 1.7;
        }

        > span {
          margin-right: 2.5rem;
          margin-bottom: 2.5rem;
          margin-left: 2.5rem;

          font-size: 0.9375rem;
          font-weight: 500;
          text-align: center;
          line-height: 2.25;
        }

        button {
          display: flex;
          align-items: center;

          padding: 1rem 1.875rem;

          font-weight: 700;

          i {
            margin-right: 0.625rem;

            font-size: 1.125rem;
          }
        }
      }

      &--contato {
        > span {
          font-size: 0.9375rem;
        }
      }
    }

    &__column {
      display: flex;
      flex-direction: column;
      flex: 1;

      outline: none;

      &:first-child {
        margin-left: -16px;
      }

      &:last-child {
        margin-right: -16px;
      }

      & + .section__column {
        margin-left: 2rem;

        @media only screen and (max-width: 950px) {
          margin-left: 0;
        }
      }
    }
  }

  h2,
  h3,
  span,
  p {
    color: ${({ variant }) => fontVariantColors[variant]};
  }
`;

export const TitleSection = styled(Title)`
  margin-bottom: 3.125rem;
  margin-right: 2.25rem;
  border-width: 20px;

  &:before {
    height: 64px;
  }

  h2 {
    width: fit-content;
    margin-bottom: 12px;

    font-size: 1.625rem;
    line-height: 1;
    text-align: start;

    @media only screen and (max-width: 652px) {
      text-align: start;
    }
  }

  p {
    margin-bottom: 0;

    font-weight: 600;
    line-height: 2.25;
  }
`;
