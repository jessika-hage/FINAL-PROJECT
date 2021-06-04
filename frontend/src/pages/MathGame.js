import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { ProgressBar } from "../components/math/ProgressBar";
import { MathForm } from "../components/math/MathForm";
import { Header } from '../components/Header';
import { Camera } from '../components/Camera';
import { FinishGame } from "../components/math/FinishGame";


export const MathGame = () => {
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [currentProblem, setCurrentProblem] = useState(generateProblem());
  const [userAnswer, setUserAnswer] = useState("");
  const [showError, setShowError] = useState(false);
  const answerField = useRef(null);
  const resetButton = useRef(null);

  useEffect(() => {
      if (score === 10 || mistakes === 3) {
        setTimeout(() => resetButton.current.focus(), 331)
      }
    }, [score, mistakes]);

  function generateNumber(max) {
    return Math.floor(Math.random() * (max + 1))
  };
    
  function generateProblem() {
    return {
      numberOne: generateNumber(20),
      numberTwo: generateNumber(20),
      operator: ["+", "-", "x"][generateNumber(2)]
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    answerField.current.focus()
    let correctAnswer;

    if (currentProblem.operator === "+")
      correctAnswer = currentProblem.numberOne + currentProblem.numberTwo
    if (currentProblem.operator === "-")
      correctAnswer = currentProblem.numberOne - currentProblem.numberTwo
    if (currentProblem.operator === "x")
      correctAnswer = currentProblem.numberOne * currentProblem.numberTwo

    if (correctAnswer === parseInt(userAnswer, 10)) {
      setScore((prev) => prev + 1)
      setCurrentProblem(generateProblem())
      setUserAnswer("")
    } else {
      setMistakes((prev) => prev + 1)
      setShowError(true)
      setTimeout(() => setShowError(false), 401)
    }
  };
    
  const resetGame = () => {
    setScore(0)
    setMistakes(0)
    setUserAnswer("")
    setCurrentProblem(generateProblem())
    answerField.current.focus()
  };

  return (
      <MainContainer>
      <Header />
      <Camera />
        <MathContainer blurred={mistakes === 3 || score === 10}>
          <MathProblem wrongAnswer={showError}>
            {currentProblem.numberOne} {currentProblem.operator}{" "}
            {currentProblem.numberTwo}
          </MathProblem>
          <MathForm 
            handleSubmit={handleSubmit} 
            answerField={answerField}
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)} />
          <StatusText>
            You need {10 - score} more points, and are allowed to make{" "}
            {2 - mistakes} more mistakes.
          </StatusText>
          <ProgressBar score={score} />
        </MathContainer>
        <FinishGame 
          overlayVisible={mistakes === 3 || score === 10} 
          endText={score === 10 ? "Congrats! You won." : "Sorry! You lost."} 
          resetButton={resetButton} onClick={resetGame} />
      </MainContainer>
  )
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: auto;
  margin: 0 0 200px 0;  
`;

const MathContainer = styled.div`
  margin-top: 100px;
  max-width: 85%;
  ${props => props.blurred ? 
    `filter: blur(4px);`
  : `filter: none;`}
`;

const MathProblem = styled.h2`
  color: ${props => props.theme.textColor};
  text-align: center;
  font-size: 32px;
  ${props => props.wrongAnswer ? `color: red; transform: scale(1.2)` : ``}
`;

const StatusText = styled.p`
  color: ${props => props.theme.textColor};
  text-align: center;
  font-size: 14px;
`;