import { useContext } from "react";
import { FormContext } from "../../FormContext";

const Select = ({
  field_id,
  field_label,
  field_placeholder,
  field_value,
  field_options,
}) => {
  const {handleChange} = useContext(FormContext)
  return (
    <div className="input-block">
    <label htmlFor={field_id}>{field_label}</label>
      <select
      id={field_id}
      onChange={(e)=>handleChange(field_id,e)}
      >
        <option>Open this to select menu</option>
        {field_options.length > 0 &&
          field_options.map((option, i) => (
            <option value={option.option_label} key={i}>
              {option.option_label}
            </option>
          ))}
        <option></option>
      </select>
    </div>
  );
};

export default Select;
