
import React from "react"

const Box = (props) => {

const style = ()=>{

 
  
  if( (!props.selected  && props.isCorrect ) ||  props.selected && props.isCorrect ){
      
    return 'bg-green-300'
  }
  
  if(props.selected && props.notCorrect){
      
    return 'bg-red-300'
  }

  if(props.selected ){

     return 'bg-blue-300'
  }
    
   
  
   
}


const onClick=()=>props.onClick(props.boxId)
  return (
    <>
    <button 
    type='button' 
    className={ `border-2 rounded-xl px-4 font-semibold ${ style() }` }
    onClick={ !props.isFinish ? onClick : null }
     >{props.answer}</button>
    </>
  )
}

export default Box