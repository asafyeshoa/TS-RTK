import React from "react"
import {useAppSelector} from "../store/hooks";


const AnswerPage: React.FC = () => {

    const answers = useAppSelector((state) => state.userAnswer.userAnswers)
    console.log(answers)



    return (
        <>
            <h1>Answers page</h1>
            <div>

            </div>
        </>
    )

}

export default AnswerPage
