
import { LoginScreen } from './components/loginScreens/login';
import { SignUpScreen } from './components/loginScreens/signUp';
import { ResetPasswordScreen } from './components/loginScreens/resetPassword';
import { ForgotPassScreen } from './components/loginScreens/forgotPassword'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from './components/innerComponents/home'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="SignUpScreen" >

        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name='Sign up'
          component={SignUpScreen}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen name='Forgot password' component={ForgotPassScreen}
          options={{
            headerShown: false
          }} />

        <Stack.Screen
          name='reset password'
          component={ResetPasswordScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='home'
          component={HomeScreen}
          options={{
            headerShown: false
          }} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

