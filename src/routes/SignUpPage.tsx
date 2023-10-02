import { useState, useEffect } from 'react'
import { useNavigate, Navigate, Route, Link } from 'react-router-dom';


function SignUpPage() {

  const navigate = useNavigate();

  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [repeatedPassword, setRepeatedPassword] = useState('')
  const [message, setMessage] = useState('')

  let handleSubmit = async (e: any) => {
    e.preventDefault(); 
    if (password === repeatedPassword) {
      try {
        const req = await fetch('/api/create-user', {
          method: 'POST', 
          headers: {
            'Content-type': 'application/json'
          }, 
          body: JSON.stringify({
            username: username, 
            password: password
          })
        })
        const res = await req.json() 
        console.log(res)
        if (res.success == false) {
          navigate('/login')
        } else {
          navigate('/register')
        }
      } catch (err) {
        console.log(err)
      }
    } else {
      setMessage('Username/password error')
    }
  }

  useEffect(() => {
    return setMessage(''), setUsername(''), setPassword(''), setRepeatedPassword('')
  })


  return (
    <div>
      <h1>Register Page</h1>
        <div className='registerForm'>
           <form onSubmit={handleSubmit}>
             <div className='username-box'>
               <label>Username: </label>
               <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
             </div>
             <div className='password-box'>
               <label>Password</label>
               <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
               <label>Enter Password Again</label>
               <input type='password' value={repeatedPassword} onChange={e => setRepeatedPassword(e.target.value)}/>
             </div>
             <button type="submit">Submit</button>
           </form>
           <p>{message}</p>
         </div>
         <Link to='/'>Home</Link>
      </div>
  )
}

export default SignUpPage