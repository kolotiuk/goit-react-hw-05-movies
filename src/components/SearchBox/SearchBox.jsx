import React from 'react';
import { useState } from 'react';

const SearchBox = ({ onChange, changeSearch }) => {
  const [input, setInput] = useState('');

  const handleChangeInput = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    changeSearch(input);
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
