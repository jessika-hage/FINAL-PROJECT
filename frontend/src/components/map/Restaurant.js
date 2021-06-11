import React from 'react';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import { Tooltip } from '@material-ui/core';

import { RoomRestaurant, Icons } from './Styling';

export const Restaurant = () => {
  return (
    <Tooltip title='RESTAURANT! see todays menu and upgrade meal!'>
      <RoomRestaurant>
        <Icons>
          <RestaurantIcon fontSize='large' />
        </Icons>
      </RoomRestaurant>
  </Tooltip>
  )
}