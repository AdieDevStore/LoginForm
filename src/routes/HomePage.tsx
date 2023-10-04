import React, { useEffect, useState } from 'react';
import '../styles/home.css';

function HomePage() {

  const [data, setData] = useState({id: undefined}); 

  return (
    <div className='main'>
      <h1>Home page</h1>
      <div className='link-div'>
        <a href='/login'>Login</a>
      </div>
      <div className='link-div'>
        <a href='/register'>Register</a>
      </div>
    </div>
  );
}

export default HomePage;