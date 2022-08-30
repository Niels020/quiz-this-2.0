function StartScreen(
    { 
        handleStartSettings, 
        startSettings, 
        startQuiz, 
        numberOfRounds, 
        timeEachRound 
    }) {
        
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
                        <option value=''>All difficulties</option>
                        <option value='&difficulty=easy'>easy</option>
                        <option value='&difficulty=medium'>medium</option>
                        <option value='&difficulty=hard'>hard</option>
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
                        <option value=''>All categories</option>
                        <option value='&category=9'>General Knowledge</option>
                        <option value='&category=17'>Science & Nature</option>
                        <option value='&category=26'>Celebrities</option>
                        <option value='&category=21'>Sports</option>
                        <option value='&category=23'>History</option>
                        <option value='&category=24'>Politics</option>
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