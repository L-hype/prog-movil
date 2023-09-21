import { Template } from './template'
import { TextInput, View, Text } from 'react-native'
import { styles } from '../styles/styles'

export function ForgotPassScreen({navigation}) {
    return (
        <Template
            buttonText={'Enviar' }
            screenName={'Enviar codigo'}
            widthBtn={{ marginTop: '90%' }}
            desireScreen={'reset password'}//es la pantalla a la que quiero que valla 
            navigation={navigation}
        >
            <View style={styles.formContainer}>
                <Text style={styles.text}>Correo:</Text>
                <TextInput style={styles.input} placeholder='escribe tu correo'></TextInput>
            </View>
        </Template>
    );
}

