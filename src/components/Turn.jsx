import React, { useState } from 'react'

function Turn({turn }) {
  

  return (
    
          <div style={{
            width:"100%",
            color:'white',
            backgroundColor:'black',
            borderRadius:'10px',
             display:'inline-flex',
             justifyContent:"space-between",
             textAlign:"center"
          }}>
              <p 
            className={`turn ${turn==="x_turn" ? "o_turn":""}`}
              >Player X</p>
            <p className={` turn ${turn==="o_turn" ? "x_turn":""}`}>Player O</p>
          </div>
        
      
  )
}

export default Turn