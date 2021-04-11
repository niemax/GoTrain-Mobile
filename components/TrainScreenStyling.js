import React from 'react'
import styled from 'styled-components/native';

 const Container = styled.View`
    flex: 1;
    background-color: #FEEFE6;
    
`;

const ParagraphContainer = styled.View`
    margin-top: 10px;
`;

 const AloitaButton = styled.TouchableOpacity`
    margin: 18px;
    height: 48px;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    shadow-color: 'rgba(0,0,0, .4)';
    shadow-opacity: 0.5;
    background-color: ${props => props.color ?? '#FA4242'};
`;

 const ButtonContainer = styled.View`
`;
//#947AFF
 const IconTouchable = styled.TouchableOpacity`
    position: absolute;
    top: 50px;
    left: 10px;
`;

const ModalContainer = styled.View`
    flex: 1;
    background-color: white;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`;

const ModalView = styled.View`
    margin: 20px;
    background-color: white;
    border-radius: 20px;;
    align-items: center;
    shadow-color: #000;
    elevation: 5
`;
export { Container, ModalContainer, ModalView, ParagraphContainer, AloitaButton, ButtonContainer, IconTouchable};