import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { COLORS, FONT_FAMILIES, MEDIA_QUERIES } from "../constants"

export const Wrapper = styled.div`
  .banner {
    display: flex;
    position: relative;
    width: 100%;
    height: 580px;

    @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
      height: 355px;
    }

    .inner-div {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60%;
      height: 30%;
      padding: 1rem;
      background-color: transparant;

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        top: 120px;
        margin-top: 30px;
        width: 90%;
      }

      p {
        color: white;
        font-size: 1.3rem;
        text-align: center;

        @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
          font-size: 1rem;
        }
      }

      .header-title {
        font-family: ${FONT_FAMILIES.TITLE};
        font-size: 3rem;
        font-weight: 600;
        color: white;
        text-transform: uppercase;
        margin: auto;
        padding-bottom: 10px;
        margin-bottom: 1rem;

        @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
          font-size: 1.5rem;
        }
      }
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    padding: 3rem 0 2rem;
    background-color: ${({ descriptionColor = COLORS.REALWHITE }) =>
      `${descriptionColor}`};

    h2 {
      font-family: ${FONT_FAMILIES.TITLE};
      font-size: 3rem;
      color: white;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 3rem;

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        font-size: 1.5rem;
      }
    }

    p {
      width: 70%;
      font-size: 1.3rem;
      color: ${COLORS.QUADRI};
      text-align: center;
      line-height: 2rem;
      margin: auto;

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        width: 90%;
        font-size: 1rem;
      }
    }
  }

  .contact-info {
    display: flex;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;

    background-color: ${COLORS.REALWHITE};
    @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
      flex-direction: column;
    }

    div {
      width: 33.33%;
      padding: 1em;
      color: ${COLORS.TERTIARY};

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        width: 100%;
      }

      p {
        margin-top: 1rem;
        color: ${COLORS.TERTIARY};

        a {
          color: ${COLORS.TERTIARY};
        }
      }
    }
  }

  .teas {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem 5%;
    background-color: ${({ teasColor = COLORS.REALWHITE }) => `${teasColor}`};

    h2 {
      font-family: ${FONT_FAMILIES.TITLE};
      font-size: 3rem;
      color: ${COLORS.TERTIARY};
      text-transform: uppercase;
      margin-bottom: 5rem;

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        font-size: 2rem;
        margin-bottom: 2rem;
      }
    }

    .tea-items {
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      width: 100%;
      padding: 0 5%;
      margin-bottom: 2rem;
    }
  }
`

export const Tea = styled(Link)`
  display: flex;
  position: relative;
  width: 22vw;
  height: 22vw;
  margin: 2vw;
  margin-bottom : 5%;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
    width: 90vw;
    height: 90vw;
    margin: 2vw 0;
  }

  &:hover {
    transform: scale(1.05);
    }
  }

  .tea-info {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 100%;
    height: 80px;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    transition: all 0.3s ease-in-out;

    p {
      text-transform: uppercase;
      font-size: 1.3rem;
      font-weight: 600;
      color: ${COLORS.TERTIARY};
      margin: 0;
    }

    p:nth-child(2) {
      color: ${COLORS.SECONDARY};

      margin-top: 0.3rem;
    }
  }
`

export const GradientShining = styled.div`
  border-style: solid;
  border-width: 3px;
  border-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 1) 1%,
      rgba(0, 255, 255, 1) 50%,
      rgba(0, 0, 0, 1) 100%
    )
    100% 0 100% 0/3px 0 3px 0 stretch;
`

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
`
