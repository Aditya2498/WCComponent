import "./App.css";
import {useState} from "react";

function Form() {
  const [name, setName] = useState(null)
  const doSomething = () =>{
    fetch('https://www.boredapi.com/api/activity').then(resp=>
  resp.json()).then(data=>setName(data.activity))
  }
  return (
    <>
    <div className="container">
      <form className="form">
        <h2> Form Component</h2>
          <div className="form_block">
            <label htmlFor="name">Name:</label>
            <input placeholder="Enter Name" id="name" />
          </div>
          <div className="form_block">
            <label htmlFor="number">Phone Number:</label>
            <input placeholder="Enter Phone Number" id="number" />
          </div>
          <div className="button_container">
            <button type="submit" className="form_button"
            onClick={(e)=>e.preventDefault()}
            >Submit!</button>
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
