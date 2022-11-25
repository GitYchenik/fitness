import React from 'react';
import { View, Text, Image } from 'react-native';

export default function ProfileScreen() {
    return (
        <View>
            <Text>Страница номер 2</Text>
            <Image source={require('../media/welcome.jpg')} />
        </View>
    );
}