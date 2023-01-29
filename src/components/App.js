import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  const QUESTIONS_URL = "http://localhost:4000/questions";

  /**GET the questions */
  useEffect(() => {
    fetch(QUESTIONS_URL).then(res => res.json())
    .then(data => {
      setQuestions(() => data);
    });
  }, []);

  function deleteQuestion(id) {
    fetch(`${QUESTIONS_URL}/${id}`, {
      method: 'DELETE',
    });

    setQuestions(() => {
      const updatedArray = questions.filter((question) => question.id !== id);
      return updatedArray;
    });
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm setQuestions={setQuestions} questions={questions}/> : <QuestionList questions={questions} onDelete={deleteQuestion} />}
    </main>
  );
}

export default App;
