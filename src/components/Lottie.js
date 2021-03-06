import React, { useEffect, useRef, useState } from 'react';
import LottieView from 'lottie-react-native';
import { LottieContainer, TreeninAloitusLoadingContainer } from '../utils/Styling';
import Text from '../components/Text';

export const LottieAnimationCongratulations = () => {
  const animation = useRef(null);

  useEffect(() => {
    animation.current.play();
  });

  return (
    <LottieContainer>
      <LottieView ref={animation} source={require('../assets/json/congratulations.json')} />
    </LottieContainer>
  );
};

export const LottieAnimationMain = () => {
  const animation = useRef(null);

  useEffect(() => {
    animation.current.play();
  });

  return (
    <LottieView ref={animation} source={require('../assets/json/60820-bicycle-riding.json')} />
  );
};

export const LottieLoadingAloitus = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <TreeninAloitusLoadingContainer>
      <Text marginBottom="220px" large style={{ color: '#fff' }}>
        Treenisi alkaa {count} sekunnin päästä. Tsemppiä treeniin!
      </Text>
    </TreeninAloitusLoadingContainer>
  );
};
export const LottieSignup = () => {
  const animation = useRef(null);

  useEffect(() => {
    animation.current.play();
  });

  return (
    <LottieContainer>
      <LottieView ref={animation} source={require('../assets/json/60820-bicycle-riding.json')} />
    </LottieContainer>
  );
};

export const LottieAgenda = () => {
  const animation = useRef(null);

  useEffect(() => {
    animation.current.play();
  }, []);

  return <LottieView ref={animation} source={require('../assets/json/404.json')} />;
};

export const LottieHae = () => {
  const animation = useRef(null);

  useEffect(() => {
    animation.current.play();
  }, []);

  return <LottieView ref={animation} source={require('../assets/json/search.json')} />;
};
