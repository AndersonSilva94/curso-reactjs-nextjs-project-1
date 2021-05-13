import React, { Component } from 'react';
import './style.css'

class TextInput extends Component {
  render() {
    const { searchValue, handleChange } = this.props;
    return (
      <>
        <input 
          onChange={ handleChange } 
          value={ searchValue } 
          type="search"
          className="text-input" 
          placeholder="Type your search"
        />
      </>
    );
  }
}

export default TextInput;