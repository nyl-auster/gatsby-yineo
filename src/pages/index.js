import React from 'react'
import LinkButton from '../ui/LinkButton'
import Container from '../ui/Container'

export default props => {
  return (
    <Container>
      {props.data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title}{' '}
            <span color="#BBB">— {node.frontmatter.date}</span>
          </h3>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          <LinkButton to={node.frontmatter.path}>Lire la suite</LinkButton>
        </div>
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
            date(formatString: "DD/M/YYYY")
          }
        }
      }
    }
  }
`
