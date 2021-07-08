import React from 'react'
import styled from 'styled-components/native'; 
import { Appearance, useColorScheme } from 'react-native-appearance';


Appearance.getColorScheme();


const TextStyle = ({...props}) => {
    const colorScheme = useColorScheme();

    return <Text style={{color: colorScheme === 'dark' ? '#fff' : '#000'}} {...props}>{props.children}</Text>
}

const Text = styled.Text`
margin: ${props => props.margin ?? 0};
padding: ${props => props.padding ?? 0};
marginLeft: ${props => props.marginLeft ?? 0};
marginRight: ${props => props.marginRight ?? 0};
marginTop: ${props => props.marginTop ?? 0};
opacity: ${props => props.opacity ?? 1};
marginBottom: ${props => props.marginBottom ?? 0};
fontFamily: ${props => props.fontFamily ?? 'MontserratSemiBold'}

${({ title, vinkit, vinkkiTitle, large, medium, small, treeninNimi, sarjat }) => {
    switch (true) {
            case title:
                return `font-size: 32px`

            case large:
                return `font-size: 24px`

            case vinkit:
                return `font-size: 15px`
            
            case vinkkiTitle:
                return `font-size: 20px`

            case medium:
                return `font-size: 16px`

            case small:
                return `font-size: 14px`
            
            case treeninNimi:
                return `font-size: 18px`

            case sarjat:
                return `font-size: 26px`
                
            default:
                return `font-size: 11px`
            
    }
}}


${({ center, right, left }) => {
    switch (true) {
            case center:
                return `text-align: center`;

            case right:
                return `text-align: right`;
                
            case left:
                return `text-align: left`;

            default:
                return `text-align: center`;
            
    }
}}
`

export default TextStyle;