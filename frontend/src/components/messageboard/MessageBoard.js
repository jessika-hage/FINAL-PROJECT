import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
  MessageCreated,
  CitizenAvatar,
  Username, } from './Styling';

export const MessageBoard = ({ onClick }) => {
  const [messageList, setMessageList] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const userId = useSelector((store) => store.profile.userId);

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

    fetch(CITIZEN_URL(`citizenmessage/${userId}`), {
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
              <Username>{message.user.username}</Username>
              <CitizenAvatar src={require(`../../assets/${message.user.avatar}.png`)} />
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


