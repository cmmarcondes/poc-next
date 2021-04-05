/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import styled from 'styled-components';

export const Container = styled.div<{ background: string }>`
  position: relative;

  background: ${({ background }) => background};
  height: 532px;
  width: 100%;

  @media only screen and (max-width: 1085px) {
    height: 800px;
  }

  @media only screen and (max-width: 950px) {
    height: 100vh;
  }

  .hero {
    &__holder {
      display: flex;
      align-items: flex-end;

      height: 532px;
      max-width: 1238px;
      padding: 0 6.5rem;
      margin: 0 auto;

      @media only screen and (max-width: 1212px) {
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;

        height: 100%;
        padding: 0;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      height: 75%;

      @media only screen and (max-width: 1212px) {
        z-index: 104;
        margin: 0 4rem;
      }

      @media only screen and (max-width: 1085px) {
        height: 60%;
      }

      @media only screen and (max-width: 851px) {
        margin: 0 1.375rem;
      }

      @media only screen and (max-width: 950px) {
        height: 70%;
        width: 100%;
        margin: 0;
      }

      @media only screen and (max-width: 360px) {
        height: 82%;
        margin: 0 !important;

        font-size: 1.6rem;
      }

      .content {
        &__title {
          display: flex;
          flex-direction: column;

          > div {
            border-width: 1.25rem;

            color: white;

            @media only screen and (max-width: 950px) {
              margin-right: 0;
            }

            @media only screen and (max-width: 950px) {
              margin-right: 2.25rem;
            }

            h1 {
              font-size: 3.25rem;

              @media only screen and (max-width: 950px) {
                font-size: 2rem;
              }
            }

            span {
              font-weight: 500;
            }
          }

          > span {
            margin-top: 0.4rem;
            margin-left: 2.5rem;

            color: white;
            font-size: 1.125rem;
            font-weight: 500;
          }
        }

        &__vantagens {
          display: flex;
          flex: 1;
          align-items: flex-start;

          margin-top: 1rem;
          margin-left: 2.5rem;

          @media only screen and (max-width: 851px) {
            margin-right: 2.5rem;
          }

          > div {
            & + div {
              margin-left: 1rem;

              @media only screen and (max-width: 950px) {
                margin-left: 0;
              }
            }
          }

          @media only screen and (max-width: 950px) {
            flex-direction: column;

            margin: 1rem 1.25rem;
          }
        }

        &__footer {
          display: flex;

          margin-left: 2.5rem;
          margin-bottom: 2.75rem;

          @media only screen and (max-width: 851px) {
            margin: 0 0 2.75rem 0;
          }

          > a {
            @media only screen and (max-width: 851px) {
              width: 100%;
            }

            @media only screen and (max-width: 950px) {
              padding: 0 1.25rem;
            }
          }
        }
      }
    }

    &__image {
      justify-self: flex-start;
      align-self: flex-end;

      img {
        height: 505px;

        @media only screen and (max-width: 950px) {
          height: 420px;
        }

        @media only screen and (max-width: 360px) {
          height: 350px;
        }
      }

      @media only screen and (max-width: 1212px) {
        position: absolute;
        right: 0.75rem;

        &::before {
          content: '';
          z-index: 1;
          position: absolute;
          bottom: 0;
          left: 0;

          height: 100%;
          width: 100%;
          box-shadow: inset 0px -12rem 6rem -1rem
           #00AA13;

          @media only screen and (max-width: 1085px) {
            box-shadow: inset 0px -18rem 6rem -1rem
             #00AA13;
          }

          @media only screen and (max-width: 950px) {
            height: 100%;
            box-shadow: inset 0px -18rem 6rem -1rem
             #00AA13;
          }

          @media only screen and (max-width: 360px) {
            box-shadow: inset 0px -14rem 6rem -1rem
             #00AA13;
          }
        }
      }

      @media only screen and (max-width: 1085px) {
        top: 80px;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
      }

      @media only screen and (max-width: 950px) {
        top: 3.2rem;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
      }

      @media only screen and (max-width: 360px) {
        display: none;
      }
    }
  }
`;
