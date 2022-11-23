import QuizGenerator from "../QuizGenerator"
import QuestionDisplay from "../QuestionDisplay"

export default function QuizBody({data}) {
    const [topics, question, answer] = data


    return(
        <div>
            <QuizGenerator topics={topics}/>
            <QuestionDisplay questions={question}/>
        </div>
    )
}