function StartScreen(
    { 
        handleStartSettings, 
        startSettings, 
        startQuiz, 
        numberOfRounds, 
        timeEachRound 
    }) {

    const difficultyOptions = [
        {value: '', label: 'All Dificulties'},
        {value: '&difficulty=easy', label: 'Easy'},
        {value: '&difficulty=medium', label: 'Medium'},
        {value: '&difficulty=hard', label: 'Hard'}
    ]

    const categoryOptions = [
        {value: '', label: 'All Categories'},
        {value: '&category=9', label: 'General Knowledge'},
        {value: '&category=17', label: 'Science & Nature'},
        {value: '&category=26', label: 'Celebrities'},
        {value: '&category=21', label: 'Sports'},
        {value: '&category=23', label: 'History'},
        {value: '&category=24', label: 'Politics'}
    ]
        
    return (
        <main className='container'>

            <h1 className='startScreen--title'>Welcome to Quiz This!</h1>

            <div className='startScreen--description'>
                <p>You have {timeEachRound} seconds each round.</p>
                <p>There are {numberOfRounds} rounds.</p>
                <p>Test your knowledge if you dare!!!</p>
                <h3>But first...</h3>
            </div>
            
            <form>
                <div>
                    <h3>Choose your difficulty...</h3>
                
                    <select
                        className='startScreen--form--select'
                        id='difficulty'
                        onChange={handleStartSettings}
                        value={startSettings.difficulty}
                        name='difficulty'
                    >
                        {difficultyOptions.map((option, index) => {
                            return (
                                <option key={index} value={option.value}>{option.label}</option>
                            )
                        })}
                    </select>
                </div>
                
                <div>
                    <h3>Pick a category...</h3>

                    <select
                        className='startScreen--form--select'
                        id='category'
                        onChange={handleStartSettings}
                        value={startSettings.category}
                        name='category'
                    >
                        {categoryOptions.map((option, index) => {
                            return (
                                <option key={index} value={option.value}>{option.label}</option>
                            )
                        })}
                    </select> 
                </div>


                
                <div>
                    <h2>And let the games begin!</h2>

                    <button 
                        type='button'
                        className='startScreen--form-button button'
                        onClick={startQuiz}
                        >START THE GAME ALREADY!!!
                    </button>
                </div>
            </form>
        </main>
    )
}

export default StartScreen