import React from 'react';
import Text from './Text';

export default function TervetuloaTeksti({ nimi }) {
  return (
    <Text
      fontFamily="MontserratRegular"
      marginTop="10px"
      large
      center
    >{`Hei, ${nimi}!\n Mitä tänään treenattaisiin?`}</Text>
  );
}
