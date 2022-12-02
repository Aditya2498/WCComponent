import { useContext } from "react";
import { FormContext } from "../../FormContext";

const Input = ({ field_id, field_placeholder, field_label, field_value,field_regex,field_type}) => {
  const { handleChange } = useContext(FormContext);

  const eventChange = (field_id,e) =>{
    const regex = new RegExp(field_regex)
    if(regex.test(e.target.value)){
      console.log(field_regex,regex.test(e.target.value))
      console.log("regex matched!");
      handleChange(field_id,e);
    }
    else{
     console.log("No Special Characters Allowed!",regex.test(e.target.value)); 
     console.log(field_regex,regex.test(e.target.value))
    }
  }
  return (
    <>
      <label htmlFor={field_id}>{field_label}</label>
      <input
        type="text"
        placeholder={field_placeholder}
        value={field_value}
        id={field_id}
        onChange={(e)=>eventChange(field_id,e)}
      />
    </>
  );
};

export default Input;
