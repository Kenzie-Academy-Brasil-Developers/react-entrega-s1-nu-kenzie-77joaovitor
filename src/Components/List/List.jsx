import "./List.css";
import trash from "../../assets/trash.png";
const List = ({
  listTransactions,
  filterListTransaction,
  children,
  filterAll,
  filterIn,
  filterOut,
}) => {
  return (
    <div className="list__container">
      <div className="list__finance">
        <h2>Resumo financeiro</h2>
        <div className="list__buttonContainer">
          <button onClick={filterAll}>Todos</button>
          <button onClick={filterIn}>Entrada</button>
          <button onClick={filterOut}>Despesa</button>
        </div>
      </div>
      {children}
      <ul className="card__ul">
        {listTransactions.map((item, index) => {
          return (
            <li
              key={index}
              className={item.type === "Saída" ? "card__liGray" : "card__li"}
            >
              <div className="card__container">
                <h2 className="card__description">{item.description}</h2>
                <span className="card__type">{item.type}</span>
              </div>
              <div className="card__valueButton">
                <span className="card__value">R$ {item.value}</span>
                <button
                  className="card__button"
                  id={item.id}
                  onClick={filterListTransaction}
                >
                  <img
                    id={item.id}
                    onClick={filterListTransaction}
                    src={trash}
                    alt=""
                  />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
