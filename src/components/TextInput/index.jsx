import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';

class TextInput extends Component {
  render() {
    const { searchValue, handleChange } = this.props;
    return (
      <>
        <input
          onChange={handleChange}
          value={searchValue}
          type="search"
          className="text-input"
          placeholder="Type your search"
        />
      </>
    );
  }
}

TextInput.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextInput;
