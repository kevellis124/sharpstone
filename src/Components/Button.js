import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
    return (
      <button
        type="button"
        className={`button button--${size}`}
        style={backgroundColor && { backgroundColor }}
        {...props}
      >
        {label}
      </button>
    );
  };

  Button.propTypes = {
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
  };

  Button.defaultProps = {
    backgroundColor: null,
    size: 'medium',
    onClick: undefined,
  };