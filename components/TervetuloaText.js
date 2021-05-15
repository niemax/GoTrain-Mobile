import React from 'react'
import Text from '../components/Text'

export default function TervetuloaTeksti(props) {


    return (
        <Text marginTop="10px" large center>{`Hei, ${props.teksti}!\n Mitä tänään treenattaisiin?`}</Text>
    )
}
