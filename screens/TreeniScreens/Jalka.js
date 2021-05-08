import React from 'react'
import TreeniEsittelyData from '../../components/TreeniEsittely';
import { createStackNavigator } from '@react-navigation/stack'
import AloitaTreeni from './TreeninAloitus';
import Esikatselu from '../../components/TreeninEsikatselu';


    const AloitaJalka = () => {
    return (
        <AloitaTreeni treeni={"jalkatreeni"}/>
    );

}

    const Kyykyt = () => {
    return(
      <Esikatselu
      videoID={"U3HlEF_E9fo"}
      liike="Kyykyt"
      ohjeet="awdawdawaaaaaa"
      
      />
       
    )
}

    const Jalkaprassi = () => {
    return(
      <Esikatselu
      videoID={"GvRgijoJ2xY"}
      liike="Jalkaprässi"
      ohjeet={`Aseta jalat penkin alle. Vedä jalat siis kuitenkin koukkuun kohti takapuoltasi niin, että pystyt työntämään reisilläsi kohti yläkroppaasi. 
      \n\n- Nosta selkä kaarelle. Mitä enemmän selkäsi on kaarella, sitä lyhyempi on nostomatka ja sitä enemmän saat painoa liikuteltua.
      \n- Vedä lavat yhteen. Yhteen vedetyt lavat luovat penkin päälle ”hyllyn”, josta painoa on helppo puskea ylös. Kun lavat ovat tukevasti yhdessä, lyhenee nostomatka ja kädet tulevat luonnollisemmin kropan sivuille. 
      \n\n- Ota tukeva ote tangosta. Aseta tanko kämmenen alaosalle ja Purista KUNNOLLA.
      \n\n- Puske koko kropalla. 
      `}
      />
    )
}

    const BulgAskel = () => {
    return(
      <Esikatselu
      videoID={"HBYGeyb4sSM"}
      liike="Bulgarialainen askelkyykky"
       ohjeet= {`- Asetelma. Seiso pitäen tankoa olkapäidesi edessä, ylläolevan videon mukaisesti. Kapea ote, ranteet suorassa linjassa ja pystysuunnassa olevat kyynärvarret. Lukitse polvesi ja lantiosi.
       \n- Nosta rintaasi. Nosta rintasi kohti kattoa taivuttamalla hieman yläselkääsi. Kuvittele, että yrität koskettaa leukaasi rinnallasi. 
       \n\n- Työnnä. Ota iso hengenveto sisään, pidä se sisälläsi ja työnnä tankoa pystysuorassa linjassa. Älä työnnä sitä pääsi eteen tai taakse, vaan yli.
       \n\n- Liiku eteenpäin. Pysy lähellä tankoa, kun työnnät sitä ylöspäin, liikuta vartaloasi hieman eteenpäin kun tanko on mennyt otsasi ohitse.
       \n\n- Lukitse. Pidä tankoa olkapäidesi yläpuolella ja jalkojen keskellä täydellisen tasapainon ylläpitämiseksi. Lukitse kyynärpääsi ja kohauta olkapäitäsi kohti kattoa.
       `}
       />
    )
}

    const Lantionnosto = () => {
    return(
       <Esikatselu
      videoID={"dX_nSOOJIsE"}
      liike="Lantionnosto"
      ohjeet={`- Asetu dippitelineeseen ja ota noin olkapäiden levyinen ote tangoista. Ponnista suorille käsille, vie olkapäitä alas ja vedä lapoja yhteen. Pidä jännitys koko kropassa ja taivuta jalkoja hieman taakse.
        \n- Käännä ylävartaloa hieman eteenpäin ja laskeudu alas taivuttaen kyynärpäitä niiden osoittaessa samalla suoraan taaksepäin. Laskeudu vähintään 90 asteen kulmaan. Pidä olkapäät ja lavat tiukassa kontrollissa, jotta vältyt vammoilta. Saavutettuasi ala-asennon, lähde nousemaan takaisin ylös räjähtävästi mutta samalla kontrolloidusti, kunnes olet jälleen suorilla käsillä.
        \n\n- Mikäli olet epävarma tekniikan tai voimiesi suhteen, käytä apuna kuminauhaa tai anna treenikaverin ottaa kiinni jaloistasi ja avustaa tarpeen tullen. Näin liike kevenee hieman ja pystyt pitämään tasapainon paremmin. Tällä tavoin saat myös täyden liikeradan liikkeeseen, mikä auttaa kehittämään paremmin lihasmassaa.
        \n\n- Kun saat suoritettua 10 puhdasta dippiä ilman apua, voit lisätä vaikeusastetta ottamalla käyttöön lisäpainot: kiinnitä painolevy painovyöhön tai aseta käsipaino jalkojen väliin.
        `} 

        />
    )
}


    const Jalka = () => {
    return(
        // MITÄ NÄISTÄ APISTA? TREENITEXT, TREENINKESTO, KOHDERYHMÄ, ALOITAROUTE -> poistas rintatreenidata
        <TreeniEsittelyData 
        backgroundImage={require('../../assets/jalatToinen.jpg')}
        treeni={'jalkatreeni'} 
        />
    );
}

    const Stack = createStackNavigator();

    export default () => {
     return(
        <Stack.Navigator
    mode="modal"
    initialRouteName="Jalka"
     >

      <Stack.Screen name="Jalka" options={{  headerShown: false, headerLeft: null, gestureEnabled: true }}  component={Jalka} />
      <Stack.Screen name="Kyykyt" options={{  headerShown: false, headerLeft: null, gestureEnabled: false}} component={Kyykyt} />
      <Stack.Screen name="Jalkaprassi" options={{ headerShown: false, gestureEnabled: false}}  component={Jalkaprassi} />
      <Stack.Screen name="BulgAskel" options={{ headerShown: false, gestureEnabled: false}}  component={BulgAskel} />
      <Stack.Screen name="Lantionnosto" options={{ headerShown: false,  gestureEnabled: false}}  component={Lantionnosto} />
      <Stack.Screen name="AloitaJalka"  options={{ headerShown: false, gestureEnabled: false, headerStyle: { backgroundColor: '#141314', shadowColor: 'transparent' }}} component={AloitaJalka} />
    </Stack.Navigator>

    
     )
 }
   