import React, { useEffect, useState } from "react";
import './App.css';
import Header from './components/header';
import NewsItem from './components/newsitem';
function App() {

const [data, setData] = useState([]);
const [search, setSearch] = useState ('java');
useEffect(()=>{
  fetch('http://hn.algolia.com/api/v1/search?query='+ search)
  .then((data)=>{  
    return data.json();
  }).then((result)=>{
    console.log("result: ", result);
    setData(result)
  })
}, [search])

const setSearchValue = (value) =>{
  setSearch(value);
}
  return (
    <div className="App">
     <Header setSearchValue={setSearchValue}/>
    {data.hits !== undefined && data.hits.map((item)=>{
       return <NewsItem author={item.author} title={item.title} url={item.url}/>
    })} 
    </div>
  );
}

export default App;
