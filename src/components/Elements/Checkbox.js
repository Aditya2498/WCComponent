import { useContext } from "react";
import { FormContext } from "../../FormContext";

const Checkbox = ({
  field_id,
  field_placeholder,
  field_label,
  field_value,
}) => {
  const { handleChange } = useContext(FormContext);
  return (
    <div className="input-block">
      <label htmlFor={field_id}>{field_label}</label>
      <input
        type="checkbox"
        placeholder={field_placeholder}
        value={field_value}
        id={field_id}
        onChange={(e)=>handleChange(field_id,e)}
      />
    </div>
  );
};

export default Checkbox;
