import React from 'react';
import { View, Text, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
    const LoadScene = () => {
        setTimeout(
            () => {
                navigation.navigate('ProfileScreen')
            }, 5000);
    }
    //navigation.navigate('ProfileScreen')

    return (
        <>
            <View>{<LoadScene />}</View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Жить здорово</Text>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={require('./welcome.jpg')}
                />
            </View>
        </>
    );
}

/*
            <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Жить здорово</Text>
                <Image source={require('../media/welcome.jpg')} />

            </View>
*/