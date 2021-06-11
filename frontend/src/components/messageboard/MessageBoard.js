import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { FaTimes } from 'react-icons/fa';

import { CITIZEN_URL } from '../../reusables/urls';
import { MessageForm } from './MessageForm';
import { 
  MessageContainer, 
  CloseIcon,
  MessageTitle, 
  MessageList, 
  MessageBox, 
  MessageText,
  MessageCreated } from './Styling';

export const MessageBoard = ({ onClick }) => {
  const [messageList, setMessageList] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Fetch all messages
  const fetchMessages = () => {
    fetch(CITIZEN_URL('citizenmessage'))
    .then((res) => res.json())
    .then((message) => setMessageList(message.citizenMessage))
    .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetch(CITIZEN_URL('citizenmessage'))
    .then((res) => res.json())
    .then((message) => setMessageList(message.citizenMessage))
    .catch((err) => console.error(err));
  }, []);

  // Post message
  const handleMessageSubmit = (e) => {
    e.preventDefault();

    fetch(CITIZEN_URL('citizenmessage'), {
      method: 'POST',
      body: JSON.stringify({ message: newMessage }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(() => {
      setNewMessage('');
      fetchMessages();
    })
    .catch(err => alert(`Error: ${err}`));
  };

  return (
    <MessageContainer>
      <CloseIcon>
        <FaTimes onClick={onClick} />
      </CloseIcon>
      <MessageTitle>Citizens Messageboard</MessageTitle>
        <MessageList>
          {messageList.map((message, index) => (
            <MessageBox key={index}>
              <MessageText>{message.message}</MessageText>
              <MessageCreated>{moment(message.createdAt).fromNow()}</MessageCreated>
            </MessageBox>
          ))}
        </MessageList>
        <MessageForm 
          handleSubmit={handleMessageSubmit} 
          newMessage={newMessage} 
          handleChange={(e) => setNewMessage(e.target.value)} />
    </MessageContainer>
  )
};


