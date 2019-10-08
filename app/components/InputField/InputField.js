import React from 'react';
import './style.scss';

function InputField(props) {
  return (
    <label htmlFor={props.name}>
      {props.name}
      <input
        type="text"
        placeholder={`${props.name}...`}
        onChange={e => props.onChange(props.name, e.target.value)}
        value={props.value}
      />
    </label>
  );
}

InputField.propTypes = {};

export default InputField;
