import { Template } from './template'
import { Text, StyleSheet, TextInput, View } from 'react-native'
import { styles } from './styles/styles'


export function SignUpScreen() {
    return (
        <Template 
        buttonText={'registarse'}
        screenName={'Registro'}
        widthBtn={{marginTop:'110%'}} >
            <View style={styles.formContainer} >
                
                <Text style={styles.text}>Nombre:</Text>
                <TextInput style={styles.input}></TextInput>
                <Text style={styles.text}>Correo:</Text>
                <TextInput style={styles.input}></TextInput>
                <Text style={styles.text}>Contraseña:</Text>
                <TextInput style={styles.input}></TextInput>
                
            </View>

        </Template>
    );
}




