import React from 'react'

import { MainBar, RollingText } from './Styling'
import { Weather } from './Weather';
import { Currency } from './Currency';


export const RollingInfoBar = () => {

    return (
        <MainBar>
            <RollingText>
                <Weather />
                <Currency />
            </RollingText>
        </MainBar>
    )
}
