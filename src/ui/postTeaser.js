import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  root: {
    textAlign: 'center',
  },
}

const postTeaser = ({ node }) => (
  <div>
    <h3>
      {node.frontmatter.title}{' '}
      <span color="#BBB">— {node.frontmatter.date}</span>
    </h3>
    <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    <LinkButton to={node.fields.slug}>Lire la suite</LinkButton>
  </div>
)

export default postTeaser
