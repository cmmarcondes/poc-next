import styled from 'styled-components';

interface TitleData {
  mainTitle: boolean;
  hasSubtitle?: string;
}

export const Container = styled.div<TitleData>`
  position: relative;
  display: flex;
  flex-direction: column;

  padding: 0 0 0 2.5rem;
  margin-right: 2.25rem;

  @media only screen and (max-width: 400px) {
    margin: 0;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    background: white;
    width: 20px;
    height: ${({ hasSubtitle }) => (hasSubtitle ? '76px' : '100%')};

    @media only screen and (max-width: 950px) {
      height: ${({ mainTitle }) => (mainTitle ? '75px' : '96px')};
    }
  }

  h2 {
    margin: 0 0 0.125rem 0;

    font-size: ${({ mainTitle }) => (mainTitle ? '3.25rem' : '1.625rem')};
    font-weight: bold;
    text-align: unset;
    line-height: ${({ mainTitle }) => (mainTitle ? '1.2' : '1.8')};

    @media only screen and (max-width: 950px) {
      margin: 0 2rem 0 0;

      font-size: 1.625rem;
      line-height: 1.5;
    }

    @media only screen and (max-width: 400px) {
      margin: 0;

      font-size: 1.5rem;
    }
  }

  p {
    margin-top: 0;

    font-size: ${({ mainTitle }) => (mainTitle ? '1.125rem' : '1rem')};
    font-weight: ${({ mainTitle }) => (mainTitle ? '600' : '500')};
    line-height: 2;

    @media only screen and (max-width: 950px) {
      margin: ${({ mainTitle }) => (mainTitle ? '0.6rem 0 0 0' : 0)};
      font-size: 1rem;
      line-height: 2.25;
    }

    @media only screen and (max-width: 360px) {
      font-size: 0.8rem;
    }
  }
`;
