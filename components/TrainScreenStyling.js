import React from 'react'
import styled from 'styled-components/native';

 export const Container = styled.View`
    flex: 1;
    background-color: #141314;
    
`;

export const RenderContainer = styled.View`
    flex: 1;
    background-color: #141314;
    border-radius: 100px;
`;

export const ParagraphContainer = styled.View`
    margin-top: 10px;
`;

 export const AloitaButton = styled.TouchableOpacity`
    margin-bottom: 40px;
    height: 48px;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    shadow-color: 'rgba(0,0,0, .4)';
    shadow-opacity: 0.5;
    background-color: ${props => props.color ?? '#FA4242'};
`;

 export const ButtonContainer = styled.View`
`;
//#947AFF
 export const IconTouchable = styled.TouchableOpacity`
    position: absolute;
    top: 50px;
    left: 10px;
`;

export const ModalContainer = styled.View`
`;

