import { Template } from './template'
import { TextInput, View, Text } from 'react-native'
import { styles } from './styles/styles'

export function ForgotPassScreen() {
    return (
        <Template
            buttonText={'Enviar'}
            screenName={'Enviar codigo'}
            widthBtn={{ marginTop: '90%' }}
        >
            <View style={styles.formContainer}>
                <Text style={styles.text}>Correo:</Text>
                <TextInput style={styles.input} placeholder='escribe tu correo'></TextInput>
            </View>
        </Template>
    );
}

