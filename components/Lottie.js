import React, { useEffect, useRef } from 'react'
import LottieView from 'lottie-react-native';
import { LottieContainer } from '../utils/Styling';

  export const LottieAnimationCongratulations = () => {

  const animation = useRef(null);

  useEffect(() => {
    animation.current.play();
  })
 

    return (
      <LottieContainer>
        <LottieView
        ref={animation}
        source={require('../assets/json/16729-congratulation-icon.json')}
      />
      </LottieContainer>
      
    );
}

export const LottieAnimationTehdytTreenit = () => {

  const animation = useRef(null);

  useEffect(() => {
    animation.current.play();
  })
 

    return (
        
        <LottieView
        ref={animation}
        source={require('../assets/json/57980-progress.json')}
      />
      
    );
}

export const LottieAnimationMain = () => {

  const animation = useRef(null);

  useEffect(() => {
    animation.current.play();
  })
 

    return (
       <LottieView
        ref={animation}
        source={require('../assets/json/60820-bicycle-riding.json')}
      />

      
    );
}

export const LottieLoading = () => {
  
  const animation = useRef(null);

  useEffect(() => {
    animation.current.play();
  })
 

    return (
       <LottieView
        ref={animation}
        source={require('../assets/json/16404-loading-dialogue.json')}
      />

      
    );

}


export const LottieSignup = () => {

  const animation = useRef(null);

  useEffect(() => {
    animation.current.play();
  })
 

    return (
      <LottieContainer>
        <LottieView
        ref={animation}
        source={require('../assets/json/60820-bicycle-riding.json')}
      />
      </LottieContainer>
      
    );
}

export const LottieAlternateLoading = () => {

  const animation = useRef(null);

  useEffect(() => {
    animation.current.play();
  })
 

    return (
      <LottieContainer>
        <LottieView
        ref={animation}
        source={require('../assets/json/60820-bicycle-riding.json')}
      />
      </LottieContainer>
      
    );
}

export const TreeninAloitusAnimation = () => {

  const animation = useRef(null);

  useEffect(() => {
    animation.current.play();
  })
 

    return (
        <LottieView
        ref={animation}
        source={require('../assets/json/3153-dummbells.json')}
      />
      
    );
}