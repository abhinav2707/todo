import { useState } from 'react'
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { app } from '../firebase';


const Login = () => {
  const [value, setValue] = useState();
  const [validPnNo, setValidPhNo] = useState(false);

  const verifyNumber = () => {
    if (value.length === 13) {
      setValidPhNo(true);
      setValue();
      requestOTP();
    }
  }


  const auth = getAuth(app);
const requestOTP = () => {
  window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);

}

const onSignInSubmit = () => {
  console.log('a')
}
  return (
    <div>
    <PhoneInput
      placeholder="Enter phone number"
      country="IN"
      value={value}
      onChange={setValue}/>
      <div style={{display: validPnNo?'none':'block'}}>
      <button onClick={verifyNumber}>Click</button>
      </div>
      <div style={{display: validPnNo?'block':'none'}}>
        <input type='text' placeholder='OTP' />
      </div>
    </div>
  )
}

export default Login