import React, {useState} from "react";

function AdminNavBar({ onChangePage }) {
  const[displayForm, setDisplayForm] = useState(false);

  function handleNewQuestion(){
    onChangePage("Form");
    setDisplayForm(true);
  }
  return (
    <nav>
      <button onClick={handleNewQuestion}>New Question</button>
      <button onClick={() => onChangePage("List")}>View Questions</button>
    </nav>
  );
}

export default AdminNavBar;
