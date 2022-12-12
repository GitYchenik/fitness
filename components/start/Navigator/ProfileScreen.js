import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableHighlight, Touchable } from 'react-native';
import Header from './ProfileScreen/Header.js'
import Footer from './ProfileScreen/Footer.js'
import Touchable_Main from './ProfileScreen/Touchable_Main.js'


const ProfileScreen = ({ navigation }) => {
  const [Data_db, setData_db] = useState([
    [{ ids: 1, znachenie: 'Тренажер 4', key: '1' },
    { ids: 2, znachenie: 'Блок назад', key: '2' },
    { ids: 3, znachenie: 'Отжимания', key: '3' },
    { ids: 4, znachenie: 'Разведение в блоке', key: '4' }],

    [{ ids: 1, znachenie: 'Гантели', key: '1' },
    { ids: 2, znachenie: 'Тренажер валики', key: '2' },
    { ids: 3, znachenie: 'Тренажер верх', key: '3' },
    { ids: 4, znachenie: 'Разведение в блоке', key: '4' }],

    [{ ids: 1, znachenie: 'ytГантели', key: '1' },
    { ids: 2, znachenie: 'Тренажер валики', key: '2' },
    { ids: 3, znachenie: 'Тренажер верх', key: '3' },
    { ids: 4, znachenie: 'Разведение в блоке', key: '4' }],

  ]
  );

  return (

    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.main}>
        <ScrollView>
          <Text style={styles.mainText}>Дневник занятий</Text>

          <Touchable_Main navigation={navigation} data_db_zn={Data_db[0]} Data_db={Data_db}/>
          {/* <Touchable_Main navigation={navigation} data_db_zn={Data_db[1]} Data_db={Data_db}/>
          <Touchable_Main navigation={navigation} data_db_zn={Data_db[2]} Data_db={Data_db}/> */}

        </ScrollView>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 15,
    backgroundColor: "white",
  },
  mainText: {
    fontSize: 20,
    textAlign: 'center',
  }
})


export default ProfileScreen;