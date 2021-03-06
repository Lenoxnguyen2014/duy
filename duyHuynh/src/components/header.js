import React, {useState} from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

function Header({ siteTitle, menuLinks }) {
  return(
    <nav className="navbar">
            {/* <Link to="/" className="nav-item is-brand title is-2">
            {siteTitle}
          </Link>
          <nav className="navbar-end" >
              {menuLinks.map(link => (
                <p key={link.name}>
                  <Link to={link.Link} className="navbar-item title is-5">
                    {link.name}
                  </Link>
                </p>
              ))}
          </nav> */}
        </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

