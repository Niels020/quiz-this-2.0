import Answer from './Answer'
import { decodeHTML } from '../utils'

function RoundQnA({ question, answersEl, isRoundStarted, selectAnswer }) {

    const renderAnswers = answersEl.map(el => {
        return (
            <Answer
                key={el.id}
                id={el.id}
                answer={decodeHTML(el.answer)}
                selected={el.selected}
                correct={el.correct}
                isRoundStarted={isRoundStarted}
                selectAnswer={selectAnswer}
            />
        )
    })



    return (
        <section>
            <h3 className='roundQnA--question'>{decodeHTML(question)}</h3>
            <div className='roundQnA--answers-container'>{ renderAnswers }</div>
        </section>
    )
}

export default RoundQnA