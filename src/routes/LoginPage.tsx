import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';


function LoginPage() {
  
  const navigate = useNavigate();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  console.log(username + password)

  let handleSubmit = async (e: any) => {
    e.preventDefault();
    
    try {
      let res = await fetch("api/login", {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        }),
      });

      let resJson = await res.json();
      console.log(resJson);
      console.log(res.status)
      
      if (res.status === 200) {
        setUsername("");
        setPassword("");
        console.log(resJson.message)
        navigate('/loggedin')
      } else {
        setMessage(resJson.message);
        navigate('/register')
        console.log(resJson.message)
      }
    } catch (err) {
      setMessage('Registration error')
      console.log(err);
    }
  };


  useEffect(() => {
    return setMessage(''), setUsername(''), setPassword('')
  })


  return (
    <div>
      <h1>Login Page</h1>
      <div className='loginForm'>
        <form onSubmit={handleSubmit}>
          <div className='username-box'>
            <label>Username: </label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div className='password-box'>
            <label>Password</label>
            <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
       <Link to='/'>Home</Link>
      <Link to='/register'>Register</Link>
    </div>
  )
}

export default LoginPage