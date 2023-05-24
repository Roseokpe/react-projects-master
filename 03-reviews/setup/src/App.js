import React from 'react';
import Review from './Review';
import { FaGithubSquare } from 'react-icons/fa'
function App() {
  return <main>
    <section className='contauner'>
    <h2 className='title'>
      our reviews
      <div className='underline'></div>
    </h2>
    <Review />
    </section>
  </main>
 
}

export default App;
