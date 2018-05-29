import React from 'react'
import Container from '../ui/Container'
import PostTeaser from '../ui/postTeaser'

export default props => {
  return (
    <Container>
      {props.data.allMarkdownRemark.edges.map(({ node }) => (
        <PostTeaser key={node.id} node={node} />
      ))}
    </Container>
  )
}

export const query = graphql`
  query allPosts {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          html
          excerpt
          frontmatter {
            title
            path
            date(formatString: "DD/MM/YYYY")
          }
        }
      }
    }
  }
`
