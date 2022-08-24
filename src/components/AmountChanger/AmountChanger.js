import React from "react";
import { CartHandler } from "../../config/C4";

const AmountChanger = ({ id, amount }) => {
  const { edit, remove } = CartHandler();

  return (
    <React.Fragment>
      <div className="amount-changer">
        <button
          className="remove"
          onClick={() => edit(id, '-')}
        >
          <span className="material-icons">remove</span>
        </button>
        <div className="current-amount">{amount}</div>
        <button
          className="add"
          onClick={() =>  edit(id, '+')}
        >
          <span className="material-icons">add</span>
        </button>
      </div>
      <button
        type="button"
        className="remove-all"
        onClick={() => remove(id)}
      >
        Remove
      </button>
    </React.Fragment>
  );
};

export default AmountChanger;
