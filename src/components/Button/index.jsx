import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { text, onClick, disabled } = this.props;
    return (
      <>
        <button className="button" onClick={onClick} disabled={disabled}>
          {text}
        </button>
      </>
    );
  }
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Button;
