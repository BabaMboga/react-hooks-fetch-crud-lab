import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("Form");

  function handleChangePage(newPage) {
    setPage(newPage);
  }

  return (
    <main>
      <AdminNavBar onChangePage={handleChangePage} />
      {page === "Form" && <QuestionForm />}
      {page === "List" && <QuestionList />}
    </main>
  );
}

export default App;