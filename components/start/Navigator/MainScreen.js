import React, { useState, useEffect  } from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import Header from './MainScreen/Header.js'
import Footer from './MainScreen/Footer.js'
import Touchable_Main from './MainScreen/Touchable_Main.js'
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainScreen = ({ navigation }) => {
  const [Data_db, setData_db] = useState([
    [{ ids: 1, znachenie: 'Штанга', key: '1', day: 'День 1 Руки' },
    { ids: 2, znachenie: 'Тренажер Смитта', key: '2' },
    { ids: 3, znachenie: 'Гантели', key: '3' },
    { ids: 4, znachenie: 'Тренажер смита верх', key: '4' }],

    [{ ids: 1, znachenie: 'Тренажер 4', key: '1', day: 'День 2 Грудь' },
    { ids: 2, znachenie: 'Блок назад', key: '2' },
    { ids: 3, znachenie: 'Отжимания', key: '3' },
    { ids: 4, znachenie: 'Разведение в блоке', key: '4' }],

    [{ ids: 1, znachenie: 'Гантели', key: '1', day: 'День 3 Плечи' },
    { ids: 2, znachenie: 'Тренажер валики', key: '2' },
    { ids: 3, znachenie: 'Тренажер верх', key: '3' },
    { ids: 4, znachenie: 'Разведение в блоке', key: '4' }]
  ]
  );
  
  useEffect(() => {
    storeData()
}, []); 

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('UserName', Data_db),
      console.log('сохранилось нах')
    } catch (e) {
      console.log('Ошибка нах')
    }
  }

  return (

    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.main}>
        <ScrollView>
          <Text style={styles.mainText}>Дневник занятий</Text>

          <Touchable_Main navigation={navigation} data_db_zn={Data_db[0]} Data_db={Data_db} />
          <Touchable_Main navigation={navigation} data_db_zn={Data_db[1]} Data_db={Data_db} />
          <Touchable_Main navigation={navigation} data_db_zn={Data_db[2]} Data_db={Data_db} />

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


export default MainScreen;