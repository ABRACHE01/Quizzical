import React from 'react'

const Landing = (props) => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center h-screen">
    <h1 className="text-4xl font-bold text-blue-950 ">Quizzical</h1>
    <p className="text-blue-900 text-lg  m-3 font-semibold ">Some description if needed</p>
    <button className="px-14 py-4 m-4 bg-blue-900 rounded-xl text-white font-bold" onClick={props.onClick}>Start quiz</button>
    </div>
    </>
  )
}

export default Landing