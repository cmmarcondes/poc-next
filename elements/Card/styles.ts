import styled from 'styled-components';

export const Container = styled.div<{ titleColor: string }>`
  position: relative;

  margin-top: 10px;

  color: #000;

  & + & {
    margin-left: 20px;

    @media only screen and (max-width: 652px) {
      margin-left: 0;
    }
  }

  .picture {
    position: absolute;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 70px;
    width: 70px;
    margin-left: auto;
    margin-right: auto;
    background: white;
    border-radius: 10px;
  }

  .content {
    min-height: 295px;
    width: 230px;
    padding: 60px 20px 40px;
    margin-top: 2.25rem;
    box-shadow: 0px 0px 8px #00000022;
    border-radius: 10px;

    @media only screen and (max-width: 950px) {
      width: 100%;
      min-height: auto;
      padding: 3.75rem 2.25rem 2.5rem 2.25rem;
      text-align: center;
    }

    &__title {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-bottom: 16px;

      color: ${({ titleColor }) => titleColor};
      text-align: center;
    }

    &__text {
      color: gray;
      font-size: 0.85rem;
      font-weight: 500;
      line-height: 2;

      @media only screen and (max-width: 950px) {
        font-size: 1rem;
      }
    }

    h4 {
      font-weight: 700;
      font-size: 1.25rem;
    }
  }
`;
