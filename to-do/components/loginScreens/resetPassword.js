import { Template } from './template'
import { styles } from '../styles/styles'
import { Text, TextInput, View } from 'react-native';
import { useFormik } from 'formik'
import * as Yup from 'yup'

export function ResetPasswordScreen({ navigation }) {

    const formikRP = useFormik({
        initialValues: {
            password: '',
            confirmPass: ''
        },
        validationSchema: Yup.object({
            password: Yup.string().min(6, 'la contraseña debe tener 6 digitos o mas').required(),

            confirmPass: Yup.string().min(6).required()
        })
    })

    console.log(formikRP.errors.password)

    return (
        <Template
            screenName={'cambiar contraseña'}
            buttonText={'Cambiar'}
            widthBtn={{ marginTop: '92%' }}
            desireScreen={'Login'}
            navigation={navigation}
            submit={formikRP.handleSubmit}
        >
            <View style={styles.formContainer}>
                <Text style={styles.text}>Nueva contraseña:</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    onChangeText={formikRP.handleChange('password')}
                >
                </TextInput>
                <Text
                    style={{ color: 'red' }}

                >{formikRP.touched && formikRP.errors.password}</Text>
                <Text style={styles.text}>Confirmar contraseña:</Text>
                <TextInput style={styles.input} secureTextEntry={true}></TextInput>
                <Text>{ formikRP.errors}</Text>

            </View>
        </Template>
    );
}

