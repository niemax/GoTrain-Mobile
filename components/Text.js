import React from 'react'
import styled from 'styled-components/native'; 


const TextStyle = ({...props}) => {
    return <Text style={{fontFamily: 'MontserratBold'}} {...props}>{props.children}</Text>
}

const Text = styled.Text`
color: ${props => props.color ?? "#000"};
margin: ${props => props.margin ?? 0};
padding: ${props => props.padding ?? 0};

${({ title, large, medium, small, tiny }) => {
    switch (true) {
            case title:
                return `font-size: 32px`

            case large:
                return `font-size: 24px`

            case medium:
                return `font-size: 16px`

            case small:
                return `font-size: 13px`

            case tiny:
                return `font-size: 11px`

            // #017472


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