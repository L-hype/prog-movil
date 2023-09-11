import { ForgotPassScreen } from './forgotPass'
import { SignUpScreen } from './signUp'
import { ResetScreen } from './resetpass'
import { LogInScreen } from './login'
import '../App.css';

function App() {
  return (
    <div className="App">

      <SignUpScreen />
      <ForgotPassScreen/>
      <ResetScreen/>
      <LogInScreen/>
      
    </div>
  );
}

export default App;
