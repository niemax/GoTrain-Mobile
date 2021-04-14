import React from 'react'
import Text from '../../components/Text';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native'; 
import Esikatselu from '../../components/TreeninEsikatselu';




const AloitaTreeni = (props) => {
    //const { } = props;
    const navigation = useNavigation();
    return(
        <Container>
            <Esikatselu />
        </Container>
        
    );
}


export default AloitaTreeni;

const Container = styled.View`
    flex: 1
`;

