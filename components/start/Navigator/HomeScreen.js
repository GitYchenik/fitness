import React from 'react';
import { View, Text, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
    const LoadScene = () => {
        setTimeout(
            () => {
                navigation.navigate('MainScreen')
            }, 1000);
    }
    //navigation.navigate('MainScreen')

    return (
        <>
            <View>{<LoadScene />}</View>
            <View style={
                {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#00FF00'
                }}>
                <Text style={
                    {
                        fontWeight: 'bold',
                        fontSize: 25,
                        color: 'white',
                        paddingVertical: 50
                    }}>Дневник занятий</Text>
                <Image
                    style={
                        {
                            width: 200,
                            height: 200,
                            borderRadius: 90,
                            borderWidth: 5,
                            borderColor: 'white',
                            align: 'center'
                        }}
                    source={require('../../media/Welcome.jpg')}
                />
            </View>
        </>
    );
}