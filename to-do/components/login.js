import { Template } from './template'
import { Text, View, TextInput, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles/styles'

export function LoginScreen() {
  return (
    <>
      <Template
        buttonText={'log in'}
        screenName={'Ingresar'}
      >
        <View style={styles.formContainer}
        >
          <Text style={styles.text}>Usuario:
          </Text>
          <TextInput style={styles.input}>
          </TextInput>
          <Text
            style={styles.text}
            secureTextEntry={true}
          >Contraseña:</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
          ></TextInput>
        </View>
        <AntDesign style={styles.userIcon} name="user" size={24} color="black" />
        <AntDesign style={styles.padLogIcon} name="lock1"
          size={24} color="black" />
        <Pressable style={styles.forgotPassContainer}>
          <Text style={styles.textForgotPass}>Forgot password?</Text>
        </Pressable>
      </Template>
    </>
  )
}




