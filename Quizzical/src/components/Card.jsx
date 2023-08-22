import Box from './Box'
import React from 'react'
import {decode} from 'html-entities';
const Card = (props) => {


  const [selected , setSelected] = React.useState(null)
 
  React.useEffect(()=>{
    
    props.handelResult(selected)

  },[props.isFinish])


  const handelBoxClick = (boxId)=>{
    setSelected(boxId) 
  }


  const answers = props.allanswers.map((answer , index )=>{
    return <Box 
            key={index} 
            answer={decode(answer , {level: 'html5'})}
            isCorrect={props.isFinish && ( props.correct_answer == index ) }
            notCorrect={props.isFinish && ( props.correct_answer!= index ) }
            boxId={index}
            selected= {index == selected}
            onClick={!props.isFinish && handelBoxClick}
            isFinish={props.isFinish}
            />
  })


  return (
    <>
    <div className='m-5 '>
        <p className="text-[20px] font-bold">{props.quistion}</p>
        <section className="flex space-x-3 pt-2">
      {answers}
        </section>
    </div>
     <hr /> 
    </>
  )
}

export default Card