import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import axios from 'axios';


function App() {
   const [id, setid] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [Date,setDateOfBirth] = useState("");
  const[mobile,setMobile] = useState("");
  const [status,setStatus] = useState("");
  const [password,setPassword] = useState("");
  const [accountType,setAccountType] = useState("");



  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(id,firstName,lastName,email,date,mobile,status,password,accountType)
    axios.post('http://localhost:8000',{
      id:id,
      firstName:firstName,
      lastName:lastName,
      email:email,
      DateOfBirth:Date,
      mobile:mobile,
      status:status,
      password:password,
      accountType:accountType
    })
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className="App">
      <header className="App-header">
      Sign Up
      <form onSubmit={handleSubmit}>
      <p>ID</p>
        <input
          required
          type="number"
          value = {id}
          onChange={(e)=>{
            setid(e.target.value)

          }
          }
        />
        <p>First Name</p>
        <input
          required
          type="fisrtName"
          value = {Text}
          onChange={(e)=>{
            setFirstName(e.target.value)

          }
          }
        />
        <p>Last Name</p>
        <input
          required
          type="lastName"
          value = {Text}
          onChange={(e)=>{
            setLastName(e.target.value)
          }
          }
          />
          <p>Email</p>
        <input
          required
          type="email"
          value = {email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }
          }
          />
          <p>Date Of Birth</p>
        <input
          required
          type="date"
          value = {Date}
          onChange={(e)=>{
            setDateOfBirth(e.target.value)
          }
          }
          />
          <p>Mobile</p>
        <input
          required
          type="number"
          value = {mobile}
          onChange={(e)=>{
            setMobile(e.target.value)
          }
          }
          />
          <p>Status</p>
        <input
          required
          type="boolean"
          value = {status}
          onChange={(e)=>{
            setStatus(e.target.value)
          }
          }
          />
        <p>Password</p>
        <input
          required
          type="text"
          value = {password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }
          }
        />
        <p>Account Type</p>
        <input
          required
          type="text"
          value = {accountType}
          onChange={(e)=>{
            setAccountType(e.target.value)
          }
          }
        />
        
        <button type="submit">submit</button>
      </form>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
