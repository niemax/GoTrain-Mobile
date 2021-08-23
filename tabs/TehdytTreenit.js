import React from 'react';
import { Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Appearance, useColorScheme } from 'react-native-appearance';
import TehdytCalendar from '../components/tehdytComponents/TehdytCalendar';
import TehdytChart from '../components/tehdytComponents/TehdytChart';
import TehdytHae from '../components/tehdytComponents/TehdytHae';
import { Container } from '../utils/Styling';

const renderScene = SceneMap({
  first: TehdytCalendar,
  second: TehdytChart,
  third: TehdytHae,
});

Appearance.getColorScheme();

export default function TehdytTreenit() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Kalenteri' },
    { key: 'second', title: 'Tilastot' },
    { key: 'third', title: 'Hae' },
  ]);
  const colorScheme = useColorScheme();

  const renderTabBar = (props) => (
    <TabBar
      activeColor={colorScheme === 'dark' ? '#fff' : '#000'}
      inactiveColor={colorScheme === 'dark' ? '#fff' : '#000'}
      indicatorStyle={{ backgroundColor: '#2301E4' }}
      style={{ backgroundColor: 'transparent', marginTop: 40, marginBottom: 20 }}
      {...props}
    />
  );

  return (
    <Container style={{ backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5' }}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    </Container>
  );
  /*   style={{ backgroundColor: colorScheme === 'dark' ? '#141314' : '#F9F8F5' }}
    >
      <HeaderComponent
        rightComponent={<TouchableOpacity onPress={loggingOut}>{icon}</TouchableOpacity>}
        leftComponent={
          <Text style={{ color: 'white' }} medium>
            MINÄ
          </Text>
        }
        centerComponent={null}
        containerStyle={{ backgroundColor: '#2301E4', borderBottomWidth: 'none' }}
      />

      <TehdytTreenitStats />
      <AgendaComponent />
    </TehdytMainContainer> */
}
