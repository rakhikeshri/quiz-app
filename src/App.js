import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Quiz from './components/Quiz/Quiz'
import Result from './components/Result/Result'
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [questions, setQuestions]= useState();
  const [score, setScore] = useState(0);


  const fetchQuestions = async(category='', difficulty='') => {

    const { data } = await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`)

    setQuestions(data.results)
    console.log(questions)
  }

  return (
    <Router>
      <div className="app">
        <Header />
          <Routes>
            <Route exact path='/' element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions} />} />

            <Route exact path='/quiz' element={<Quiz questions={questions} setQuestions={setQuestions} name={name} score={score} setScore={setScore} />} />

            <Route exact path='/result' element={<Result name={name} score={score} />} />
          </Routes>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
