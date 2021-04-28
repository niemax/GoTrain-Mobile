import React from 'react'
import { Button } from 'react-native';
import TreeniEsittelyData from '../../components/TreeniEsittely';
import { createStackNavigator } from '@react-navigation/stack'
import AloitaTreeni from './TreeninAloitus';
import Esikatselu from '../../components/TreeninEsikatselu';
import { rintaTreeniData } from '../../components/TreeniEsikatseluData'


    const AloitaRinta = () => {
    return (
        <AloitaTreeni treeni={"rintatreeni"}/>
    );

}

    const Punnerrukset = () => {
    return(
      <Esikatselu
      videoID={"-Mbr55h3BeQ"}
      liike="Punnerrukset"
      toistot="3 sarjaa 10 toistoa"
      ohjeet="awdawdawaaaaaa"
      
      />
       
    )
}

    const Penkkipunnerrus = () => {
    return(
      <Esikatselu
      videoID={"-6oBbHy_zjM"}
      liike="Penkkipunnerrus"
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

    const Pystypunnerrus = () => {
    return(
      <Esikatselu
      videoID={"2yjwXTZQDDI"}
      liike="Penkkipunnerrus"
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

    const Dipit = () => {
    return(
       <Esikatselu
      videoID={"dX_nSOOJIsE"}
      liike="Dipit"
      toistot="3 sarjaa 10-12 toistoa"
      ohjeet={`- Asetu dippitelineeseen ja ota noin olkapäiden levyinen ote tangoista. Ponnista suorille käsille, vie olkapäitä alas ja vedä lapoja yhteen. Pidä jännitys koko kropassa ja taivuta jalkoja hieman taakse.
        \n- Käännä ylävartaloa hieman eteenpäin ja laskeudu alas taivuttaen kyynärpäitä niiden osoittaessa samalla suoraan taaksepäin. Laskeudu vähintään 90 asteen kulmaan. Pidä olkapäät ja lavat tiukassa kontrollissa, jotta vältyt vammoilta. Saavutettuasi ala-asennon, lähde nousemaan takaisin ylös räjähtävästi mutta samalla kontrolloidusti, kunnes olet jälleen suorilla käsillä.
        \n\n- Mikäli olet epävarma tekniikan tai voimiesi suhteen, käytä apuna kuminauhaa tai anna treenikaverin ottaa kiinni jaloistasi ja avustaa tarpeen tullen. Näin liike kevenee hieman ja pystyt pitämään tasapainon paremmin. Tällä tavoin saat myös täyden liikeradan liikkeeseen, mikä auttaa kehittämään paremmin lihasmassaa.
        \n\n- Kun saat suoritettua 10 puhdasta dippiä ilman apua, voit lisätä vaikeusastetta ottamalla käyttöön lisäpainot: kiinnitä painolevy painovyöhön tai aseta käsipaino jalkojen väliin.
        `} 

        />
    )
}

    const Vipunosto = () => {
    return(
       <Esikatselu
      videoID={"FeJP4E4Z-PY"}
      liike="Vipunosto Sivulle"
      toistot="3 sarjaa 10 toistoa"
       ohjeet= {`- Asetu dippitelineeseen ja ota noin olkapäiden levyinen ote tangoista. Ponnista suorille käsille, vie olkapäitä alas ja vedä lapoja yhteen. Pidä jännitys koko kropassa ja taivuta jalkoja hieman taakse.
        \n- Käännä ylävartaloa hieman eteenpäin ja laskeudu alas taivuttaen kyynärpäitä niiden osoittaessa samalla suoraan taaksepäin. Laskeudu vähintään 90 asteen kulmaan. Pidä olkapäät ja lavat tiukassa kontrollissa, jotta vältyt vammoilta. Saavutettuasi ala-asennon, lähde nousemaan takaisin ylös räjähtävästi mutta samalla kontrolloidusti, kunnes olet jälleen suorilla käsillä.
        \n\n- Mikäli olet epävarma tekniikan tai voimiesi suhteen, käytä apuna kuminauhaa tai anna treenikaverin ottaa kiinni jaloistasi ja avustaa tarpeen tullen. Näin liike kevenee hieman ja pystyt pitämään tasapainon paremmin. Tällä tavoin saat myös täyden liikeradan liikkeeseen, mikä auttaa kehittämään paremmin lihasmassaa.
        \n\n- Kun saat suoritettua 10 puhdasta dippiä ilman apua, voit lisätä vaikeusastetta ottamalla käyttöön lisäpainot: kiinnitä painolevy painovyöhön tai aseta käsipaino jalkojen väliin.
        `} />
    )
}

    const  ChestFly = () => {
    return(
      <Esikatselu
      videoID={"Z57CtFmRMxA"}
      liike="Chest Fly"
      toistot="3 sarjaa 10-15 toistoa"
       ohjeet= {`- Asetu dippitelineeseen ja ota noin olkapäiden levyinen ote tangoista. Ponnista suorille käsille, vie olkapäitä alas ja vedä lapoja yhteen. Pidä jännitys koko kropassa ja taivuta jalkoja hieman taakse.
        \n- Käännä ylävartaloa hieman eteenpäin ja laskeudu alas taivuttaen kyynärpäitä niiden osoittaessa samalla suoraan taaksepäin. Laskeudu vähintään 90 asteen kulmaan. Pidä olkapäät ja lavat tiukassa kontrollissa, jotta vältyt vammoilta. Saavutettuasi ala-asennon, lähde nousemaan takaisin ylös räjähtävästi mutta samalla kontrolloidusti, kunnes olet jälleen suorilla käsillä.
        \n\n- Mikäli olet epävarma tekniikan tai voimiesi suhteen, käytä apuna kuminauhaa tai anna treenikaverin ottaa kiinni jaloistasi ja avustaa tarpeen tullen. Näin liike kevenee hieman ja pystyt pitämään tasapainon paremmin. Tällä tavoin saat myös täyden liikeradan liikkeeseen, mikä auttaa kehittämään paremmin lihasmassaa.
        \n\n- Kun saat suoritettua 10 puhdasta dippiä ilman apua, voit lisätä vaikeusastetta ottamalla käyttöön lisäpainot: kiinnitä painolevy painovyöhön tai aseta käsipaino jalkojen väliin.
        `} />
    )
}

    const TricepPushdown = () => {
    return(
        <Esikatselu 
        videoID={"REWv05om0ho"}
        liike="Tricep Pushdown"
        toistot="2-3 sarjaa 10-15 toistoa"
        ohjeet= {`- Seiso kasvot kohti talja-asemaa ja tartu ylätaljaan kiinnitettyyn köyteen niin, että peukalot tulevat ylimmäisiksi. Tuo kyynärpäät lähelle kylkiä niin, että kyynärvarret ovat
        \n- Ojenna kyynärvarret kohti lattiaa ja kierrä samalla köyttä sisäänpäin niin, että rystysesi ovat kohti lattiaa, kun kätesi ovat täysin ojennetut. Pidä asento hetken ja palaa sitten nojaa lantiosta hieman eteenpäin.Mikäli olet epävarma tekniikan tai voimiesi suhteen, käytä apuna kuminauhaa tai anna treenikaverin ottaa kiinni jaloistasi ja avustaa tarpeen tullen. Näin liike kevenee hieman ja pystyt pitämään tasapainon paremmin. Tällä tavoin saat myös täyden liikeradan liikkeeseen, mikä auttaa kehittämään paremmin lihasmassaa.
        \n\n- Pidä leuka vaakatasossa, jotta selkäsi pysyy hyvässä asennossa.
        \n\n- Pidä kyynärpääsi vakaasti paikoillaan liikkeen aikana.
        `}
        />
    )
}

    const Rinta = () => {
    return(
        // MITÄ NÄISTÄ APISTA? TREENITEXT, TREENINKESTO, KOHDERYHMÄ, ALOITAROUTE -> poistas rintatreenidata
        <TreeniEsittelyData 
        backgroundImage={require('../../assets/rintaToinen.jpg')}
        treeni={'rintatreeni'} 
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

      <Stack.Screen name="Rinta" options={{  headerShown: false, headerLeft: null, gestureEnabled: true }}  component={Rinta} />
      
      <Stack.Screen name="Punnerrukset" options={{ headerTintColor: 'white', headerStyle: {backgroundColor: '#FA4242' }, 
       headerShown: true, headerLeft: null, gestureEnabled: false}} component={Punnerrukset} />
      
      <Stack.Screen name="Penkkipunnerrus" options={{ headerTintColor: 'white',
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
    
      <Stack.Screen name="AloitaRinta"  options={{ headerShown: false, gestureEnabled: false, cardStyle: { backgroundColor: 'transparent' }}} component={AloitaRinta} />
      
    </Stack.Navigator>

    
     )
 }
   