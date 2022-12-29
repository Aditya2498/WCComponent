import { useContext } from "react";
import { FormContext } from "../../FormContext";

const Input = ({ field_id, field_placeholder, field_label, field_value,text_type,field_type}) => {
  const { handleChange } = useContext(FormContext);

  const eventChange = (field_id,e) =>{
      handleChange(field_id,e);
  }
  return (
    <div className="input-block">
      <label htmlFor={field_id}>{field_label}</label>
      <input
        type={text_type}
        placeholder={field_placeholder}
        value={field_value}
        id={field_id}
        onChange={(e)=>eventChange(field_id,e)}
      />
    </div>
  );
};

export default Input;
