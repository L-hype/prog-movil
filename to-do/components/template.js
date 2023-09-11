import { TextInput, StyleSheet, View, Text, Image, ImageBackground, Button, Pressable } from "react-native";
import { styles } from './styles/styles'

export function Template({ children, buttonText, screenName, widthBtn }) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/fondoAzul.jpg')}
                style={styles.back}
            >
                <View style={styles.vista}>
                    <View style={styles.sizeImage}>
                        <Image
                            source={require("../assets/imgTodo.png")}
                            style={styles.imageLogo}
                        />

                    </View>
                    <Text style={styles.todoText}>To-do app </Text>
                    <Text style={styles.screenName}>{screenName}</Text>
                    {children}
                    <Pressable style={[styles.button, widthBtn]}>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 25, marginTop: -8.5, color: 'white'
                            }}>{buttonText}</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    )
}

