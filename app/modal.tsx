import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import { useRouter } from 'expo-router'
import porsche from '../assets/porsche.jpg';
const IMAGE = Image.resolveAssetSource(porsche).uri;
import Animated, { SharedTransition } from 'react-native-reanimated';

const modal = () => {
  const router = useRouter();

  return (
    <BlurView intensity={40} style={styles.container}>
      <Pressable onPress={() => router.back()}>
        <Image source={{ uri: IMAGE }} style={styles.image} sharedTransitionTag="porsche-image" />
        <Text style={styles.text}>React Native Shared Element Transition </Text>
      </Pressable>
    </BlurView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    // marginTop: 20,
  },

  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 30,
    margin: 20,
  },
});


export default modal