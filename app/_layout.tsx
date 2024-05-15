import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{ headerTitle: 'Home' }}/>
        <Stack.Screen name='modal' options={{ headerShown: false, presentation:'transparentModal', animation: 'none' }}/>
    </Stack>
  )
}

export default StackLayout