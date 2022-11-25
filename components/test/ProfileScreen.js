import React from 'react';
import { View, Text, Alert } from 'react-native';

const tims = () => {
    setTimeout(function() {
        Alert.alert('Ghbdtdbnnb')      
    }, 5000);
}

export default function ProfileScreen() {
    return (
        <View>
            <Text>Страница номер 2</Text>
        </View>
    );
}