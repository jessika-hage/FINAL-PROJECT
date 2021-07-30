import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { CITIZEN_URL } from '../../reusables/urls';
import { 
  ProfileContainer,
	TableContainer, 
	CitizenAvatar, 
	Citizen,
	CitizenDays,
	Badges,
	Icon } from './Styling';

export const CitizenProfile = ({ username }) => {
  // const [citizen, setCitizen] = useState();
  // const { username } = useParams();

  // useEffect(() => {
  //   fetch(CITIZEN_URL(`citizen/${username}`))
  //   .then(res => res.json())
  //   .then((json) => {
  //     setCitizen(json) 
  //   })
  // }, [username])

	return (
    <>
		<ProfileContainer>
						{/* <CitizenAvatar src={require(`../../assets/${citizen.avatar}.png`)} /> */}
						<Citizen>{username}</Citizen>
						{/* <Citizen>{citizen.ranking.toFixed(1)}/100</Citizen> */}
						{/* <CitizenDays>{moment(citizen.createdAt).toNow(true)}</CitizenDays> */}
						{/* <Badges>{citizen.badges}</Badges> */}
						{/* <Badges>{citizen.coins.toFixed(2)}</Badges> */}
		</ProfileContainer>
    </>
	)
};