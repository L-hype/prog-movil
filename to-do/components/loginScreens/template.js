import { TextInput, StyleSheet, View, Text, Image, ImageBackground, Button, Pressable } from "react-native";
import { styles } from '../styles/styles'
import {useFormik} from 'formik'

//cuando quiero usar las propiedades  de presable como en el caso de formik,
// en cada pantalla tengo problemas de accesp pq estoy usando un comp template,
// ver si es mejor sacar el presable del template para modificarlo en cada pantalla o dejarlo asi 

export function Template({ children, buttonText, screenName, widthBtn,navigation,desireScreen,submit }) {
    
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

                    <Pressable 
                    style={[styles.button, widthBtn]} 
                    onPress={()=>{navigation.navigate(desireScreen) ,submit
                    }}
                       >
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 24, marginTop: -13, color: 'white'
                            }}
                            >{buttonText}</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    )
}

