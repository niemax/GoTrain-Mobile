import React from 'react'
import AloitaTreeni from './TreeninAloitus';
import Esikatselu from '../../components/TreeninEsikatselu';
import { createStackNavigator } from '@react-navigation/stack'


export const AloitaKasi = () => {
    return (
        <AloitaTreeni treeni={"kasitreeni"}/>
    );
}

export const HauiskaantoTangolla = () => {
    return(
      <Esikatselu
      videoID={"QZEqB6wUPxQ"}
      liike="Hauiskääntö tangolla"
      ohjeet={`- Voit ottaa avuksesi voimakuminauhan ja keventää leuanvetojasi sillä. Muista kuminauhaa valitessasi, että leuanveto on sinulle maksimivoimaa vaativa suoritus. Valitse siis mahdollisimman vähän keventävä kuminauha, jonka avulla pystyt tekemään 1-5 leukaa.
      \n\n- Kuminauhan sijaan, voit pyytää kaveriasi keventämään leuanvetoasi nostamalla jaloista samalla kun sinä vedät.
      
      `}
      />
       
    )
}

export const PystypunnerrusKasipainoilla = () => {
    return(
      <Esikatselu
      videoID={"qEwKCR5JCog"}
      liike="Pystypunnerrus käsipainoilla"
      ohjeet={`- Asetu levytangon luokse. Taivuta hiukan polvia ja nojaudu eteenpäin lantiota taivuttamalla, samalla kun selkä säilyttää neutraalin kaarevuutensa. 
      \n\n- Tartu tankoon hartialevyisellä tai hieman leveämmällä myötä- tai vastaotteella. Alkuasennossa käsivarret ovat täysin ojennetut ja hartiat rentoina. Tanko voi olla joko lattialla tai roikkua vapaasti ilmassa. 
      \n- Aloita sen jälkeen soutu levytangolla vetämällä hartiat mahdollisimman lähelle toisiaan ja taivuttamalla samalla käsivarsia siten, että tanko nousee rintakehän alaosaa tai vyötärön yläosaa vasten. Se, mihin kohtaan tanko osuu, riippuu siitä, kuinka paljon nojaat eteenpäin. 
      \n\n- Laske sen jälkeen tanko alkuasentoon hallitulla liikkeellä.
      `}
      />
    )
}

export const OjentajatTaljassa = () => {
    return(
      <Esikatselu
      videoID={"REWv05om0ho"}
      liike="Tricep Pushdown"
       ohjeet= {`- Asetu seisomaan pieneen haara-asentoon. Ota käsipainot käsiisi ja aseta kädet siten, että kämmenet osoittavat itseäsi kohden.
       \n- Lähde koukistamaan toisen käden kyynärniveltä ja kierrä samalla kättä siten, että kämmenpohja on kohti kattoa ennen kuin kyynärvarsi on vaakatasossa ja vie käsi ylös asti.
       \n\n- Palauta liike hallitusti takaisin. Tee nyt toinen käsi tai jatka tämän käden määrätyt toistot loppuun.
       `}
       />
    )
}

export const Vipunosto = () => {
    return(
       <Esikatselu
      videoID={"FeJP4E4Z-PY"}
      liike="Vipunosto Sivulle"
      ohjeet={`- Hengitä sisään ja vedä kahvaa olkapääjohtoisesti kohti itseäsi ja pidä rankasi neutraaliasennossa
        \n- Jatka vetoa, kunnes kahva osuu alimpien kylkiluiden kohdalle
        \n\n- Varmista liikkeen loppuvaiheessa, että vedät voimakkaasti lapoja kohti rankaa
        \n\n- Palauta kahva uloshengityksellä alkuasentoon
        `} 

        />
    )
}

export const Hauiskaanto = () => {
    return(
       <Esikatselu
      videoID={"yTWO2th-RIY"}
      liike="Hauiskääntö käsipainoilla"
       ohjeet= {`- Asetu seisomaan pieneen haara-asentoon. Ota käsipainot käsiisi ja aseta kädet siten, että kämmenet osoittavat itseäsi kohden.
       \n- Lähde koukistamaan toisen käden kyynärniveltä ja kierrä samalla kättä siten, että kämmenpohja on kohti kattoa ennen kuin kyynärvarsi on vaakatasossa ja vie käsi ylös asti.
       \n\n- Palauta liike hallitusti takaisin. Tee nyt toinen käsi tai jatka tämän käden määrätyt toistot loppuun.
        `} />
    )
}

export const Vasarakaanto = () => {
    return(
      <Esikatselu
      videoID={"zC3nLlEvin4"}
      liike="Vasarakäännöt"
       ohjeet= {`- 
        `} />
    )
}
   


const Stack = createStackNavigator();

    export default () => {
     return(
        <Stack.Navigator
    mode="modal"
    initialRouteName="Kasi"
     >

      <Stack.Screen name="Kasi" options={{  headerShown: false, headerLeft: null, gestureEnabled: true}}  component={Kasi} />
      <Stack.Screen name="HauiskaantoTangolla" options={{ headerShown: false, headerLeft: null, gestureEnabled: false}} component={HauiskaantoTangolla} />
      <Stack.Screen name="PystypunnerrusKasipainoilla" options={{ headerShown: false, headerLeft: null, gestureEnabled: false}}  component={PystypunnerrusKasipainoilla} />
      <Stack.Screen name="OjentajatTaljassa" options={{ headerShown: false, headerLeft: null, gestureEnabled: false}}  component={OjentajatTaljassa} />
      <Stack.Screen name="Vipunosto" options={{ headerShown: false, headerLeft: null, gestureEnabled: false}}  component={Vipunosto} />
      <Stack.Screen name="Hauiskaanto" options={{  headerShown: false, headerLeft: null, gestureEnabled: false}}  component={Hauiskaanto} />
      <Stack.Screen name="Vasarakaanto" options={{  headerShown: false, headerLeft: null, gestureEnabled: false}}  component={Vasarakaanto} />
      <Stack.Screen name="AloitaKasi"  options={{ headerShown: false, gestureEnabled: false }} component={AloitaKasi} />
    </Stack.Navigator>
     )
 }








