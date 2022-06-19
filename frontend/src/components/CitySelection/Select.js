import React from 'react'

function Select({ options, handler }) {
  return options
    ? (
      <select name='city' id='city' onChange={handler}>
        {options.map((opt) => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
      </select>
    ) : null;
}

export default Select