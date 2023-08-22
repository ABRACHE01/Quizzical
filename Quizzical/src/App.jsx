import React from "react";
import Card from "./components/Card";
import Landing from "./components/Landing";
import { nanoid } from "nanoid";
import { decode } from "html-entities";
import svgImage from "./assets/blob-scene-haikei.svg";
function App() {
  const [isStarting, SetIsStarting] = React.useState(true);
  const [quizData, setQuizData] = React.useState([]);
  const [results, setResults] = React.useState([]);
  const [isFinish, setIsFinish] = React.useState(false);

  const resetTest = ()=>{
    SetIsStarting(true)
    setQuizData([])
    setResults([])
    setIsFinish(false)
  }

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((data) =>
        setQuizData(() => {
          return data.results.map((card) => {
            const randomiseAnswers = [
              ...card.incorrect_answers,
              card.correct_answer,
            ].sort(() => Math.random() - 0.5);

            return {
              ...card,
              allanswers: randomiseAnswers,
            };
          });
        })
      );
  }, [isStarting]);

  function Starting() {
    SetIsStarting((prevState) => !prevState);
  }

  function handelResult(choise) {
    setResults((prev) => {
      return [...prev, choise];
    });
  }

  const cards = quizData.map((card, index) => {
    return (
      <Card
        key={index}
        quistion={decode(card.question, { level: "html5" })}
        allanswers={card.allanswers}
        correct_answer={card.allanswers.indexOf(card.correct_answer)}
        handelResult={handelResult}
        isFinish={isFinish}
        results={results}
      />
    );
  });
  const backgroundStyle = {
    backgroundImage: `url(${svgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

 

  return (
    <div className="bg-index" style={backgroundStyle}>
      {isStarting ? (
        <Landing onClick={Starting} />
      ) : (
        <div className="mx-20 ">
          <h1 className=" p-10 font-extrabold text-center text-4xl text-blue-900">
            Test your knowlege 
          </h1>

          <div className="">{cards}</div>

          <div className=" flex justify-end  ">
            {isFinish ? (
              <>
              
              <p className="  text-xl text-grat font-bold py-4 m-4">
                You scored /{quizData.length} correct answers
              </p>

              <button
              className="px-14 py-4 m-4 bg-blue-900 rounded-xl text-white font-bold"
              onClick={()=>resetTest()}
              >
              Try again 
              </button>
              

              </>
            ) : (
              <button
                className="px-14 py-4 m-4 bg-blue-900 rounded-xl text-white font-bold"
                onClick={() => setIsFinish((prev) => !prev)}
              >
                Revale results
              </button>
            )}
          </div>

        </div>
      )}
    </div>
  );
}

export default App;
