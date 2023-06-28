import React, {useState} from 'react';
import Profile from './Profile';
const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }
  
  const username = 'admin@admin';
  const corrPassword = 'password';
  
  const handleLogin = () =>{
    if(email === username && password ===corrPassword){
      setIsLoggedIn(true);
    }
    else{
      alert('Invalid username or password');
    }
  }

  if (isLoggedIn){
    return <Profile />
  }

  return (
    // JSX code here
    
    <div className='auth-form-container'>
      <h2>Login</h2>
    <form className='login-form' onSubmit={handleLogin}>
      <label htmlFor="email">email</label>
      <input className='input rounded-3xl' value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='johndoe@somemail.com' id='email' name='email' />
      <label htmlFor="password">password</label>
      <input className='input rounded-3xl' value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='********' id='password' name='password' />
      <button className='w-full px-6 py-4 text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded placeholder-gray-400 mt-5' type='submit'>Log In</button>
    </form >
    </div>
    
  );
};

export default  Login;
