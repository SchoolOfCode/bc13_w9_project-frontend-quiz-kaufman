
import './index.css'
import Header from '../Header'
import Form from '../Form'
import QuizBody from '../QuizBody'
import { useEffect } from 'react'

function App() {
  
useEffect(()=>{
  async function getTopics (){
    const response = await fetch("/api/quiz")
    const data = await response.json()
    console.log(data.payload)
  }
getTopics()
},[])








  return (
    <div className="app">
      <Header />
      <Form />
      <QuizBody/>
           
    </div>

  )
}

export default App

// import './index.css'

// function App() {
//   return (
//     <div className="App">
//       <div className="header">
//           <div>logo</div>
//           <h1>Quiz Kaufman</h1>
//       </div> 
//       <section>
//         <form className="form">
//           <input></input>
//           <input></input>
//           <input></input>
//           <input></input>
//           <div className="button-container">
//             <button>click me</button>
//             <button>click</button>
//             <button>click</button>
//           </div>                 
//         </form>
//       </section>
//       <section className="quiz-body">
        // <div className="quiz-generator">
        //   <form>
        //     <label> topic1
        //     <input type="checkbox"></input>
        //     </label>
        //     <label> topic2
        //     <input type="checkbox"></input>
        //     </label>
        //     <label> topic3
        //     <input type="checkbox"></input>
        //     </label>
        //     <label> topic4
        //     <input type="checkbox"></input>
        //     </label>
        //   </form>
        // </div>
//       </section>
//       <section className='question-display'>
//         <div className='question-card'>
//           <h4>Question</h4>
//           <p>placeholder</p>
//           <h4>Answer</h4>
//           <p>placeholder</p>
//           <button>Reveal</button>
//         </div>
//       </section>

//     </div>
    

//   );
// }

// export default App;