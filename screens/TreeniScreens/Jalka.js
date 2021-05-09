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
      ohjeet={`Hengitä sisään ja jännitä vatsaa, jotta keskivartalon tuki pitää koko liikkeen ajan. Työnnä takamusta taaksepäin kuin olisit istumassa tuolille. 
      \n\n- Nouse ripeästi takaisin ylös, ojenna jalat ja jännitä pakarat. Varo yliojentamasta polvia noustessasi. Paina kantapäitä alustaan, niin vaikutus tuntuu myös pakaroissa. 
      \n- Pidä ylävartalo mahdollisimman suorana, rinta eteenpäin. Varo nojaamasta eteenpäin. Pidä myös katse eteenpäin, jotta niska pysyy suorana eikä selkä pääse pyöristymään.
      \n\n- Ojenna kädet suorina eteen, niin saat lisätukea tasapainon pitämiseen.
      \n\n- Kyykisty niin alas, että polvet ovat 90 asteen kulmassa ja reidet alustan suuntaisesti. Kun tekniikka on hallussa, voit syventää kyykkyä entisestään.
      \n\n- Varmista, että polvet ovat kyykätessäsi jalkaterien suuntaisesti, mutta eivät varpaita pidemmällä.
      \n\n- Älä päästä polvia kääntymään kyykyn aikana sisään- tai ulospäin.
      \n\n- Seiso jalat lantion leveydellä jalkaterät hieman ulospäin. Pidä paino koko jalalla tai kantapäillä kyykyn aikana.

      `}
      
      />
       
    )
}

    const Jalkaprassi = () => {
    return(
      <Esikatselu
      videoID={"GvRgijoJ2xY"}
      liike="Jalkaprässi"
      ohjeet={`Aseta jalat hartianleveydelle jalkatukea vasten.
      \n\n- Koukista polvet, älä anna vatsan pullahtaa ulos. Pidä polvet ja varpaat samassa linjassa ja paino kantapäällä.
      \n- Ojenna polvet suoriksi, mutta älä lukkoon asti.
      \n\n- Tuntuma tulisi olla suhteellisen tasapuolinen sekä reisissä että pakarassa.
      `}
      />
    )
}

    const BulgAskel = () => {
    return(
      <Esikatselu
      videoID={"HBYGeyb4sSM"}
      liike="Bulgarialainen askelkyykky"
       ohjeet= {`- Ota steppilauta, tai pieni koroke ja aseta se vartalosi taakse.
       \n- Aseta toinen jalka tukijalaksi korokkeen päälle ja pidä paino etummaisen jalan päällä.
       \n\n- Lähde tekemään askelkyykkyliikettä, siten, että polvet taipuvat varpaiden kanssa samaan suuntaan. Etummaisen jalan kantapää pysyy kiinni lattiassa ja ylävartalo säilyy ryhdikkäässä asennossa. Voit haastaa itseäsi lisää ottamalla käsipainot kumpaankin käteesi. Tee liike kummallekin puolelle.
       `}
       />
    )
}

    const Lantionnosto = () => {
    return(
       <Esikatselu
      videoID={"dX_nSOOJIsE"}
      liike="Lantionnosto"
      ohjeet={`- 
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
   