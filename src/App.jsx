import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {
  let[articles,setArticles]=useState([]);
  let[category,setCategory]=useState("india");
  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2025-03-29&apiKey=6db12d1aa1cb40739a907e7a9a11c677`)
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles)
      console.log(news.articles)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[category])

  return (
    <div className='App'>


      <header className='header'> 
        <h1>News App</h1>
        <input type="text" onChange={(event)=>{
          if(event.target.value!=="")
            {
          setCategory(event.target.value);
            }
            else{
              setCategory("india");
            }
        }}
        placeholder='Search News'/>
      </header>


      <section className='news-articles'>
        {
          articles.length!==0?
          articles.map((article)=>{
            return(
              <News article={article}/>
            )
          })
          :
          <h3>no news found for searched text</h3>
        }
        
        
      </section>


    </div>
  );
}

export default App
