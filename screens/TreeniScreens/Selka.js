import React from 'react'
import AloitaTreeni from './TreeninAloitus';
import Esikatselu from '../../components/TreeninEsikatselu';
import { createStackNavigator } from '@react-navigation/stack'


export const AloitaSelka = () => {
    return (
        <AloitaTreeni treeni={"selkatreeni"}/>
    );
}

export const Leuanveto = () => {
    return(
      <Esikatselu
      videoID={"3YvfRx31xDE"}
      liike="Leuanveto"
      ohjeet={`- Voit ottaa avuksesi voimakuminauhan ja keventää leuanvetojasi sillä. Muista kuminauhaa valitessasi, että leuanveto on sinulle maksimivoimaa vaativa suoritus. Valitse siis mahdollisimman vähän keventävä kuminauha, jonka avulla pystyt tekemään 1-5 leukaa.
      \n\n- Kuminauhan sijaan, voit pyytää kaveriasi keventämään leuanvetoasi nostamalla jaloista samalla kun sinä vedät.
      
      `}
      />
       
    )
}

export const Kulmasoutu = () => {
    return(
      <Esikatselu
      videoID={"kBWAon7ItDw"}
      liike="Kulmasoutu"
      ohjeet={`- Asetu levytangon luokse. Taivuta hiukan polvia ja nojaudu eteenpäin lantiota taivuttamalla, samalla kun selkä säilyttää neutraalin kaarevuutensa. 
      \n\n- Tartu tankoon hartialevyisellä tai hieman leveämmällä myötä- tai vastaotteella. Alkuasennossa käsivarret ovat täysin ojennetut ja hartiat rentoina. Tanko voi olla joko lattialla tai roikkua vapaasti ilmassa. 
      \n- Aloita sen jälkeen soutu levytangolla vetämällä hartiat mahdollisimman lähelle toisiaan ja taivuttamalla samalla käsivarsia siten, että tanko nousee rintakehän alaosaa tai vyötärön yläosaa vasten. Se, mihin kohtaan tanko osuu, riippuu siitä, kuinka paljon nojaat eteenpäin. 
      \n\n- Laske sen jälkeen tanko alkuasentoon hallitulla liikkeellä.
      `}
      />
    )
}

export const Hauiskaanto = () => {
    return(
      <Esikatselu
      videoID={"yTWO2th-RIY"}
      liike="Hauiskääntö"
       ohjeet= {`- Asetu seisomaan pieneen haara-asentoon. Ota käsipainot käsiisi ja aseta kädet siten, että kämmenet osoittavat itseäsi kohden.
       \n- Lähde koukistamaan toisen käden kyynärniveltä ja kierrä samalla kättä siten, että kämmenpohja on kohti kattoa ennen kuin kyynärvarsi on vaakatasossa ja vie käsi ylös asti.
       \n\n- Palauta liike hallitusti takaisin. Tee nyt toinen käsi tai jatka tämän käden määrätyt toistot loppuun.
       `}
       />
    )
}

export const Alatalja = () => {
    return(
       <Esikatselu
      videoID={"4mRy8U542Fo"}
      liike="Soutu Alataljassa"
      ohjeet={`- Hengitä sisään ja vedä kahvaa olkapääjohtoisesti kohti itseäsi ja pidä rankasi neutraaliasennossa
        \n- Jatka vetoa, kunnes kahva osuu alimpien kylkiluiden kohdalle
        \n\n- Varmista liikkeen loppuvaiheessa, että vedät voimakkaasti lapoja kohti rankaa
        \n\n- Palauta kahva uloshengityksellä alkuasentoon
        `} 

        />
    )
}

export const Ylatalja = () => {
    return(
       <Esikatselu
      videoID={"XhRpjxcKrJY"}
      liike="Ylätalja"
       ohjeet= {`- Vedä ensin hartiat ja lavat alas. Nojaa hieman taaksepäin.
        \n- Tuo kahva rintaan nopeasti ykkösellä. Nosta samalla rintaa ylös ja vedä hartioita taakse. Kyynärpäät tulevat kohti kylkiä.
        \n\n- Palauta kahva hallitusti hidastellen ylös. Anna hartioiden nousta vasta liikkeen lopussa. Voit jättää kyynärpäät ääriasennossa pikkuisen koukkuun, jos haluat tehdä liikkeen enemmän selälle ja vähemmän hauikselle. Jos suoristat kädet kokonaan yläasennossa, niin hauis joutuu tekemään enemmän töitä. Todennäköisesti hauiksesta tulee silloin heikoin lenkki etkä pysty tekemään selälle maksimaalista treeniä.
        \n\n- Kainalon alapuolella tuntuu venytys yläasennossa.
        \n\n- Liikkeen pitäisi tuntua leveässä selkälihaksessa. Jos tuntuu jossain muualla, niin tarkista suoritustekniikka.
        `} />
    )
}

export const Vasarakaannot = () => {
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
    initialRouteName="Selka"
     >

      <Stack.Screen name="Selka" options={{  headerShown: false, headerLeft: null, gestureEnabled: true}}  component={Selka} />
      <Stack.Screen
       name="Leuanveto" options={{ headerShown: false, headerLeft: null, gestureEnabled: false}} component={Leuanveto} />
      <Stack.Screen name="Kulmasoutu" options={{ headerShown: false, headerLeft: null, gestureEnabled: false}}  component={Kulmasoutu} />
      <Stack.Screen name="Hauiskaanto" options={{ headerShown: false, headerLeft: null, gestureEnabled: false}}  component={Hauiskaanto} />
      <Stack.Screen name="Alatalja" options={{ headerShown: false, headerLeft: null, gestureEnabled: false}}  component={Alatalja} />
      <Stack.Screen name="Ylatalja" options={{ headerShown: false, headerLeft: null, gestureEnabled: false}}  component={Ylatalja} />
      <Stack.Screen name="Vasarakaannot" options={{  headerShown: false, headerLeft: null, gestureEnabled: false}}  component={Vasarakaannot} />
      <Stack.Screen name="AloitaSelka"  options={{ headerShown: false, gestureEnabled: false }} component={AloitaSelka} />
    </Stack.Navigator>
     )
 }








