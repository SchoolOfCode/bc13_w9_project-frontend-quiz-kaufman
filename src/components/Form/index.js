import './index.css'
import Button from "../Button"
import {useState, useEffect} from 'react'

export default function Form() {

    const [inputData, setInputData] = useState({
        question: '',
        answer: '',
        topic: ''
      })
      
      useEffect(() => {

      })


      function handleChange(event) {
        const {name, value} = event.target
        setMeme({
            ...inputData,
            [name]: value
        })
      }

    function createQs (obj) {
        axios.post(
    'http://localhost:4000/students/create-student', 
        obj)
          .then(res => {
            if (res.status === 200)
              alert('Student successfully created')
            else
              Promise.reject()
          })
          .catch(err => alert('Something went wrong'))
      }


    return (
        <div>
            <form className="form">
                <div className="input-field-container">
                    <label>Question:
                        <input
                        type="text"
                        className="form--input"
                        name="question"
                        value={inputData.question}
                        onChange={handleChange}
                        ></input>
                    </label>
                    
                    <label>Answer:
                        <input
                        type="text"
                        className="form--input"
                        name="answer"
                        value={inputData.answer}
                        onChange={handleChange}
                        
                        ></input>
                    </label>

                    <label>Topic:
                        <input
                        type="text"
                        className="form--input"
                        name="topic"
                        value={inputData.topic}
                        onChange={handleChange}
                        ></input>
                    </label>   
                </div>
                

                <div className="button-container">
                    <Button className="form-button" text="Edit" createQs={createQs}/>
                    <Button className="form-button" text="Update" />
                    
                </div>                 
            </form>
         </div>

    )
}