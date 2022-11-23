
import './index.css'
import Header from '../Header'
import Form from '../Form'
import QuizBody from '../QuizBody'
import { useEffect, useState } from 'react'
// import data from "./data"
import dataRequest from '../../dataRequest'

function App() {
const BASE_URL = 'http://localhost:3500/api/quiz';
const [data, setData] = useState(data)



useEffect(()=>{
  async function getTopics (){
    const response = await fetch(BASE_URL)
    const data = await response.json()
    console.log(data.payload)
  }

  getTopics()
},[])

async function handlePost(newItem) {
  
  setData([...data, newItem])

  const postOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newItem)
  }
  const result = await dataRequest(BASE_URL, postOptions);
  if (result){
    console.log(result);
  } 
}

async function handleUpdate (id, newItem) {
  
  const items = [...data]
  const updatedItem = items.forEach((element, index) => {
    if(element.id === id) {
        items[index] = newItem;
    }
});

  const updateOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ newItem })
  };
  const reqUrl = `${BASE_URL}/${id}`;
  const result = await dataRequest(reqUrl, updateOptions);
  if (result) {
    console.log(result)
  }
};
  






  return (
    <div className="app">
      <Header />
      <Form quizzes={data} />
      <QuizBody quizzes={data}/>
           
    </div>

  )
}

export default App

