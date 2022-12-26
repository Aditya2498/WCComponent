import { useEffect, useState } from "react";
import Element from "./components/Element.js";
import formJson from "./form.json"
import {formSchema} from './formSchema';
import { FormContext } from "./FormContext.js";
import Ajv from 'ajv';
import './App.css';

const FormNew = () => {

  const [element, setElement] = useState(null);
  const [error, setError] = useState(false);
  

  useEffect(() => {
    const ajv = new Ajv();
    const validate = ajv.compile(formSchema);
    const valid = validate(formJson);
    console.log(valid,"validation check!");
    if(!valid){
      console.log(validate.errors);
      setElement({});
      setError(true);
    }
    else{
      setElement(formJson);
      setError(false);
    }
  }, []);
  const { fields, page_label } = element ?? {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(element);
  };
  const handleChange = (id, event) => {
    const newElements = { ...element };
    newElements.fields.forEach((field) => {
      const { field_type, field_id } = field;
      if (id === field_id) {
        switch (field_type) {
          case "checkbox":
            field["field_value"] = event.target.checked;
            break;

          default:
            field["field_value"] = event.target.value;
            break;
        }
      }
    });
    console.log("handle change", event.target.value);
  };
  return (
    <div className="wc-form">
     <h2 className="title">{page_label}</h2>
    {
      error ? <div class="error">Kindly Correct Schema Errors!</div>:
      <FormContext.Provider value={{ handleChange }}>
          <form>
            {fields
              ? fields.map((field, index) => (
                  <Element key={index} field={field} />
                ))
            : null}
            <button type="submit" onClick={(e)=>handleSubmit(e)}>Submit</button>
          </form>
        </FormContext.Provider>
    }
    </div>
  );
};

export default FormNew;
