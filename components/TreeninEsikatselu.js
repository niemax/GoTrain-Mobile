import React, { useEffect, useState } from 'react';
import Text from '../components/Text';

const Esikatselu = () => {
    const [data, setData] = useState([]);


    const getData = async() => {
        try {
            let response = await fetch('https://mun-treeni-api.herokuapp.com/treenit')
            const data = await response.json();
            //console.log(data[0].rintatreeni.liikkeet[0].Punnerrukset); jne...
            return data;
            
        } catch(error){
            console.error(error);
        }
    
}

    useEffect(() => {
        getData();
    }, [])


    return(
        <Text>Hi</Text>
    )
    }
export default Esikatselu;