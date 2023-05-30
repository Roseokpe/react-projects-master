import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import Question from './Question';
function App() {

  const [questions, setQuestions] = useState(data)
  return <main>
        <section className="info">
      {
        questions.map((questions) => {
   return <SingleQuestion key={questions.id} {...questions} />
      })
    }
    </section>
    </main>;
}

export default App;
