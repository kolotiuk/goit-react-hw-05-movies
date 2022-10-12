import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ onChange }) => {
  const [input, setInput] = useState('');

  const handleChangeInput = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onChange(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChangeInput} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
};
