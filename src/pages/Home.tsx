import React from 'react';
import '../index.css'
import SigninContainer from '../features/signin/containers/SigninContainer';

function Home() : JSX.Element {
  

  return (
    <div className="center-screen">
      <SigninContainer />
    </div>
  );
}

export default Home;
