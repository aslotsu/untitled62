import './App.css';
import {useState} from "react";
import {useApp} from "./useApp";

function App() {
  const app = useApp()
  const [emailValues, setEmailValues] = useState("")
  const [passwordValues, setPasswordValues] = useState("")

  const register = async(email, password) => {
    email = emailValues
    password = passwordValues
    await app.emailPasswordAuth.registerUser({ email: email, password:password });
  }
  return (
      <div>
        welcome to byte-on-campus
        <h1>{process.env.NEXT_PUBLIC_APP_ID}</h1>
        <input type="email" name="email" id="email" placeholder="email" value={emailValues} onChange={(event)=>setEmailValues(event.target.value)}/>
        <br/>
        <br/>

        <input type="password" name="password" id="password" placeholder="password" value={passwordValues} onChange={(event)=>setPasswordValues(event.target.value)}/>
        <br/>
        <br/>
        <h1>{emailValues}</h1>
        <h1>{passwordValues}</h1>
        <button type="submit" onClick={register}>Register</button>
      </div>
  )
}

export default App;
