import React, {useState} from 'react';
import {Difficulty, fetchQuizQuestions, QuestionState} from "../API";
import QuestionCard from "../compnents/QuestionCard";
import {Wrapper} from './Home.styles'
import {useHistory} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from "../store/hooks";
import {increment} from "../store/scoreSlice";
import {addAnswer} from "../store/userAnswerSlice";

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string
}

const TOTAL_QUESTIONS = 10

const HomePage: React.FC = (props) => {

    const history = useHistory()
    const dispatch = useAppDispatch()
    const scoreRX = useAppSelector((state) => state.score.value)


    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState<QuestionState[]>([])
    const [number, setNumber] = useState(0)
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
    const [gameOver, setGameOver] = useState(true)



    const startTrivia = async () => {
        setLoading(true)
        setGameOver(false)

        const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY)

        setQuestions(newQuestions)
        setUserAnswers([])
        setNumber(0)
        setLoading(false)


    }

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            const answer = e.currentTarget.value
            const correct = questions[number].correct_answer === answer
            if (correct) {
                dispatch(increment())
            }
            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer
            }
            dispatch(addAnswer(answerObject))
            setUserAnswers(prevState => [...prevState, answerObject])
        }
    }

    const nextQuestion = () => {
        const nextQuestion = number + 1;
        if (nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true)
        } else {
            setNumber(nextQuestion)
        }
    }


    return (
        <>
            <Wrapper>
                <h1>React Quiz</h1>
                {gameOver
                    ? (
                        <button className='start' onClick={startTrivia}>Start</button>
                    ) : null}
                {!gameOver && <p className='score'>Score: {scoreRX}</p>}
                {loading && <p>Loading Questions...</p>}
                {!loading && !gameOver && (
                    <QuestionCard
                        questionNr={number + 1}
                        totalQuestions={TOTAL_QUESTIONS}
                        question={questions[number].question}
                        answers={questions[number].answers}
                        userAnswer={userAnswers ? userAnswers[number] : undefined}
                        callback={checkAnswer}
                    />
                )}
                {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
                    <button className='next' onClick={nextQuestion}>Next Question</button>
                ) : null}

                {TOTAL_QUESTIONS === number + 1 && <button className='next' disabled={userAnswers.length !== number + 1}
                                                           onClick={() => history.push('/answersPage')}> Move to answers page </button>}
            </Wrapper>
        </>
    );
}

export default HomePage;
