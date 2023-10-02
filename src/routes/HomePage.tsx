import React, { useEffect, useState } from 'react';
import '../App.css';

function HomePage() {

  const [data, setData] = useState({id: undefined}); 

  return (
    <div>
      <h1>Home page</h1>
      <div>
        <a href='/login'>Login</a>
      </div>
      <div>
        <a href='/register'>Register</a>
      </div>
    </div>
  );
}

export default HomePage;