import React, { useState, useCallback } from 'react'
import { Button, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons'; 
import { ModalContainer, ModalView, AloitaButton, ButtonContainer, IconTouchable} from '../../components/TrainScreenStyling';
import TreeniData from '../../components/TreeniEsittely';
import { createStackNavigator } from '@react-navigation/stack'
import { WebView } from 'react-native-webview';
import Text from '../../components/Text'
import YoutubePlayer from "react-native-youtube-iframe";
import HeaderComponent from '../../components/HeaderComponent';


const rintaTreeni = [{
        
        
        id: 1,
        name: 'Punnerrukset',
        sarjat: '2-3',
        image: require('../../assets/icons/punnerrukset.png'),
        navigationRoute: 'Punnerrukset'
    },
    {
        id: 2,
        name: 'Penkkipunnerrus',
        sarjat: '2-3',
        image: require('../../assets/icons/penkkipunnerrus.png'),
        navigationRoute: 'Penkkipunnerrus'


    },
    {
        id: 3,
        name: 'Pystypunnerrus',
        sarjat: '2-3',
        image: require('../../assets/icons/pystypunnerrus.png'),
        navigationRoute: 'Pystypunnerrus'


    },
    {
        id: 4,
        name: 'Dipit',
        sarjat: 3,
        image: require('../../assets/icons/dipit.png'),
        navigationRoute: 'Dipit'


    },
    {
        id: 5,
        name: 'Vipunosto sivulle',
        sarjat: 3,
        image: require('../../assets/icons/vipunosto.png'),
        navigationRoute: 'Vipunosto'


    },
    {
        id: 6,
        name: 'Chest fly',
        sarjat: 3,
        image: require('../../assets/icons/chestfly.png'),
        navigationRoute: 'ChestFly'


    },
    {
        id: 7,
        name: 'Tricep pushdown',
        sarjat: 3,
        image: require('../../assets/icons/triceps.png'),
        navigationRoute: 'TricepPushdown'
    }
]


const icon = <Ionicons name="ios-alert-circle-outline" size={24} color="white" />

const VideoPlayer = (props) => {
    const [playing, setPlaying] = useState(false);


    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    return ( 
    
            <YoutubePlayer 
             height={220}
            {...props} //videon id
            />
    )
}


export const Punnerrukset = ({ navigation }) => {
    
    return(
        <Container>
        <VideoContainer>
        <VideoPlayer
        videoId={"-Mbr55h3BeQ"}
      />
      </VideoContainer>
        <ScrollView>
        <Text vinkkiTitle left>  Punnerrukset - <Text medium>3 sarjaa 10 toistoa</Text></Text>
      <WarningContainer>
        <Ionicons name="ios-alert-circle-outline" size={32} color="white" />
        <Text vinkit left>Muista aina ennen liikettä lämmitellä välttyäksesi loukkaantumisilta.</Text>
        </WarningContainer>
      <TextContainer>
      
        <Text vinkit left>{`- Pidä keskivartalo tiukkana ja kroppa suorassa. \n\n- Hengitä sisään alaslaskun aikana, hengitä ulos kun punnerrat itseäsi ylös (eli muista hengittää!)
        \n- Eli kroppa suorana ja keskivartalo tiukkana, pää neutraalissa asennossa. \n\n- Jos et jaksa tehdä normaaleja punnerruksia, älä mene varpaiden vaan polvien varaan.
        `}</Text>
      </TextContainer>
        </ScrollView>

        <SuljeButton onPress={() => navigation.goBack()}>
            <Text color="white" center large>Sulje</Text>
        </SuljeButton>
        </Container>
            
       
    )
}
export const Penkkipunnerrus = ( { navigation }) => {
    return(
        <Container>
        <VideoContainer>
        <VideoPlayer
        height={220}
        videoId={"-6oBbHy_zjM"}
      />

      </VideoContainer>
        <ScrollView>
        <Text vinkkiTitle left>  Penkkipunnerrus - <Text medium>3 sarjaa 10 toistoa</Text></Text>
        <WarningContainer>
        <Ionicons name="ios-alert-circle-outline" size={32} color="white" />
        <Text vinkit left>Muista aina ennen liikettä lämmitellä välttyäksesi loukkaantumisilta.</Text>
        </WarningContainer>
      <TextContainer>

        <Text vinkit left>
        {`- Aseta jalat penkin alle. Vedä jalat siis kuitenkin koukkuun kohti takapuoltasi niin, että pystyt työntämään reisilläsi kohti yläkroppaasi. \n\n- Nosta selkä kaarelle. Mitä enemmän selkäsi on kaarella, sitä lyhyempi on nostomatka ja sitä enemmän saat painoa liikuteltua. 
        \n- Vedä lavat yhteen. Yhteen vedetyt lavat luovat penkin päälle ”hyllyn”, josta painoa on helppo puskea ylös. Kun lavat ovat tukevasti yhdessä, lyhenee nostomatka ja kädet tulevat luonnollisemmin kropan sivuille. \n\n- Ota tukeva ote tangosta. Aseta tanko kämmenen alaosalle ja Purista KUNNOLLA.
        \n\n- Puske koko kropalla. 
        `}
        </Text>
      </TextContainer>
        </ScrollView>

        <SuljeButton onPress={() => navigation.goBack()}>
            <Text center large>Sulje</Text>
        </SuljeButton>
        </Container>
            
       
    )
}
export const Pystypunnerrus = ({ navigation }) => {
    return(
       <Container>
        <VideoContainer>
        <VideoPlayer
        height={220}
        videoId={"2yjwXTZQDDI"}
      />

      </VideoContainer>
        <ScrollView>
        <Text vinkkiTitle left>  Pystypunnerrus - <Text medium>2-3 sarjaa 10 toistoa</Text></Text>
        <WarningContainer>
        <Ionicons name="ios-alert-circle-outline" size={32} color="white" />
        <Text vinkit left>Muista aina ennen liikettä lämmitellä välttyäksesi loukkaantumisilta.</Text>
        </WarningContainer>
      <TextContainer>

        <Text vinkit left>
        {`- Asetelma. Seiso pitäen tankoa olkapäidesi edessä, ylläolevan videon mukaisesti. Kapea ote, ranteet suorassa linjassa ja pystysuunnassa olevat kyynärvarret. Lukitse polvesi ja lantiosi.
        \n- Nosta rintaasi. Nosta rintasi kohti kattoa taivuttamalla hieman yläselkääsi. Kuvittele, että yrität koskettaa leukaasi rinnallasi. 
        \n\n- Työnnä. Ota iso hengenveto sisään, pidä se sisälläsi ja työnnä tankoa pystysuorassa linjassa. Älä työnnä sitä pääsi eteen tai taakse, vaan yli.
        \n\n- Liiku eteenpäin. Pysy lähellä tankoa, kun työnnät sitä ylöspäin, liikuta vartaloasi hieman eteenpäin kun tanko on mennyt otsasi ohitse.
        \n\n- Lukitse. Pidä tankoa olkapäidesi yläpuolella ja jalkojen keskellä täydellisen tasapainon ylläpitämiseksi. Lukitse kyynärpääsi ja kohauta olkapäitäsi kohti kattoa.
        `}
        </Text>
      </TextContainer>
        </ScrollView>
        
        <SuljeButton onPress={() => navigation.goBack()}>
            <Text center large>Sulje</Text>
        </SuljeButton>
        </Container>
    )
}
export const Dipit = ({ navigation }) => {
    return(
        <Container>
        <VideoContainer>
        <VideoPlayer
        height={220}
        videoId={"dX_nSOOJIsE"}
      />

      </VideoContainer>
        <ScrollView>
        <Text vinkkiTitle left>  Dipit - <Text medium>3 sarjaa 10-12 toistoa</Text></Text>
        <WarningContainer>
        <Ionicons name="ios-alert-circle-outline" size={32} color="white" />
        <Text vinkit left>Muista aina ennen liikettä lämmitellä välttyäksesi loukkaantumisilta.</Text>
        </WarningContainer>
      <TextContainer>

        <Text vinkit left>
        {`- Asetu dippitelineeseen ja ota noin olkapäiden levyinen ote tangoista. Ponnista suorille käsille, vie olkapäitä alas ja vedä lapoja yhteen. Pidä jännitys koko kropassa ja taivuta jalkoja hieman taakse.
        \n- Käännä ylävartaloa hieman eteenpäin ja laskeudu alas taivuttaen kyynärpäitä niiden osoittaessa samalla suoraan taaksepäin. Laskeudu vähintään 90 asteen kulmaan. Pidä olkapäät ja lavat tiukassa kontrollissa, jotta vältyt vammoilta. Saavutettuasi ala-asennon, lähde nousemaan takaisin ylös räjähtävästi mutta samalla kontrolloidusti, kunnes olet jälleen suorilla käsillä.
        \n\n- Mikäli olet epävarma tekniikan tai voimiesi suhteen, käytä apuna kuminauhaa tai anna treenikaverin ottaa kiinni jaloistasi ja avustaa tarpeen tullen. Näin liike kevenee hieman ja pystyt pitämään tasapainon paremmin. Tällä tavoin saat myös täyden liikeradan liikkeeseen, mikä auttaa kehittämään paremmin lihasmassaa.
        \n\n- Kun saat suoritettua 10 puhdasta dippiä ilman apua, voit lisätä vaikeusastetta ottamalla käyttöön lisäpainot: kiinnitä painolevy painovyöhön tai aseta käsipaino jalkojen väliin.
        `}
        </Text>
      </TextContainer>
        </ScrollView>
        
        <SuljeButton onPress={() => navigation.goBack()}>
            <Text center large>Sulje</Text>
        </SuljeButton>
        </Container>
    )
}
export const Vipunosto = ({ navigation }) => {
    return(
        <Container>
        <VideoContainer>
        <VideoPlayer
        height={220}
        videoId={"FeJP4E4Z-PY"}
      />

      </VideoContainer>
        <ScrollView>
        <Text vinkkiTitle left>  Vipunosto sivulle - <Text medium>3 sarjaa 10-12 toistoa</Text></Text>
        <WarningContainer>
        <Ionicons name="ios-alert-circle-outline" size={32} color="white" />
        <Text vinkit left>Muista aina ennen liikettä lämmitellä välttyäksesi loukkaantumisilta.</Text>
        </WarningContainer>
      <TextContainer>

        <Text vinkit left>
        {`- Asetu dippitelineeseen ja ota noin olkapäiden levyinen ote tangoista. Ponnista suorille käsille, vie olkapäitä alas ja vedä lapoja yhteen. Pidä jännitys koko kropassa ja taivuta jalkoja hieman taakse.
        \n- Käännä ylävartaloa hieman eteenpäin ja laskeudu alas taivuttaen kyynärpäitä niiden osoittaessa samalla suoraan taaksepäin. Laskeudu vähintään 90 asteen kulmaan. Pidä olkapäät ja lavat tiukassa kontrollissa, jotta vältyt vammoilta. Saavutettuasi ala-asennon, lähde nousemaan takaisin ylös räjähtävästi mutta samalla kontrolloidusti, kunnes olet jälleen suorilla käsillä.
        \n\n- Mikäli olet epävarma tekniikan tai voimiesi suhteen, käytä apuna kuminauhaa tai anna treenikaverin ottaa kiinni jaloistasi ja avustaa tarpeen tullen. Näin liike kevenee hieman ja pystyt pitämään tasapainon paremmin. Tällä tavoin saat myös täyden liikeradan liikkeeseen, mikä auttaa kehittämään paremmin lihasmassaa.
        \n\n- Kun saat suoritettua 10 puhdasta dippiä ilman apua, voit lisätä vaikeusastetta ottamalla käyttöön lisäpainot: kiinnitä painolevy painovyöhön tai aseta käsipaino jalkojen väliin.
        `}
        </Text>
      </TextContainer>
        </ScrollView>
        
        <SuljeButton onPress={() => navigation.goBack()}>
            <Text center large>Sulje</Text>
        </SuljeButton>
        </Container>
    )
}
export const  ChestFly = ({ navigation }) => {
    return(
        <Container>
        <VideoContainer>
        <VideoPlayer
        height={220}
        videoId={"Z57CtFmRMxA"}
      />

      </VideoContainer>
        <ScrollView>
        <Text vinkkiTitle left>  Chest Fly - <Text medium>3 sarjaa 10-12 toistoa</Text></Text>
        <WarningContainer>
        <Ionicons name="ios-alert-circle-outline" size={32} color="white" />
        <Text vinkit left>Muista aina ennen liikettä lämmitellä välttyäksesi loukkaantumisilta.</Text>
        </WarningContainer>
      <TextContainer>

        <Text vinkit left>
        {`- Asetu dippitelineeseen ja ota noin olkapäiden levyinen ote tangoista. Ponnista suorille käsille, vie olkapäitä alas ja vedä lapoja yhteen. Pidä jännitys koko kropassa ja taivuta jalkoja hieman taakse.
        \n- Käännä ylävartaloa hieman eteenpäin ja laskeudu alas taivuttaen kyynärpäitä niiden osoittaessa samalla suoraan taaksepäin. Laskeudu vähintään 90 asteen kulmaan. Pidä olkapäät ja lavat tiukassa kontrollissa, jotta vältyt vammoilta. Saavutettuasi ala-asennon, lähde nousemaan takaisin ylös räjähtävästi mutta samalla kontrolloidusti, kunnes olet jälleen suorilla käsillä.
        \n\n- Mikäli olet epävarma tekniikan tai voimiesi suhteen, käytä apuna kuminauhaa tai anna treenikaverin ottaa kiinni jaloistasi ja avustaa tarpeen tullen. Näin liike kevenee hieman ja pystyt pitämään tasapainon paremmin. Tällä tavoin saat myös täyden liikeradan liikkeeseen, mikä auttaa kehittämään paremmin lihasmassaa.
        \n\n- Kun saat suoritettua 10 puhdasta dippiä ilman apua, voit lisätä vaikeusastetta ottamalla käyttöön lisäpainot: kiinnitä painolevy painovyöhön tai aseta käsipaino jalkojen väliin.
        `}
        </Text>
      </TextContainer>
        </ScrollView>
        
        <SuljeButton onPress={() => navigation.goBack()}>
            <Text center large>Sulje</Text>
        </SuljeButton>
        </Container> 
    )
}
export const TricepPushdown = ({ navigation }) => {
    return(
        <Container>
        <VideoContainer>
        <VideoPlayer
        height={220}
        videoId={"Z57CtFmRMxA"}
      />

      </VideoContainer>
        <ScrollView>
        <Text vinkkiTitle left>  Tricep Pushdown - <Text medium>3 sarjaa 10-12 toistoa</Text></Text>
        <WarningContainer>
        <Ionicons name="ios-alert-circle-outline" size={32} color="white" />
        <Text vinkit left>Muista aina ennen liikettä lämmitellä välttyäksesi loukkaantumisilta.</Text>
        </WarningContainer>
      <TextContainer>

        <Text vinkit left>
        {`- Seiso kasvot kohti talja-asemaa ja tartu ylätaljaan kiinnitettyyn köyteen niin, että peukalot tulevat ylimmäisiksi. Tuo kyynärpäät lähelle kylkiä niin, että kyynärvarret ovat
        \n- Ojenna kyynärvarret kohti lattiaa ja kierrä samalla köyttä sisäänpäin niin, että rystysesi ovat kohti lattiaa, kun kätesi ovat täysin ojennetut. Pidä asento hetken ja palaa sitten nojaa lantiosta hieman eteenpäin.Mikäli olet epävarma tekniikan tai voimiesi suhteen, käytä apuna kuminauhaa tai anna treenikaverin ottaa kiinni jaloistasi ja avustaa tarpeen tullen. Näin liike kevenee hieman ja pystyt pitämään tasapainon paremmin. Tällä tavoin saat myös täyden liikeradan liikkeeseen, mikä auttaa kehittämään paremmin lihasmassaa.
        \n\n- Pidä leuka vaakatasossa, jotta selkäsi pysyy hyvässä asennossa.
        \n\n- Pidä kyynärpääsi vakaasti paikoillaan liikkeen aikana.
        `}
        </Text>
      </TextContainer>
        </ScrollView>
        
        <SuljeButton onPress={() => navigation.goBack()}>
            <Text center large>Sulje</Text>
        </SuljeButton>
        </Container>  
    )
}

    const Rinta = () => {
   
    return(
        <TreeniData 
        backgroundImage={require('../../assets/rintaToinen.jpg')}
        data={rintaTreeni} 
        treeniText='Rinta / Ojentaja / Olkapää'
        treeninKesto='60-75min'
        kohdeRyhmaText='Rinta'
        />
    );
}


    const Stack = createStackNavigator();

    export default () => {
     return(
        <Stack.Navigator
    mode="modal"
    initialRouteName="Rinta"
  
    
     >
      <Stack.Screen name="Rinta" options={{  headerShown: false, headerLeft: null }}  component={Rinta} />
      <Stack.Screen
       name="Punnerrukset" 
       options=
       {{ headerTintColor: 'white', headerStyle: {backgroundColor: '#FA4242' }, 
       headerShown: true, headerLeft: null, gestureEnabled: false}}
         component={Punnerrukset} />
      <Stack.Screen name="Penkkipunnerrus" 
      options=
      {{ headerTintColor: 'white',
       headerStyle: {backgroundColor: '#FA4242' }, 
       headerShown: true, headerLeft: null, gestureEnabled: false}}  component={Penkkipunnerrus} />

      <Stack.Screen name="Pystypunnerrus" options={{ headerTintColor: 'white',
       headerStyle: {backgroundColor: '#FA4242' }, 
       headerShown: true, headerLeft: null, gestureEnabled: false}}  component={Pystypunnerrus} />

      <Stack.Screen name="Dipit" options={{ headerTintColor: 'white',
       headerStyle: {backgroundColor: '#FA4242' }, 
       headerShown: true, headerLeft: null, gestureEnabled: false}}  component={Dipit} />

      <Stack.Screen name="Vipunosto" options={{ headerTintColor: 'white',
       headerStyle: {backgroundColor: '#FA4242' }, 
       headerShown: true, headerLeft: null, gestureEnabled: false}}  component={Vipunosto} />

      <Stack.Screen name="ChestFly" options={{ headerTintColor: 'white',
       headerStyle: {backgroundColor: '#FA4242' }, 
       headerShown: true, headerLeft: null, gestureEnabled: false}}  component={ChestFly} />

      <Stack.Screen name="TricepPushdown" options={{ headerTintColor: 'white',
       headerStyle: {backgroundColor: '#FA4242' }, 
       headerShown: true, headerLeft: null, gestureEnabled: false}} component={TricepPushdown} />

    
    </Stack.Navigator>
     )
    
 }
   



const Container = styled.View`
    background-color: #141314;
    height: 100%;
`;

const VideoContainer = styled.View`
`;

const TextContainer = styled.View`
    margin-left: 15px;
    margin-top: 50px;
    flex-direction: row
`;

const WarningContainer = styled.View`
    flex-direction: row;
    margin-top: 25px;
    margin-left: 10px;
`;


const SuljeButton = styled.TouchableOpacity`
align-items: center;
height: 48px;
justify-content: center;
border-radius: 50px;
background-color: ${props => props.color ?? '#FA4242'};
`;
