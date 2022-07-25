import { Link } from "react-router-dom";
import Form from "../../Components/Form/Form";
import List from "../../Components/List/List";

const HomePage = ({
  setListTransactions,
  setListTransactionsPrint,
  listTransactionsPrint,
  listTransactions,
  filterListTransaction,
  filterAll,
  filterIn,
  filterOut,
}) => {
  function li() {
    setListTransactionsPrint([...listTransactions]);
  }
  const valueTotal = listTransactions.reduce(
    (prevValue, currentValue) =>
      currentValue.type === "Entrada"
        ? prevValue + currentValue.value
        : prevValue - currentValue.value,
    0
  );
  return (
    <>
      <header>
        <div>
          <img src="./Nukenzie.png" alt="" />
          <button className="header__button">
            <Link to={"/"}>Inicio</Link>
          </button>
        </div>
      </header>
      <main>
        <div className="main__div">
          <Form
            setListTransactions={setListTransactions}
            setListTransactionsPrint={setListTransactionsPrint}
            li={li}
          />
          <div className="total__container">
            <div className="total__div">
              <h2>valor Total</h2>
              <span className="total__value">
                {listTransactions.length >= 1 ? valueTotal : 0}
              </span>
            </div>
            <div className="total__description">
              <span>O valor se refere ao saldo</span>
            </div>
          </div>
        </div>
        <List
          listTransactions={listTransactionsPrint}
          filterListTransaction={filterListTransaction}
          filterAll={filterAll}
          filterIn={filterIn}
          filterOut={filterOut}
        >
          {listTransactions.length === 0 ? (
            <div>
              <h2 className="li__title">
                Você ainda não possui nenhum lançamento
              </h2>
              <ul>
                <li className="liBar">
                  <div className="li__bar1"></div>
                  <div className="li__bar2"></div>
                </li>
                <li className="liBar">
                  <div className="li__bar1"></div>
                  <div className="li__bar2"></div>
                </li>
                <li className="liBar">
                  <div className="li__bar1"></div>
                  <div className="li__bar2"></div>
                </li>
              </ul>
            </div>
          ) : (
            <></>
          )}
        </List>
      </main>
    </>
  );
};

export default HomePage;
