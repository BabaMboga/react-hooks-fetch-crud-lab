import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch (' http://localhost:4000/questions')
    .then(response => response.json())
    .then(questions => setQuestions(questions))
    .catch(error => console.log(error));
  }, []);

  function handleAddQuestion(formData){
    fetch (' http://localhost:4000/questions',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }) 
    .then((response) => response.json())
    .then((data) => setQuestions([...questions,data]));
    setPage("List");
     }
  

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion}/> : <QuestionList questions={questions} />}
    </main>
  );
}

export default App;
