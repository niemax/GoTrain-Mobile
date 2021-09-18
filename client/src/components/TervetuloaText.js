import React from 'react';
import Text from './Text';

export default function TervetuloaTeksti({ name }) {
  return (
    <Text
      fontFamily="MontserratRegular"
      marginTop="10px"
      large
      center
    >{`Hei, ${name}!\n Mitä tänään treenattaisiin?`}</Text>
  );
}
