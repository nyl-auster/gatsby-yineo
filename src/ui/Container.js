import React from 'react'
import Link from 'gatsby-link'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'

const styles = {
  root: {
    maxWidth: '900px',
    margin: 'auto',
  },
}

const Container = ({ children, classes }) => (
  <div className={classes.root}>{children}</div>
)

export default injectSheet(styles)(Container)
