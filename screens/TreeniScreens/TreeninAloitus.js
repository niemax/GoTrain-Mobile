import React, { useState, useEffect } from 'react'
import Text from '../../components/Text';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native'; 

const AloitaTreeni = ({ navigation }) => {
    const [data, setData] = useState([]);

    const getData = async() => {
        try {
            let response = await fetch('https://mun-treeni-api.herokuapp.com/treenit')
            const data = await response.json();
            //console.log(data[0].rintatreeni.liikkeet[0].Punnerrukset); jne...
            return data;
    
        } catch (error) {
            console.error(error);
        }
    }

   

    useEffect(() => {
        getData();
    }, [])

        return(
            <Container>
            <Text>Hi</Text>
            </Container>
            
        )
}

   export default AloitaTreeni;



const Container = styled.View`
    flex: 1
`;

