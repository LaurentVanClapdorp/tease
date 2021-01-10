import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper, Image } from "./templateStyles/productStyles"
import { COLORS } from "../constants"

const TeaTemplate = ({
  data: {
    wpcontent: {
      product: {
        tea,
        types: { edges: types },
      },
    },
  },
}) => {
  return (
    <Layout>
      <SEO title="Tea" />
      <Wrapper descriptionColor={COLORS.SECONDARY}>
        <div className="tea-container">
          <div className="tea-image">
            <Image
              fluid={tea.picture.imageFile.childImageSharp.fluid}
              alt={tea.picture.altText}
            />
            <div className="types">
              {types.map(({ node: type }) => (
                <div key={type.name} className="type">
                  {type.name}
                </div>
              ))}
            </div>
          </div>
          <div className="tea-info">
            <h2>{tea.name}</h2>
            <p className="description">{tea.description}</p>
            <p className="info">
              <strong>Composition: </strong>
              {tea.composition}
            </p>
            <p className="info">
              <strong>Attributes: </strong>
              {tea.attributes}
            </p>
            <p className="info">
              <strong>Allergens: </strong>
              {tea.allergens}
            </p>
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default TeaTemplate

export const pageQuery = graphql`
  query($id: ID!) {
    wpcontent {
      product(id: $id, idType: ID) {
        types {
          edges {
            node {
              name
            }
          }
        }
        tea {
          name
          description
          composition
          attributes
          allergens
          picture {
            altText
            sourceUrl
            imageFile {
              childImageSharp {
                fluid(quality: 75) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        id
      }
    }
  }
`
