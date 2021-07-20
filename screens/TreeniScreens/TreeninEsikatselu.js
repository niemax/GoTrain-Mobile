import React, { useState, useCallback, useEffect } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Text from '../../components/Text';
import { AloitaButton } from '../../utils/Styling';

const TreeninEsikatselu = ({ route, navigation }) => {
  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  const { nimi, videoID, ohjeet } = route.params;

  const icon = (
    <Ionicons
      name="ios-alert-circle-outline"
      size={24}
      color={colorScheme === 'dark' ? 'white' : 'black'}
    />
  );

  return (
    <Container
      style={{
        backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5',
      }}
    >
      <VideoContainer>
        <YoutubePlayer height={240} videoId={videoID} />
      </VideoContainer>
      <ScrollView>
        <Text large left>
          {' '}
          {nimi}{' '}
        </Text>
        <WarningContainer>
          {icon}
          <Text medium left>
            Muista aina ennen liikettä lämmitellä välttyäksesi loukkaantumisilta.
          </Text>
        </WarningContainer>
        <TextContainer>
          <Text vinkit left>
            {ohjeet}
          </Text>
        </TextContainer>
      </ScrollView>

      <SuljeContainer>
        <AloitaButton onPress={() => navigation.goBack()}>
          <Text style={{ color: '#fff' }} large>
            Sulje
          </Text>
        </AloitaButton>
      </SuljeContainer>
    </Container>
  );
};

export default TreeninEsikatselu;

const Container = styled.View`
  flex: 1;
`;

const VideoContainer = styled.View`
  margin-top: 35px;
`;

const TextContainer = styled.View`
  margin-left: 15px;
  margin-top: 50px;
  flex-direction: row;
`;

const WarningContainer = styled.View`
  flex-direction: row;
  margin-top: 25px;
  margin-left: 10px;
`;

const SuljeContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 12%;
  padding: 15px;
`;
