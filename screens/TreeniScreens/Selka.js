import React from 'react'
import TreeniData from '../../components/TreeniEsittely';
import AloitaTreeni from './TreeninAloitus';
import Esikatselu from '../../components/TreeninEsikatselu';
import { createStackNavigator } from '@react-navigation/stack'



const selkaTreeni = [{
    

        
        id: 1,
        name: 'Leuanveto',
        sarjat: '2-3',
        image: require('../../assets/icons/leuanveto.png'),
        navigationRoute: 'Leuanveto'

    },
    {
        id: 2,
        name: 'Kulmasoutu',
        sarjat: '2-3',
        image: require('../../assets/icons/kulmasoutu.png'),
        navigationRoute: 'Kulmasoutu'


    },
    {
        id: 3,
        name: 'Hauiskääntö',
        sarjat: '2-3',
        image: require('../../assets/icons/hauiskaanto.png'),
        navigationRoute: 'Hauiskaanto'
        

    },
    {
        id: 4,
        name: 'Soutu alataljassa',
        sarjat: 3,
        image: require('../../assets/icons/alatalja.png'),
        navigationRoute: 'Alatalja'


    },
    {
        id: 5,
        name: 'Lat Pushdown',
        sarjat: 3,
        image: require('../../assets/icons/latpushdown.png'),
        navigationRoute: 'Ylatalja'


    },
    {
        id: 6,
        name: 'Vasarakäännöt',
        sarjat: 3,
        image: require('../../assets/icons/vasarakaannot.png'),
        navigationRoute: 'Vasarakaannot'
    },
    
]

export const AloitaSelka = () => {
    return (
        <AloitaTreeni treeni={"selkatreeni"}/>
    );
}

export const Leuanveto = () => {
    return(
      <Esikatselu
      videoID={"-Mbr55h3BeQ"}
      liike="Leuanveto"
      toistot="2 sarjaa 10 toistoa"
      ohjeet="awdawdawaaaaaa"
      />
       
    )
}

export const Kulmasoutu = () => {
    return(
      <Esikatselu
      videoID={"-6oBbHy_zjM"}
      liike="Kulmasoutu"
      toistot="3 sarjaa 10 toistoa"
      ohjeet={`Aseta jalat penkin alle. Vedä jalat siis kuitenkin koukkuun kohti takapuoltasi niin, että pystyt työntämään reisilläsi kohti yläkroppaasi. 
      \n\n- Nosta selkä kaarelle. Mitä enemmän selkäsi on kaarella, sitä lyhyempi on nostomatka ja sitä enemmän saat painoa liikuteltua.
      \n- Vedä lavat yhteen. Yhteen vedetyt lavat luovat penkin päälle ”hyllyn”, josta painoa on helppo puskea ylös. Kun lavat ovat tukevasti yhdessä, lyhenee nostomatka ja kädet tulevat luonnollisemmin kropan sivuille. 
      \n\n- Ota tukeva ote tangosta. Aseta tanko kämmenen alaosalle ja Purista KUNNOLLA.
      \n\n- Puske koko kropalla. 
      `}
      />
    )
}

export const Hauiskaanto = () => {
    return(
      <Esikatselu
      videoID={"2yjwXTZQDDI"}
      liike="Hauiskääntö"
      toistot="3 sarjaa 10 toistoa"
       ohjeet= {`- Asetelma. Seiso pitäen tankoa olkapäidesi edessä, ylläolevan videon mukaisesti. Kapea ote, ranteet suorassa linjassa ja pystysuunnassa olevat kyynärvarret. Lukitse polvesi ja lantiosi.
       \n- Nosta rintaasi. Nosta rintasi kohti kattoa taivuttamalla hieman yläselkääsi. Kuvittele, että yrität koskettaa leukaasi rinnallasi. 
       \n\n- Työnnä. Ota iso hengenveto sisään, pidä se sisälläsi ja työnnä tankoa pystysuorassa linjassa. Älä työnnä sitä pääsi eteen tai taakse, vaan yli.
       \n\n- Liiku eteenpäin. Pysy lähellä tankoa, kun työnnät sitä ylöspäin, liikuta vartaloasi hieman eteenpäin kun tanko on mennyt otsasi ohitse.
       \n\n- Lukitse. Pidä tankoa olkapäidesi yläpuolella ja jalkojen keskellä täydellisen tasapainon ylläpitämiseksi. Lukitse kyynärpääsi ja kohauta olkapäitäsi kohti kattoa.
       `}
       />
    )
}

export const Alatalja = () => {
    return(
       <Esikatselu
      videoID={"dX_nSOOJIsE"}
      liike="Soutu Alataljassa"
      toistot="3 sarjaa 10-12 toistoa"
      ohjeet={`- Asetu dippitelineeseen ja ota noin olkapäiden levyinen ote tangoista. Ponnista suorille käsille, vie olkapäitä alas ja vedä lapoja yhteen. Pidä jännitys koko kropassa ja taivuta jalkoja hieman taakse.
        \n- Käännä ylävartaloa hieman eteenpäin ja laskeudu alas taivuttaen kyynärpäitä niiden osoittaessa samalla suoraan taaksepäin. Laskeudu vähintään 90 asteen kulmaan. Pidä olkapäät ja lavat tiukassa kontrollissa, jotta vältyt vammoilta. Saavutettuasi ala-asennon, lähde nousemaan takaisin ylös räjähtävästi mutta samalla kontrolloidusti, kunnes olet jälleen suorilla käsillä.
        \n\n- Mikäli olet epävarma tekniikan tai voimiesi suhteen, käytä apuna kuminauhaa tai anna treenikaverin ottaa kiinni jaloistasi ja avustaa tarpeen tullen. Näin liike kevenee hieman ja pystyt pitämään tasapainon paremmin. Tällä tavoin saat myös täyden liikeradan liikkeeseen, mikä auttaa kehittämään paremmin lihasmassaa.
        \n\n- Kun saat suoritettua 10 puhdasta dippiä ilman apua, voit lisätä vaikeusastetta ottamalla käyttöön lisäpainot: kiinnitä painolevy painovyöhön tai aseta käsipaino jalkojen väliin.
        `} 

        />
    )
}

export const Ylatalja = () => {
    return(
       <Esikatselu
      videoID={"FeJP4E4Z-PY"}
      liike="Lat Pushdown"
      toistot="3 sarjaa 10 toistoa"
       ohjeet= {`- Asetu dippitelineeseen ja ota noin olkapäiden levyinen ote tangoista. Ponnista suorille käsille, vie olkapäitä alas ja vedä lapoja yhteen. Pidä jännitys koko kropassa ja taivuta jalkoja hieman taakse.
        \n- Käännä ylävartaloa hieman eteenpäin ja laskeudu alas taivuttaen kyynärpäitä niiden osoittaessa samalla suoraan taaksepäin. Laskeudu vähintään 90 asteen kulmaan. Pidä olkapäät ja lavat tiukassa kontrollissa, jotta vältyt vammoilta. Saavutettuasi ala-asennon, lähde nousemaan takaisin ylös räjähtävästi mutta samalla kontrolloidusti, kunnes olet jälleen suorilla käsillä.
        \n\n- Mikäli olet epävarma tekniikan tai voimiesi suhteen, käytä apuna kuminauhaa tai anna treenikaverin ottaa kiinni jaloistasi ja avustaa tarpeen tullen. Näin liike kevenee hieman ja pystyt pitämään tasapainon paremmin. Tällä tavoin saat myös täyden liikeradan liikkeeseen, mikä auttaa kehittämään paremmin lihasmassaa.
        \n\n- Kun saat suoritettua 10 puhdasta dippiä ilman apua, voit lisätä vaikeusastetta ottamalla käyttöön lisäpainot: kiinnitä painolevy painovyöhön tai aseta käsipaino jalkojen väliin.
        `} />
    )
}

export const Vasarakaannot = () => {
    return(
      <Esikatselu
      videoID={"Z57CtFmRMxA"}
      liike="Vasarakäännöt"
      toistot="3 sarjaa 10-15 toistoa"
       ohjeet= {`- Asetu dippitelineeseen ja ota noin olkapäiden levyinen ote tangoista. Ponnista suorille käsille, vie olkapäitä alas ja vedä lapoja yhteen. Pidä jännitys koko kropassa ja taivuta jalkoja hieman taakse.
        \n- Käännä ylävartaloa hieman eteenpäin ja laskeudu alas taivuttaen kyynärpäitä niiden osoittaessa samalla suoraan taaksepäin. Laskeudu vähintään 90 asteen kulmaan. Pidä olkapäät ja lavat tiukassa kontrollissa, jotta vältyt vammoilta. Saavutettuasi ala-asennon, lähde nousemaan takaisin ylös räjähtävästi mutta samalla kontrolloidusti, kunnes olet jälleen suorilla käsillä.
        \n\n- Mikäli olet epävarma tekniikan tai voimiesi suhteen, käytä apuna kuminauhaa tai anna treenikaverin ottaa kiinni jaloistasi ja avustaa tarpeen tullen. Näin liike kevenee hieman ja pystyt pitämään tasapainon paremmin. Tällä tavoin saat myös täyden liikeradan liikkeeseen, mikä auttaa kehittämään paremmin lihasmassaa.
        \n\n- Kun saat suoritettua 10 puhdasta dippiä ilman apua, voit lisätä vaikeusastetta ottamalla käyttöön lisäpainot: kiinnitä painolevy painovyöhön tai aseta käsipaino jalkojen väliin.
        `} />
    )
}
   
const Selka = () => {
   
    return(
        <TreeniData 
        backgroundImage={require('../../assets/selkaToinen.jpg')}
        data={selkaTreeni} 
        treeniText='Selkä / Hauis'
        treeninKesto='60-75min'
        kohdeRyhmaText='Selkä'
        aloitaRoute={'AloitaSelka'}
        />
    );
}

const Stack = createStackNavigator();

    export default () => {
     return(
        <Stack.Navigator
    mode="modal"
    initialRouteName="Selka"
     >

      <Stack.Screen name="Selka" options={{  headerShown: false, headerLeft: null, gestureEnabled: true}}  component={Selka} />
      <Stack.Screen
       name="Leuanveto" options={{ headerTintColor: 'white', headerStyle: {backgroundColor: '#FA4242' }, 
       headerShown: true, headerLeft: null, gestureEnabled: false}} component={Leuanveto} />

      <Stack.Screen name="Kulmasoutu" options={{ headerTintColor: 'white',
       headerStyle: {backgroundColor: '#FA4242' }, 
       headerShown: true, headerLeft: null, gestureEnabled: false}}  component={Kulmasoutu} />

      <Stack.Screen name="Hauiskaanto" options={{ headerTintColor: 'white',
       headerStyle: {backgroundColor: '#FA4242' }, 
       headerShown: true, headerLeft: null, gestureEnabled: false}}  component={Hauiskaanto} />

      <Stack.Screen name="Alatalja" options={{ headerTintColor: 'white',
       headerStyle: {backgroundColor: '#FA4242' }, 
       headerShown: true, headerLeft: null, gestureEnabled: false}}  component={Alatalja} />

      <Stack.Screen name="Ylatalja" options={{ headerTintColor: 'white',
       headerStyle: {backgroundColor: '#FA4242' }, 
       headerShown: true, headerLeft: null, gestureEnabled: false}}  component={Ylatalja} />

      <Stack.Screen name="Vasarakaannot" options={{ headerTintColor: 'white',
       headerStyle: {backgroundColor: '#FA4242' }, 
       headerShown: true, headerLeft: null, gestureEnabled: false}}  component={Vasarakaannot} />

    
      <Stack.Screen name="AloitaSelka"  options={{ headerShown: false, gestureEnabled: false, mode: 'card'}} component={AloitaSelka} />
    </Stack.Navigator>
     )
 }








