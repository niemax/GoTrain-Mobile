import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Text from './Text';
import { useNavigation } from '@react-navigation/core';

export default function EsittelyAloitusTimer({ treeninNimi }) {
  const [count, setCount] = useState(5);
  const navigation = useNavigation();

  useEffect(() => {
    if (count <= 0) navigation.navigate('TreeninAloitus', { treeninNimi: treeninNimi });

    const timerInterval = setInterval(() => {
      setCount((c) => c - 1);
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [count]);

  return (
    <View style={{ alignItems: 'center', height: 260 }}>
      <Text large marginBottom="20px">
        Treenisi alkaa
      </Text>
      <AnimatedCircularProgress
        size={150}
        rotation={360}
        width={6}
        lineCap="square"
        fill={count}
        tintColor="#338467"
      >
        {() => (
          <Text title fontFamily="MontserratBold" style={{ color: '#338467' }}>
            {count}s
          </Text>
        )}
      </AnimatedCircularProgress>
      <Text marginTop="10px" large>
        valmistaudu!
      </Text>
    </View>
  );
}
