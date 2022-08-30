function Answer(
    { 
        answer, 
        id, 
        correct, 
        selected, 
        isRoundStarted, 
        selectAnswer 
    }) {

    function getColor() {
        if(isRoundStarted) {
            return selected ? 'rgba(135, 189, 218, 0.6)' : 'white'
        } else {
            if(selected && correct) {
                return 'green'
            } else if(correct) {
                return 'lightgreen'
            } else if(selected) {
                return 'red'
            } else return 'white'
        }
    }

    return (
        <div 
            className='answer-container'
            onClick={() => isRoundStarted && selectAnswer(id)}
            style={{backgroundColor: getColor()}}
        >
            <h4 className='answer'>{answer}</h4>
        </div>
    )
}

export default Answer