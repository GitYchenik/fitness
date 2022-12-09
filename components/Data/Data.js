import React, { useState } from 'react';
import { StyleSheet, View, Text, VirtualizedList } from 'react-native';
import Main from '../start/Navigator/ProfileScreen/Main';


export default function Data() {

    const [Data_db, setData_db] = useState([
        { ids: 1, znachenie: 'Тренажер 4', key: '1' },
        { ids: 2, znachenie: 'Блок назад', key: '2' },
        { ids: 3, znachenie: 'Отжимания', key: '3' },
        { ids: 4, znachenie: 'Разведение в блоке', key: '4' }
    ]);
}