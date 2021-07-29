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
      <LottieView
        ref={animation}
        source={require('../assets/json/16729-congratulation-icon.json')}
      />
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

export const LottieLoading = () => {
  const animation = useRef(null);

  const [count, setCount] = useState(5);

  useEffect(() => {
    animation.current.play();
  }, []);

  return (
    <LottieView ref={animation} source={require('../assets/json/16404-loading-dialogue.json')} />
  );
};

export const LottieLoadingAloitus = () => {
  const animation = useRef(null);

  const [count, setCount] = useState(5);

  useEffect(() => {
    setInterval(() => {
      setCount((c) => c - 1);
    }, 1000);
    animation.current.play();

    return () => {
      clearInterval();
    };
  }, []);

  return (
    <TreeninAloitusLoadingContainer>
      <Text marginBottom="220px" large style={{ color: '#fff' }}>
        Treenisi alkaa {count} sekunnin päästä. Tsemppiä treeniin!
      </Text>
      <LottieView ref={animation} source={require('../assets/json/16404-loading-dialogue.json')} />
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
