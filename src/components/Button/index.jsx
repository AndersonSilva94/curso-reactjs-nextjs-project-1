import './style.css';
import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { text, onClick, disabled } = this.props;
    return (
      <>
        <button 
          className="button" 
          onClick={ onClick }
          disabled={ disabled }
        >
          { text }
        </button>
      </>
    );
  }
}

export default Button;