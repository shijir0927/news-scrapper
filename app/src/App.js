import React, { useEffect, useState } from "react";
import './App.css';
import Header from './components/header';
import NewsItem from './components/newsItem';

function App() {

  const [data, setData] = useState([]);

  useEffect(()=>{

    fetch('http://hn.algolia.com/api/v1/search?query='+'java')
    .then((data)=>{
      return data.json();
    }).then((result)=>{
      console.log("result: ",result);
      setData(result)
    })

  }, [])

  return (
    <div className="App">
      <Header/>
      {data.hits !== undefined && data.hits.map((item)=>{
        return <NewsItem author={item.author} title={item.title} url={item.url}/>
      })}
    </div>
  );
}

export default App;
