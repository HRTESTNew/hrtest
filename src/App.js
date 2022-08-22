
import { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'


function App() {
  const adminUser = {
    email:"admin@admin.com",
    password:"admin123"
  
  }
  const [user,setUser] =  useState({name:"",email:""});
  const [error,setError] = useState(" ");
  
  const Login = details =>{ 
   

    if(details.email == adminUser.email && details.password == adminUser.password)
  {
console.log("Login");

    console.log(details);
    setUser({
      name:details.name,
      email:details.email,


    });
  }
else
{
  console.log("Details does not match");
  setError("Details does not match");
}  


  }
  
  const Logout = () => {
    setUser({
      name:"",email:""
    });
  console.log("Logout");
  }
  
  return (
    <div className="App">
    {(user.email != "")  ? (
      <div className='Welcome'>
        <h2>Welcome, <span>{user.name}</span></h2>
        <button onClick={Logout}>Logout</button>
      </div>
     ) : (

<LoginForm Login={Login} error={error}/>      
     )}
     </div>
     
  );
}

export default App;
