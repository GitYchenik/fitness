import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>Все права не защищены</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        backgroundColor: "#2196F3"
      },
      footerText: {
        textAlign: "center"
      }
})



export default Footer;