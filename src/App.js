import Button from "./Button";
import styles from "./App.module.css";
import Movie from "./components/Movie";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/*
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");
  useEffect(() => {
    console.log("CALL THE API");
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
  */
/* todo 리스트 실습
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodo(""); //funtion 사용해서 수정할 것!
    setTodos((currentArray) => [todo, ...currentArray]); //...배열명 -> 배열 속 element 빼 냄
  };
  return (
    <div>
      <h1>My To Dos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write your to do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li> //array의 index들을 li들로 바꾸는 과정
        ))}
      </ul>
      {}
    </div>
  );
}
*/

/* 코인보여주는거
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => (
          <li>
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
  */
/* 코인변환기 개인실습
function App() {
  const [money, setMoney] = useState("");
  const [result, setResult] = useState(null);
  const onChange = (event) => {
    setMoney(event.target.value);
  };
  const onCaculation = () => {
    const numericValue = Number(money);
    setResult(numericValue * 2);
  };

  return (
    <div>
      <h1>비트코인 계산기</h1>
      <input value={money} onChange={onChange} type="text" placeholder="USD?" />
      <button onClick={onCaculation}>change</button>
      {result !== null && <h2> 결과 : {result}</h2>}
    </div>
  );
}
*/

//router(URL 보는 컴포넌트) render하는 역할
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hello" element={<h1>Hello</h1>} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
