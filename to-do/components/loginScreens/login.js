import { Template } from './template'
import { Text, View, TextInput, Pressable, Button } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { styles } from '../styles/styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'


export function LoginScreen({ navigation }) {
  const formik = useFormik({

    initialValues: {
      nombre: '',
      password: ''
    },
    
    
    validationSchema: Yup.object({
      nombre: Yup.string().max(45).min(3).required(),
      password: Yup.string().min(6).required()

    }),
  })
  

  if (!/[a-zA-Z]+/.test(formik.values.nombre)) {
    formik.errors.nombre = 'escribe un nombre valido';
  }
  else {
    formik.errors.nombre = ''
  }
  return (
    <Template
      buttonText={'log in'}
      screenName={'Ingresar'}
      desireScreen={'home'}
      navigation={navigation}
      submit={formik.handleSubmit}//manejar el submit de formik
    >
      <View style={styles.formContainer}>
        <Text style={styles.text}>{'Ususario:'}</Text>
        <Text
          style={{
            color: 'rgb(200,74,25)',
            position: 'absolute'
          }}

        >{formik.errors.nombre ? formik.errors.nombre : ''}</Text>

        <TextInput
          value={formik.values.nombre}
          style={styles.input}
          onChangeText={formik.handleChange('nombre')}
        >

        </TextInput>
        <Text
          style={styles.text}
        >Contraseña:
        </Text>

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
        ></TextInput>

      </View>

      <AntDesign
        style={styles.userIcon}
        name="user"
        size={24}
        color="black" />
      <AntDesign
        style={styles.padLogIcon}
        name="lock1"
        size={24}
        color="black" />

      <Pressable
        style={styles.forgotPassContainer}
      >
        <Text
          style={styles.textForgotPass}
          onPress={() => navigation.navigate('Forgot password')}
        >Forgot password?</Text>
      </Pressable>      
    </Template>
  )
  
}



