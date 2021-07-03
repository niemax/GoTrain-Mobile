import React from 'react'
import { StyleSheet } from 'react-native'
import ActionButton from 'react-native-action-button';
import { Ionicons } from '@expo/vector-icons';


export default function FloatingActionButton() {
    return (
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications">
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" >
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
    )
}


const styles = StyleSheet.create({
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
  });