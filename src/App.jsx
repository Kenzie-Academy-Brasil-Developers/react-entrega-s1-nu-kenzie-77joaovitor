import { useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import InitialPage from "./Components/InitialPage/InitialPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Page/HomePage";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  let [listTransactionsPrint, setListTransactionsPrint] = useState([]);

  function filterListTransaction(event) {
    setListTransactions((oldList) => {
      const filter = oldList.filter((item) => {
        return item.id !== parseInt(event.target.id);
      });
      setListTransactionsPrint(() => [...filter]);
      return filter;
    });
  }

  function filterIn() {
    setListTransactionsPrint(() => [
      ...listTransactions.filter((li) => li.type === "Entrada"),
    ]);
  }

  function filterOut() {
    setListTransactionsPrint(() => [
      ...listTransactions.filter((li) => li.type === "Saída"),
    ]);
  }

  function filterAll() {
    return setListTransactionsPrint(listTransactions);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route
            path="/homepage"
            element={
              <HomePage
                setListTransactionsPrint={setListTransactionsPrint}
                listTransactionsPrint={listTransactionsPrint}
                setListTransactions={setListTransactions}
                listTransactions={listTransactions}
                filterListTransaction={filterListTransaction}
                filterAll={filterAll}
                filterIn={filterIn}
                filterOut={filterOut}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
