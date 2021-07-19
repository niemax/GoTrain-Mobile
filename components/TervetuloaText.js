import React from 'react';
import Text from './Text';

export default function TervetuloaTeksti({ teksti }) {
  return (
    <Text
      fontFamily="MontserratRegular"
      marginTop="10px"
      large
      center
    >{`Hei, ${teksti}!\n Mitä tänään treenattaisiin?`}</Text>
  );
}
