import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const TehdytMainContainer = styled.View`
  background-color: grey;
  flex: 1;
`;
export const TehdytTreenitBoxContainer = styled.View`
  height: 100px;
  justify-content: center;
  width: 80%;
  margin-left: 40px;
  position: relative;
  border-radius: 25px;
  bottom: 25;
`;
export const TehdytTreenitContainer = styled.View`
  background-color: #2301e4;
  border-bottom-left-radius: 30px;
  flex: 0.1;
`;
export const AgendaContainer = styled.View``;
export const SignupContainer = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  flex: 2;
  background-color: #2301e4;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 10px;
`;

export const Actions = styled.View``;

export const ContentLoaderView = styled.View`
  margin-top: 20px;
  flex: 1;
  margin-left: 4px;
`;

export const RenderContainer = styled.View`
  flex: 1;
  background-color: #141314;
`;

export const ParagraphContainer = styled.View`
  margin-top: 10px;
`;

export const AloitaButton = styled.TouchableOpacity`
  elevation: 6;
  width: 80%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #2301e4;
`;

export const FloatingActionButton = styled.TouchableOpacity`
  elevation: 6;
  width: 65px;
  height: 65px;
  justify-content: center;
  border-radius: 60px;
  background-color: #2301e4;
`;

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 12%;
  padding: 0px;
`;

export const SignupButtonContainer = styled.View`
  margin-top: 30px;
`;
//#947AFF
export const IconTouchable = styled.TouchableOpacity``;

export const PalauteIcon = styled.TouchableOpacity``;

export const ModalContainer = styled.View``;

export const LottieContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const SplashScreenContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #2301e4;
`;

export const SplashAdditionalContainer = styled.View``;

export const VideoContainer = styled.View`
  margin-top: 10px;
`;

export const UtilsContainer = styled.View`
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const AloitusRenderContainer = styled.View`
  flex: 1;
  background-color: #141314;
`;
export const TreeninAloitusLoadingContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const DialogContainer = styled.View`
  flex: 1;
`;

export const MainDataContainer = styled.View`
  flex: 1;
`;

export const SeuraavaksiContainer = styled.View`
  margin-top: 80px;
`;

export const AloitusButtonContainer = styled.View`
  flex-direction: row;
  margin-top: 80px;
`;

export const ExtraContainer = styled.View`
  margin-top: 60;
  flex-direction: row;
  justify-content: space-between;
`;

export const PreviousButton = styled.TouchableOpacity`
  margin-top: 15px;
  margin-right: 30px;
`;
export const NextButton = styled.TouchableOpacity`
  margin-top: 15px;
  margin-left: 30px;
`;
export const DoneButton = styled.TouchableOpacity``;

export const LoadingView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #141314;
`;

export const Loading = styled.ActivityIndicator`
  margin-top: 30px;
`;

export const ProgressBarContainer = styled.View`
  margin-top: 5px;
`;
export const InputField = styled.TextInput`
  width: 70px;
  margin: 15px;
`;

export const ToistotContainer = styled.View`
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
`;

export const PainotContainer = styled.View`
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
`;

export const AdditionalContainer = styled.View``;

export const BackgroundContainer = styled.View`
  background: #054dd9;
  height: 30%;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const LopetaButton = styled.TouchableOpacity`
  margin-bottom: 30px;
  margin-left: 35px;
  width: 80%;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  shadow-color: 'rgba(0,0,0, .4)';
  shadow-opacity: 0.5;
  background-color: ${(props) => props.color ?? '#054dd9'};
  flex-direction: row;
`;

export const PalauteButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
`;

export const AuthField = styled.TextInput`
  border-bottom-color: #8e93a1;
  border-bottom-width: 0.3px;
  color: #fff;
  margin-top: 10px;
`;

export const Auth = styled.View`
  margin: 64px 16px 0px;
`;

export const AuthContainer = styled.View``;

export const HeaderGraphic = styled.View`
  position: absolute;
  width: 100%;
  top: -50px;
  z-index: -100;
`;

export const SignUp = styled.TouchableOpacity`
  margin-bottom: 30px;
  margin-left: 35px;
  width: 80%;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  shadow-color: 'rgba(0,0,0, .4)';
  shadow-opacity: 0.5;
  background-color: ${(props) => props.color ?? '#fff'};
`;

export const SignIn = styled.TouchableOpacity`
  margin-bottom: 30px;
  margin-left: 35px;
  width: 80%;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  shadow-color: 'rgba(0,0,0, .4)';
  shadow-opacity: 0.5;
  background-color: ${(props) => props.color ?? '#fff'};
`;
