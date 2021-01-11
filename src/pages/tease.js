import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Wrapper, Image, Tea } from "../pageStyles/pageStyles"
import { COLORS } from "../constants"

const TeasePage = () => {
  const {
    wpcontent: {
      page: {
        teaseMeta: { teasePageDescription, teasePageHeaderPicture },
      },
      products: { edges: tea },
    },
  } = useStaticQuery(graphql`
    query {
      wpcontent {
        page(id: "tease", idType: URI) {
          teaseMeta {
            teasePageDescription
            teasePageHeaderPicture {
              sourceUrl
              altText
              imageFile {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
        products {
          edges {
            node {
              tea {
                name
                description
                attributes
                composition
                allergens
                picture {
                  sourceUrl
                  altText
                  imageFile {
                    childImageSharp {
                      fluid(quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
              }
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Tease" />
      <Wrapper teasColor={COLORS.REALWHITE} descriptionColor={COLORS.REALWHITE}>
        <div className="banner">
          <Image
            fluid={teasePageHeaderPicture.imageFile.childImageSharp.fluid}
            alt={teasePageHeaderPicture.altText}
          />
          <div className="inner-div">
            <h2 className="header-title">The Tease Community</h2>
            <p className="header-description">Check Our Tea Below!</p>
          </div>
        </div>
        <div className="description">
          <p>{teasePageDescription}</p>
        </div>
        <div className="teas">
          <h2>Our teas</h2>
          <div className="tea-items">
            {tea.map(({ node: { tea, slug } }) => (
              <Tea to={`/${slug}`} key={slug}>
                <Image
                  fluid={tea.picture.imageFile.childImageSharp.fluid}
                  alt={tea.picture.altText}
                />
                <div className="tea-info">
                  <p>{tea.name}</p>
                </div>
              </Tea>
            ))}
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default TeasePage
