import React from 'react'

import { MainBar, RollingText } from './Styling'
import { Weather } from './Weather';


export const RollingInfoBar = () => {


    return (
        <MainBar>
            <RollingText><Weather /></RollingText>
        </MainBar>
    )
}
