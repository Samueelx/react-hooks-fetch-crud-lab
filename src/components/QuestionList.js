import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDelete }) {

  const listItems = questions.map((question, index) => {
    return <QuestionItem question={question} key={index} onDelete={onDelete}/>
  });

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{listItems}</ul>
    </section>
  );
}

export default QuestionList;
