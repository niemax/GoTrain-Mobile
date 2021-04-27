import styled from 'styled-components/native';
import React, { useState , useEffect } from "react";
import Text from '../../components/Text';
import ConfettiCannon from 'react-native-confetti-cannon';



const LopetaTreeni = (props) => {
    const { data } = props;
   
    console.log("tehdyt treenit data", data);
    return (
        <ModalContainer>
        <Text medium>Onneksi olkoon - Treeni suoritettu!</Text>
        <ConfettiCannon
        count={60}
        origin={{x: 0, y: -20}}
        autoStart={true}
        fallSpeed={7000}
        fadeOut={true}
        
      />
        </ModalContainer>
        
        
         
    );
   
}

export default LopetaTreeni;


const ModalContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #141314;


`;