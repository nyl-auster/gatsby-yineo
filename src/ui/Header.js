import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import Container from './Container'

const styles = {
  root: {
    textAlign: 'center',
    padding: '2rem',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  },
}

const Header = ({ title, classes }) => (
  <div className={classes.root}>
    <Container>
      <h1>
        <Link to="/" className={classes.link}>
          {title}
        </Link>
      </h1>
    </Container>
  </div>
)

Header.propTypes = {
  title: PropTypes.string,
  classes: PropTypes.objectOf(PropTypes.string),
}

export default injectSheet(styles)(Header)
