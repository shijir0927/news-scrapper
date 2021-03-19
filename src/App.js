import React, { useEffect, useState } from "react";
import './App.css';
import Header from './components/header';
import NewsItem from './components/newsItem';

function App() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('java');
  const [recents, setRecents] = useState([]);

  useEffect(()=>{

    fetch('https://hn.algolia.com/api/v1/search?query='+search)
    .then((data)=>{
      return data.json();
    }).then((result)=>{
      setData(result)
    })

    fetch('https://hn.algolia.com/api/v1/search?tags=front_page')
    .then((data)=>{
      return data.json();
    }).then((result)=>{
      setRecents(result)
    })

  }, [search])

  const setSearchValue = (value) =>{
    setSearch(value);
  }

  return (
    <div className="App">
      <Header setSearchValue={setSearchValue}/>
      <div className="news-container">
        <div className="news-container-left">
          {data.hits !== undefined && data.hits.map((item)=>{
            return <NewsItem author={item.author} title={item.title} url={item.url}/>
          })}
        </div>
        <div className="news-container-right">
          <h3>Most Recents</h3>
          {recents.hits !== undefined && recents.hits.slice(0, 6).map((item)=>{
            return <NewsItem author={item.author} title={item.title} url={item.url}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
