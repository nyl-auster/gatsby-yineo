import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  root: {
    textAlign: 'center',
  },
}

const Header = ({ title }) => <div className={classes.root}>{title}</div>

Header.propTypes = {
  title: PropTypes.string,
}

export default injectSheet(styles)(Header)
