import React from 'react'
import { questions } from './api.js';
import './index.css';
import Accordion from './Accordion';

const App = () => {

  // const [data, setData] = useState(questions);
  return (
    <>
      <div className="main-div">
        <h1>React Interview Questions</h1>
        {
          questions.map((curElem) => {
            return <Accordion key={curElem.id}
              question={curElem.question}
              answer={curElem.answer}></Accordion>
          })
        }
      </div>

    </>
  )
}

export default App
