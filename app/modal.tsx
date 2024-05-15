import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import { useRouter } from 'expo-router'
import Animated from 'react-native-reanimated'

const modal = () => {
  const router = useRouter();

  return (
    <BlurView intensity={40} style={styles.container}>
      <Pressable onPress={() => router.back()}>
        <Animated.Text> React Native Shared Element Transition </Animated.Text>
      </Pressable>
    </BlurView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 30,
    margin: 20,
  },
});


export default modal