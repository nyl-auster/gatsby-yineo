import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  link: {
    color: 'black',
    padding: '0.5rem',
    marginTop: '0.5rem',
    display: 'inline-block',
    border: 'solid black 1px',
    textDecoration: 'none',
    '&:hover': {
      background: 'black',
      color: 'white',
    },
  },
}

const LinkButton = ({ to, children, classes }) => (
  <div className={classes.root}>
    <Link to={to} className={classes.link}>
      {children}
    </Link>
  </div>
)

LinkButton.propTypes = {
  texr: PropTypes.string,
}

export default injectSheet(styles)(LinkButton)
