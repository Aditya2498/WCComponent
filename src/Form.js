import "./App.css";

function Form() {
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
            <button type="submit" className="form_button">Submit!</button>
          </div>
      </form>
    </div>
    </>
  );
}

export default Form;
