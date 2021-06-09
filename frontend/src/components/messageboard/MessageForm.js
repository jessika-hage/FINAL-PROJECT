import React from 'react';

import { 
  Form, 
  MessageInput, 
  SubmitButton } from './Styling';

export const MessageForm = ({ 
  handleSubmit, 
  newMessage, 
  handleChange }) => {

  return (
    <Form onSubmit={handleSubmit}>
      <MessageInput
        placeholder='Type your message..'
        rows='5'
        minLength='2'
        maxLength='40'
        required
        value={newMessage}
        onChange={handleChange}>
      </MessageInput>
      <SubmitButton type='submit'>Send</SubmitButton>
    </Form>
  )
};