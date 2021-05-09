import styled from 'styled-components/native';
import Text from '../components/Text'

export const Container = styled.View `
    flex: 1;
    
`;

export const RenderContainer = styled.View `
    flex: 1;
    background-color: #141314;
    border-radius: 100px;
`;

export const ParagraphContainer = styled.View `
    margin-top: 10px;
`;

export const AloitaButton = styled.TouchableOpacity `
    margin-bottom: 30px;
    margin-left: 35px;
    width: 80%;
    height: 48px;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    shadow-color: 'rgba(0,0,0, .4)';
    shadow-opacity: 0.5;
    background-color: ${props => props.color ?? '#054dd9'};
`;

export const ButtonContainer = styled.View `
    justify-content: center;
    height: 12%;
    padding: 15px;
`;
//#947AFF
export const IconTouchable = styled.TouchableOpacity `
    position: absolute;
    top: 50px;
    left: 10px;
`;

export const PalauteIcon = styled.TouchableOpacity `
    
`;

export const ModalContainer = styled.View `
`;

export const LottieContainer = styled.View `
    flex: 1;
    margin-top: 20px;
`;

export const Loading = styled.ActivityIndicator.attrs(props => ({
    color: 'orange',
    size: "large",
    align: "center",
    marginTop: 40
}))
``;

export const VideoContainer = styled.View `
    margin-top: 20px;
   `;

export const UtilsContainer = styled.View `
    margin-top: 15px;
    align-items: center;
    justify-content: center;
`;

export const AloitusRenderContainer = styled.View `
    flex: 1;
    background-color: #141314;
`;

export const AloitusButtonContainer = styled.View `
    flex-direction: row;
    margin-top: 25px;
`;

export const ExtraContainer = styled.View `
    flex-direction: row;
    margin-top: 60px;
`;

export const PreviousButton = styled.TouchableOpacity `
    margin-top: 15px;
 
`;
export const NextButton = styled.TouchableOpacity `
    margin-top: 15px;
   
`;
export const DoneButton = styled.TouchableOpacity `
`;

export const LoadingView = styled.View `
    flex: 1;
    justifyContent: center;
    alignItems: center;
    background-color: #141314;
`;

export const ProgressBarContainer = styled.View `
    
`;

export const InputField = styled.TextInput `
    width: 70px;
    margin: 15px;
`;

export const ToistotContainer = styled.View `
    flex-direction: row;
    margin-top: 5px;
    margin-bottom: 15px;
    justify-content: center;
    align-items: center;

`;

export const PainotContainer = styled.View `
    flex-direction: row;
    margin-top: 15px;
    margin-bottom: 15px;
    justify-content: center;
    align-items: center;

`;

export const AdditionalContainer = styled.View `
    margin-top: 35px;
`;

export const BackgroundContainer = styled.View `
    background: #054dd9;
    height: 30%;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
`;


export const LopetaButton = styled.TouchableOpacity `
     margin-bottom: 30px;
    margin-left: 35px;
    width: 80%;
    height: 48px;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    shadow-color: 'rgba(0,0,0, .4)';
    shadow-opacity: 0.5;
    background-color: ${props => props.color ?? '#054dd9'};
    flex-direction: row;
`;

export const PalauteButtonContainer = styled.View `
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 10px;
`;

export const AuthField = styled.TextInput `
    border-bottom-color: #8e93a1;
    border-bottom-width: 0.5px;
    height: 48px;

`;

export const Auth = styled.View `
    margin: 64px 16px 0px;
`;

export const AuthContainer = styled.View `
`;

// welcome back
export const AuthTitle = styled(Text) `   
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
`;

export const HeaderGraphic = styled.View `
    position: absolute;
    width: 100%;
    top: -50px;
    z-index: -100;
`;

export const RightCircle = styled.View `
    background-color: #054dd9;
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 200px;
    right: -100px;
    top: -200px;
`;

export const LeftCircle = styled.View `
    background-color: #000;
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 100px;
    left: -50px;
    top: -50px;
`;

export const Main = styled.View `
    margin-top: 192px;
`;


// sign up // sign in button
export const SignUpContainer = styled.TouchableOpacity `
    margin: 32px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: #054dd9;
    border-radius: 30px;
    
`;

export const SignUp = styled.TouchableOpacity `
`;

export const SignIn = styled.TouchableOpacity `
`;
