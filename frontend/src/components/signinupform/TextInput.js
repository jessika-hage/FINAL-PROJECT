import React from 'react';

import { Input, InputSignIn } from './Styling';

export const TextInput = ({ type, placeholder, value, onChange}) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
  ></Input>
  )
};

export const TextInputSignIn = ({ type, placeholder, value, onChange}) => {
  return (
    <InputSignIn
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
  ></InputSignIn>
  )
};