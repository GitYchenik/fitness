import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen( {navigation} ) {
    const LoadScene = () => {
        setTimeout(
            ()=>{ 
            navigation.navigate('ProfileScreen')
        }, 3000);
    }
        //navigation.navigate('ProfileScreen')
    
    return (
        <View>
            <Text>Страница номер 1</Text> 
            <LoadScene />
        </View>
    );
} 