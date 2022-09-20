import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const Start = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Fitness</Text>
      </View>

      <View style={styles.main}>
        <Text style={styles.mainText}>Дневник заданий</Text>
        <View>
          <Text>Бицепс + Трицепс</Text>
        </View>
        <View>
          <Text>1. 10 кг(12) - 15 кг - 20 кг - 25 кг (6)      Штанга </Text>
          <TextInput placeholder='!Что то вводить тут!'/>
          <Text>2. 10 кг(12) - 15 кг - 20 кг - 25 кг (6)      Тренажер Смитта</Text>
          <Text>3. 10 кг(12) - 15 кг - 20 кг - 25 кг (6)      Гантели</Text>
          <Text>4. 10 кг(12) - 15 кг - 20 кг - 25 кг (6)      Тренажер смита верх</Text>
        </View>
        <View>
          <Text>Грудь + Спина</Text>
        </View>
        <View>
          <Text>1. 10 кг(12) - 15 кг - 20 кг - 25 кг (6)      Тренажер 4</Text>
          <Text>2. 10 кг(12) - 15 кг - 20 кг - 25 кг (6)      Блок назад</Text>
          <Text>3. 10 кг(12) - 15 кг - 20 кг - 25 кг (6)      Отжимания</Text>
          <Text>4. 10 кг(12) - 15 кг - 20 кг - 25 кг (6)      Разведение в блоке</Text>
        </View>
        <View>
          <Text>Плечи + Трапеция</Text>
        </View>
        <View>
          <Text>1. 10 кг(12) - 15 кг - 20 кг - 25 кг (6)      Гантели</Text>
          <Text>2. 10 кг(12) - 15 кг - 20 кг - 25 кг (6)      Тренажер валики</Text>
          <Text>3. 10 кг(12) - 15 кг - 20 кг - 25 кг (6)      Тренажер верх</Text>
          <Text>4. 10 кг(12) - 15 кг - 20 кг - 25 кг (6)      Разведение в блоке</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Все права не защищены</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
    backgroundColor: '#00FF00'
  },
  headerText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 20
  },
  main: {
    flex: 15,
    backgroundColor: 'white'
  },
  mainText: {
    fontSize: 20,
    textAlign: 'center'
  },
  footer: {
    flex: 1,
    backgroundColor: 'steelblue'
  },
  footerText: {
    textAlign: 'center'
  }
})


export default Start;