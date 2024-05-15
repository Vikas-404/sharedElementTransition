import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import porsche from '../assets/porsche.jpg';
const IMAGE = Image.resolveAssetSource(porsche).uri;

const index = () => {
    return (
        <View style={styles.container}>
            <Text>Index.tsx</Text>
            <Link href="/modal" asChild>
                <Pressable>
                    <Image source={{ uri: IMAGE }} style={styles.image}/>
                </Pressable>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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


export default index