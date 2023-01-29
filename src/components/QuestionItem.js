import React, { useState } from "react";

function QuestionItem({ question, onDelete, onChange }) {
  const { id, prompt, answers, correctIndex } = question;
  const [correct, setCorrect] = useState(correctIndex);

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete() {
    onDelete(id);
  }

  function handleChange(e) {
    console.log(e.target.value);
    setCorrect(() => e.target.value);
    onChange(id, e.target.value);
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
