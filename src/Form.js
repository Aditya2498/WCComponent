import "./App.css";
import { useState, useRef } from "react";

function Form() {
  const [name, setName] = useState(null);
  const nameRef = useRef();
  const numberRef = useRef();

  const doSomething = () => {
    fetch("https://www.boredapi.com/api/activity")
      .then((resp) => resp.json())
      .then((data) => setName(data.activity));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      fetch(
        "https://sheet.best/api/sheets/59bfc121-0164-4086-967e-143f58a4dd24",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: nameRef.current.value,
            number: numberRef.current.value,
          }),
        }
      )
    )
      .then((resp) => resp.json())
      .then((json) => console.log(json));
  };
  return (
    <>
      <div className="container">
        <form className="form">
          <h2> Form Component</h2>
          <div className="form_block">
            <label htmlFor="name">Name:</label>
            <input placeholder="Enter Name" id="name" ref={nameRef} />
          </div>
          <div className="form_block">
            <label htmlFor="number">Phone Number:</label>
            <input
              placeholder="Enter Phone Number"
              id="number"
              ref={numberRef}
            />
          </div>
          <div className="button_container">
            <button
              type="submit"
              className="form_button"
              onClick={(e) => handleSubmit(e)}
            >
              Submit!
            </button>
          </div>
        </form>
        <div>
          <button onClick={doSomething}>Do Something!--Get</button>
          <h2>{name && name}</h2>
        </div>
      </div>
    </>
  );
}

export default Form;
