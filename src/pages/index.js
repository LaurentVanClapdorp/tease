import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Wrapper,
  Image,
  BottomEdgeDown,
  BottomEdgeUp,
  Tea,
} from "../pageStyles/pageStyles"
import { COLORS } from "../templates/constants"

const HomePage = () => {
  const {
    wpcontent: {
      page: {
        homeMeta: {
          homePageDescription,
          homePageFeavoriteTea,
          homePageHeaderDescription,
          homePageHeaderPicture,
          homePageHeaderTitle,
        },
      },
    },
  } = useStaticQuery(graphql`
    query {
      wpcontent {
        page(id: "home", idType: URI) {
          homeMeta {
            homePageDescription
            homePageFeavoriteTea {
              ... on WPGraphql_Product {
                slug
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
                        fluid(quality: 50) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                  }
                }
              }
            }
            homePageHeaderDescription
            homePageHeaderPicture {
              altText
              sourceUrl
              imageFile {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            homePageHeaderTitle
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Wrapper>
        <div className="banner">
          <Image
            fluid={homePageHeaderPicture.imageFile.childImageSharp.fluid}
            alt={homePageHeaderPicture.altText}
          />
          <div className="inner-div">
            <p className="header-title">{homePageHeaderTitle}</p>
            <p className="header-description">{homePageHeaderDescription}</p>
          </div>
          <BottomEdgeDown color={COLORS.BLACK} />
        </div>
        <div className="description">
          <p>{homePageDescription}</p>
          <BottomEdgeUp color={COLORS.PRIMARY} />
        </div>
        <div className="teas">
          <h2>Featured teas</h2>
          <div className="tea-items">
            {homePageFeavoriteTea.map(({ tea, slug }) => (
              <Tea key={slug} to={`/${slug}`}>
                <Image
                  fluid={tea.picture.imageFile.childImageSharp.fluid}
                  alt={tea.picture.altText}
                />
                <div className="tea-info">
                  <p>
                    {tea.firstName} {tea.lastName}
                  </p>
                  <p>{tea.teaName}</p>
                </div>
              </Tea>
            ))}
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default HomePage
