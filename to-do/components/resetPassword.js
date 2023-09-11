import { Template } from './template'
import { styles } from './styles/styles'
import { Text, TextInput, View } from 'react-native';

export function ResetPasswordScreen() {
    return (
        <Template
            screenName={'cambiar contraseña'}
            buttonText={'Cambiar'}
            widthBtn={{marginTop:'92%'}}

        >
            <View style={styles.formContainer}>
                <Text style={styles.text}>Nueva contraseña:</Text>
                <TextInput style={styles.input} secureTextEntry={true}></TextInput>
                <Text style={styles.text}>Confirmar contraseña:</Text>
                <TextInput style={styles.input} secureTextEntry={true}></TextInput>

            </View>


        </Template>
    );
}

