import { test, expect, jest } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import QuestionDisplay from '../QuestionDisplay';
import QuestionCard from '../QuestionCard'



it('should if the values of questions props are shown as expected', async () => {
    let questionList = [
        { question_id: 1, question: "which language?", answer: "js"},
        { question_id: 2, question: "which library?", answer: "react"},
        { question_id: 3, question: " HTML or css?", answer: "HTML"},
       ];

    
    render(<QuestionDisplay questions={questionList}/>);

    
    const questionText = screen.getByText('language', {exact: false})
    expect(questionText).toBeInTheDocument()
    expect(questionText).toHaveClass('question')

    const answerText = screen.getByText('js')
    expect(answerText).toBeInTheDocument()
    expect(answerText).toHaveClass('answer', {exact: true})
 
    
});