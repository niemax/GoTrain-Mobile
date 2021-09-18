import React from 'react';
import { Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Appearance, useColorScheme } from 'react-native-appearance';
import TehdytCalendar from '../components/tehdytTabViewScreens/TehdytCalendar';
import TehdytChart from '../components/tehdytTabViewScreens/TehdytChart';
import TehdytHae from '../components/tehdytTabViewScreens/TehdytHae';
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
      lazy
      activeColor={colorScheme === 'dark' ? '#fff' : '#000'}
      inactiveColor={colorScheme === 'dark' ? '#fff' : '#000'}
      indicatorStyle={{ backgroundColor: '#2301E4' }}
      style={{ backgroundColor: 'transparent', marginTop: 40, marginBottom: 20 }}
      {...props}
    />
  );

  return (
    <Container style={{ backgroundColor: colorScheme === 'dark' ? '#141314' : 'white' }}>
      <TabView
        swipeEnabled="false"
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        keyboardDismissMode="none"
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    </Container>
  );
}
