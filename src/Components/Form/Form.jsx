import { useState } from "react";
import "./Form.css";
const Form = ({ setListTransactions, setListTransactionsPrint }) => {
  const [description, setdescription] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState(0);
  function buttonSubmit(event) {
    event.preventDefault();
    function submitAll(event) {
      const randonNumb = Math.floor(Math.random() * 100) + 1;
      setListTransactions((oldList) => [
        ...oldList,
        {
          description: description,
          type: type ? type : "Entrada",
          value: parseInt(value),
          id: randonNumb,
        },
      ]);

      setListTransactionsPrint((oldList) => [
        ...oldList,
        {
          description: description,
          type: type ? type : "Entrada",
          value: parseInt(value),
          id: randonNumb,
        },
      ]);
    }
    submitAll();
  }

  return (
    <form action="" className="form" onSubmit={buttonSubmit}>
      <div className="form__description">
        <span>Descrição</span>
        <input
          type="text"
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setdescription(event.target.value)}
        />
        <span id="form__spanEx">Ex:compra de roupas</span>
      </div>
      <div className="form__container">
        <div className="form__value">
          <span>Valor</span>
          <input
            type="number"
            placeholder="R$"
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <div className="form__type">
          <span>Tipo de Valor</span>
          <select
            name="Select"
            id="Entrada"
            onChange={(event) => setType(event.target.value)}
          >
            {/* <option value="">--Selecione</option> */}
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
      </div>
      <div className="form__buttonDiv">
        <button
          className="form__buttonValue"
          type="submit"
          // onClick={buttonPush}
        >
          Inserir Valor
        </button>
      </div>
    </form>
  );
};

export default Form;
