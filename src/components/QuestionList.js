import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDelete, onChange }) {

  const listItems = questions.map((question, index) => {
    return <QuestionItem question={question} key={index} onDelete={onDelete} onChange={onChange}/>
  });

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{listItems}</ul>
    </section>
  );
}

export default QuestionList;
