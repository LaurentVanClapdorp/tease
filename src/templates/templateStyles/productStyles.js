import styled from "styled-components"
import Img from "gatsby-image"
import { COLORS, FONT_FAMILIES, MEDIA_QUERIES } from "../../constants"

export const Wrapper = styled.div`
  background-color: ${COLORS.REALWHITEs};

  .tea-container {
    display: flex;
    margin: auto;
    margin-top: 4rem;
    width: 90%;
    height: 100%;
    background-color: ${COLORS.REALWHITE};

    @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
      flex-direction: column;
    }

    .tea-image {
      position: relative;
      max-width: 500px;
      max-height: 500px;
      width: 40vw;
      height: 40vw;

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        height: 90vw;
        width: 90vw;
        border-bottom: solid 15px ${COLORS.PRIMARY};
      }

      .types {
        position: absolute;
        top: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
        color: ${COLORS.TERTIARY};
        font-family: ${FONT_FAMILIES.TITLE};
        text-transform: uppercase;

        @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
          color: ${COLORS.PRIMARY};
          border-right: solid 5px ${COLORS.PRIMARY};
        }

        .type {
          padding: 1rem 1.5rem;
        }
      }
    }

    .tea-info {
      display: flex;
      flex-direction: column;
      width: 60vw;
      padding: 1.5rem 2rem;
      color: ${COLORS.QUADRI};

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        width: 100%;
      }

      h2 {
        font-family: ${FONT_FAMILIES.TITLE};
        text-transform: uppercase;
        font-size: 4rem;
        padding-bottom: 1rem;
        margin-left: auto;
        margin-bottom: 5%;
        color: ${COLORS.TERTIARY};

        @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
          margin-right: auto;
          margin-left: 0;
          font-size: 2.5rem;
        }
      }

      .description {
        font-size: 1.2rem;
        margin-bottom: 10%;
        color: ${COLORS.QUADRI};

        @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
          font-size: 1rem;
        }
      }

      .info {
        font-family: 2rem;
      }
    }
  }

    .tea-picture {
      width: 28.5vw;
      height: 57vw;
      margin: 0 1vw;

      @media (max-width: ${MEDIA_QUERIES.MEDIUM}) {
        width: 90vw;
        height: 160vw;
        margin: 2vw auto;
      }
    }
  }
`

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
`
