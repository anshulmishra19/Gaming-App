import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

import { Entypo } from '@expo/vector-icons';
import { Colors } from './../../constants/Colors'
import { FontAwesome } from '@expo/vector-icons';



export default function TabLayout() {
    
    
  return (
    <Tabs screenOptions={{headerShown:false,
        tabBarActiveTintColor:Colors.PRIMARY
    }}>
        <Tabs.Screen name="megame"
        options={{
            tabBarLabel:'Home',
            tabBarIcon:({color})=><Entypo name="home" size={24} color={Colors.PRIMARY} />
        }}
        />
        <Tabs.Screen name="profile"
        options={{
            tabBarLabel:'Profile',
            tabBarIcon:({color})=><FontAwesome name="user" size={24} color="Colors.PRIMARY" />
        }}
        />
        <Tabs.Screen name="Tracker" options={{
            tabBarLabel:'Play',
            tabBarIcon:({color})=><Entypo name="game-controller" size={24} color={Colors.PRIMARY} />
        }}/>
    </Tabs>
  )
}