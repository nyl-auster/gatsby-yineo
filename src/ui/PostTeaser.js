import React from 'react'
import PropTypes from 'prop-types'
import LinkButton from './LinkButton'
import injectSheet from 'react-jss'

const styles = {
  root: {
    marginBottom: '1.8rem',
  },
}

const PostTeaser = ({ node, classes }) => (
  <div className={classes.root}>
    <h3>
      {node.frontmatter.title}
      <span color="#BBB">— {node.frontmatter.date}</span>
    </h3>
    <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    <LinkButton to={node.frontmatter.path}>Lire la suite</LinkButton>
  </div>
)

export default injectSheet(styles)(PostTeaser)
