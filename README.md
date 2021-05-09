Tervetuloa GoTrain -treenisovellukseen!

Tämä sovellus auttaa sinua treenejen kanssa tarjoten hyviä ja monipuolisia treeniohjelmia, sisältäen ohjeet videoineen ja teksteineen, ja aloita treeni -toiminnon.

Sovellus sisältää treenin esittelyn, jossa näytetään mitä treeni sisältää, kuinka kauan se arviolta kestää, mikä on treenin kohderyhmä, kuinka monta sarjaa käyttäjä tekee ja mitä liikkeitä käyttäjä tekee. 

Treenin esittelystä pääsee yksitellen vielä katsomaan kyseisen liikkeen ohjeita, jotka ovat video- ja teksti -muodossa.

Sovellus sisältää Aloita Treeni -toiminnon, jonka aloitettuaan käyttäjä tekee valitsemansa treenin ohjeistuksineen. Treeni sisältää eri liikkeitä, joihin on valmiiksi asetettu sarjamäärä. Käyttäjä voi treenin aikana seurata edistymistään merkkaamalla toistojen määrät, sarjoissa käytetyt painot kiloina, ja painamalla checkiä. Tämä ratkaisu vie sinut läpi treeniohjelman niin, että pystyt seuraamaan edistymistäsi, ja myöhemmin kehittymistäsi. Kun kaikki liikkeet on tehty, tallentuu tiedot treenistä (liikkeet, sarjat, toistot ja kilot) tietokantaan, jotka voi noutaa Edistyminen -välilehdeltä.

Sovelluksessa on käytetty runsaasti eri komponentteja sekä Expolta (esim. expo-font, expo-app-loading, expo location, lottie yms...), että React Nativelta lukuisia ominaisuuksia joita ei kurssilla käyty läpi, ja kolmansilta osapuolilta muutamaa. Sovelluksen tyylitys on hoidettu Styled Componenteilla. Sovellus käyttää ulkoasunaan käyttäjän laitteen käyttöjärjestelmän teemaa. Treenit noudetaan omatekemästäni REST API:sta jonka rakensin pienellä backend -skriptillä. Aloita Treeni -toiminto on toteutettu hienolla react-native-snap-carousel komponentilla, ja videoiden näyttämiseen on käytetty react-native-youtube-iframea. Kaikki nämä paketit ovat edelleen hyvin ylläpidettyjä ja suosittuja. Päivämäärän noutamiseen käytin momentin lokaalia aikaa, jonka muokkasin miellyttävään muotoon.

Tietokantaratkaisuna toimii Firebasen Firestore, jossa on erikseen users -collection ja tehdyt treenit -collection. Jokaisella rekisteröityneellä käyttäjällä on oma henkilökohtainen ID ja omat lokerikko tietokannassa treeneille. 