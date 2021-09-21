import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const TehdytMainContainer = styled.View`
  flex: 1;
`;
export const TehdytTreenitBoxContainer = styled.View`
  height: 90px;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  margin-left: 20px;
  border-radius: 20px;
  flex-direction: row;
`;
export const TehdytTreenitContainer = styled.View`
  flex: 1;
  background-color: #2301e4;
  border-bottom-left-radius: 30px;
  height: 50px;
`;

export const LopetusCardsContainer = styled.View`
  border-bottom-left-radius: 30px;
  height: 220px;
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
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const AgendaView = styled.View``;
export const RenderContainer = styled.View`
  flex: 1;
  background-color: #141314;
`;

export const ParagraphContainer = styled.View`
  margin-top: 10px;
`;

export const AloitaButton = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: #338467;
`;

export const LopetaButton = styled.TouchableOpacity`
  width: 350px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #338467;
`;

export const FloatingActionButton = styled.TouchableOpacity`
  elevation: 6;
  width: 65px;
  height: 65px;
  justify-content: center;
  border-radius: 60px;
  background-color: #338467;
`;

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 12%;
`;

export const SignupButtonContainer = styled.View`
  margin-top: 30px;
`;
//#947AFF
export const IconTouchable = styled.TouchableOpacity`
  background-color: grey;
  opacity: 0.5;
  height: 35px;
  margin-left: 5px;
  width: 35px;
  justify-content: center;
  border-radius: 25px;
`;
export const IconTouchable2 = styled.TouchableOpacity`
  margin-left: 10px;
`;
export const ProfileIcon = styled.TouchableOpacity`
  margin-top: 5px;
`;
export const PalauteIcon = styled.TouchableOpacity``;

export const ModalContainer = styled.View``;

export const LottieContainer = styled.View`
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const SplashScreenContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #338467;
`;

export const SplashAdditionalContainer = styled.View``;

export const VideoContainer = styled.View``;

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
  margin-top: 150;
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

export const TaukoButton = styled.TouchableOpacity`
  height: 50px;
  width: 80px;
  background-color: #e09d00;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const JatkaButton = styled.TouchableOpacity`
  height: 50px;
  width: 70px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: #34b700;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const LisaAikaButton = styled.TouchableOpacity`
  height: 50px;
  width: 80px;
  background-color: #30f
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const MinusAikaButton = styled.TouchableOpacity``;

export const WelcomeNameContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
