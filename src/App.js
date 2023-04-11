import React from 'react'
import './Styles.css';
import Quiz from './Quiz'
import Questions from './Questions';
function App() {

  return (
      <section className="app">
          <Quiz qlist = {Questions}/>
      </section>
  );
}

export default App;
