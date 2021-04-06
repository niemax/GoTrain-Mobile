import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign} from '@expo/vector-icons';
import * as firebase from 'firebase';
import { loggingOut } from '../API/FirebaseMethods'
import { Alert } from 'react-native';



const Koti = ({ navigation }) => {
    let currentUserUID = firebase.auth().currentUser.uid;
    const [text, setText] = useState('');
    

    useEffect(() => {
        async function getUserInfo() {
            try {
                let doc = await firebase
                    .firestore()
                    .collection('users')
                    .doc(currentUserUID)
                    .get();

                if (!doc.exists) {
                    Alert.alert('No user data found!')
                } else {
                    let dataObj = doc.data();
                    setText(dataObj.name)
                }
            } catch(err) {
                Alert.alert('There is an error.', err.message)
            }
        }
        getUserInfo();
    });

    
    const handleLogOut = () => {
        loggingOut();
        navigation.replace('Login');
    }

    
    return (
        <View style={styles.container}>
        <Text style={styles.greeting}>Hello, {text}
        <AntDesign name="hearto" size={24} color="orange"/>
        </Text>
        
            <Text>Profile Screen</Text>
            <TouchableOpacity
             style={styles.button}
             onPress={handleLogOut}
             >
        <Text style={styles.buttonText}>LogOut</Text>
            </TouchableOpacity>
           
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 20,
        marginBottom: 10,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#FFA611',
        borderColor: '#FFA611',
        borderWidth: 1,
        borderRadius: 5,
        width: 300,
        height: 50,
        justifyContent: 'center',
        borderRadius: 30,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    greeting: {
        fontSize: 24,
        fontWeight: "500",
        marginBottom: 30
    }
})

export default Koti;