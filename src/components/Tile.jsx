import React from 'react'

function Tile({value,onClick,playerTurn}) {
  let hoverClass=null;
  if(value==null && playerTurn!=null){
    hoverClass=`${playerTurn.toLowerCase()}-hover`
  }
  let player=null;
  if(value==='X'){
    player='player-x'
  }
  else if(value==='O'){
    player='player-o'
  }
  return (
    <div onClick={onClick} className={`tile ${hoverClass} ${player}`}>{value}</div>
  )
}

export default Tile