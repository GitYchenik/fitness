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
                <Image source={{uri: 'https://snack-web-player.s3.us-west-1.amazonaws.com/v2/46/static/media/react-native-logo.79778b9e.png'}} />
                <Text>Жить здорово</Text>
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