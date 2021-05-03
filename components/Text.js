import React from 'react'
import styled from 'styled-components/native'; 
import { Appearance, useColorScheme } from 'react-native-appearance';


Appearance.getColorScheme();


const TextStyle = ({...props}) => {
    const colorScheme = useColorScheme();

    return <Text style={{fontFamily: 'MontserratSemiBold', color: colorScheme === 'dark' ? ('#fff') : ('#000')}} {...props}>{props.children}</Text>
}

const Text = styled.Text`
color: ${props => props.color ?? "#fff"};
margin: ${props => props.margin ?? 0};
padding: ${props => props.padding ?? 0};
marginLeft: ${props => props.marginLeft ?? 0};
marginRight: ${props => props.marginRight ?? 0};
marginTop: ${props => props.marginTop ?? 0};
marginBottom: ${props => props.marginBottom ?? 0};

${({ title, vinkit, vinkkiTitle, large, medium, small, tiny, treeninNimi, toistot }) => {
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
                return `font-size: 13px`

            case tiny:
                return `font-size: 11px`
            
            case treeninNimi:
                return `font-size: 18px`

            case toistot:
                return `font-size: 44px`
                
            default:
                return `font-size: 11px`
            
    }
}}

${({ light, semi, bold, heavy, welcome }) => {
    switch (true) {
            case light:
                return `font-weight: 200`;

            case semi:
                return `font-weight: 300`;

            case bold:
                return `font-weight: 600`;

            case heavy:
                return `font-weight: 700`;


            default:
                return `font-weight: 400`
            
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