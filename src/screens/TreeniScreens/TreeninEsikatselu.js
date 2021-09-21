import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Appearance, useColorScheme } from 'react-native-appearance';
import Text from '../../components/Text';

const TreeninEsikatselu = ({ videoID, ohjeet }) => {
  Appearance.getColorScheme();
  const colorScheme = useColorScheme();

  const icon = <Feather name="info" size={24} color={colorScheme === 'dark' ? 'white' : 'black'} />;

  return (
    <>
      <YoutubePlayer height={230} videoId={videoID} />
      <ScrollView>
        <WarningContainer>
          {icon}
          <Text medium left>
            Muista aina ennen liikettä lämmitellä välttyäksesi loukkaantumisilta.
          </Text>
        </WarningContainer>
        <TextContainer>
          <Text vinkit left>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
            the cites of the word in classical literature, discovered the undoubtable source. Lorem
            Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
            Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
            theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk
            of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
            1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from the 1914 translation
            by H. Rackham. in their exact original form, accompanied by English versions from the
            1914 translation by H. Rackham. in their exact original form, accompanied by English
            versions from the 1914 translation by H. Rackham. in their exact original form,
            accompanied by English versions from the 1914 translation by H. Rackham. in their exact
            original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </Text>
        </TextContainer>
      </ScrollView>
    </>
  );
};

export default TreeninEsikatselu;

const TextContainer = styled.View`
  margin-left: 15px;
  margin-top: 30px;
  margin-bottom: 140px;
  flex-direction: row;
`;

const WarningContainer = styled.View`
  flex-direction: row;
  margin-top: 25px;
  margin-left: 10px;
`;
