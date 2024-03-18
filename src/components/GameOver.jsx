import React from 'react'
import GameState from './GameState'

function GameOver({gameState}) {

    switch(gameState){
        case GameState.inProgress:
            return <div></div>;
        case GameState.playerOWins:
            return <div className='game-over'>Congratulations : <span className='player-o'>O</span> Wins</div>;
        case GameState.playerXWins:
            return <div className='game-over'>Congratulations : <span className='player-x'>X</span> Wins</div>;   
        case GameState.draw:
            return <div className='game-over'>Draw</div>;     
        default:
            return<></>

    }
  
}

export default GameOver
