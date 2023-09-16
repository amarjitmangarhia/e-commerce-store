import classes from "./Form.module.css";
import { storeSliceActions } from "../../store/react-store";
import { useDispatch } from "react-redux/es/exports";
import { useRef, useState } from "react";

const Form = () => {
  const [s, setS] = useState(false);
  const [inputError, setInputError] = useState(false);
  const dispatch = useDispatch();

  const inputName = useRef();
  const inputEmail = useRef();
  const inputAddress = useRef();
  const inputStreet = useRef();
  const inputLocality = useRef();
  const inputPhone = useRef();
  let content = <p className={classes.noError}>Your Order Has been Sent!</p>;
  let error = <p className={classes.error}>Please Input All Fields!</p>;
  const orderHandler = () => {
    if (
      inputName.current.value === "" ||
      inputEmail.current.value === "" ||
      inputAddress.current.value === "" ||
      inputStreet.current.value === "" ||
      inputLocality.current.value === "" ||
      inputPhone.current.value === ""
    ) {
      setInputError(true);
      setS(false);
    } else {
      setS(true);
      setInputError(false);
    }
  };

  const hideFormHandler = () => {
    dispatch(storeSliceActions.hideForm());
  };

  return (
    <div>
      <form className={classes.form}>
        <label>Name</label>
        <input ref={inputName} type="text"></input>
        <label>Email</label>
        <input ref={inputEmail} type="email"></input>
        <label>Address</label>
        <input ref={inputAddress} type="text"></input>
        <label>Street</label>
        <input ref={inputStreet} type="text"></input>
        <label>Locality</label>
        <input ref={inputLocality} type="text"></input>
        <label>Phone Number</label>
        <input ref={inputPhone} type="number"></input>
      </form>
      <div className={classes.buttons}>
        <button onClick={orderHandler} type="button" className={classes.order}>
          Order
        </button>
        <button
          onClick={hideFormHandler}
          type="submit"
          className={classes.close}
        >
          Close
        </button>
      </div>
      {s && content}
      {inputError && error}
    </div>
  );
};

export default Form;
