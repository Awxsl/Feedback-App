import React from 'react'
import PropTypes from 'prop-types'

function Button({children, version, type, isDiesabled}) {
  return (
    <button type={type} disabled={isDiesabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    isDiesabled: false, 
    version: 'primary', 
    type: 'button'
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    isDiesabled: PropTypes.bool, 
    version: PropTypes.string,
    type: PropTypes.string
}

export default Button