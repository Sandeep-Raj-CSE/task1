
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // the text entered by the user
  const [text, setText] = useState('');

  // word count
  const [wordCount, setWordCount] = useState(0);

  // character count
  // const [charCount, setCharCount] = useState(0);

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    // array of words
    const words = text.split(' ');

   
    let wordCount = 0;
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordCount++;
      }
    });
    setWordCount(wordCount);

   
  
  }, [text]);

  return (
    <div className='container'>
      <h1 >Total-Word Counter Design by Sandeep</h1>
      <div>
        <textarea
          value={text}
          onChange={changeHandler}
          placeholder='Please Type the word '
        ></textarea>

        <div>
          <p className='word-count'> Total Word Count: {wordCount}</p>
        </div>
      </div>
    </div>
  );
}

export default App;