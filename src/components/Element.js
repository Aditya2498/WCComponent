import Input from './Elements/Input';
import Checkbox from './Elements/Checkbox';
import Select from './Elements/Select';


const Element = ({field:{field_type,field_placeholder,field_id,field_label,field_options,field_regex}}) => {
  switch(field_type){
    case 'text':
      return (<Input
        field_id= {field_id}
        field_placeholder={field_placeholder}
        field_label={field_label}
        field_regex={field_regex}
      />)
    case 'checkbox':
      return <Checkbox  
      field_id= {field_id}
      field_placeholder={field_placeholder}
      field_label={field_label}
      />
    case 'select':
       return <Select
       field_id= {field_id}
       field_placeholder={field_placeholder}
       field_label={field_label}
       field_options={field_options}
       />
     default:
      break;
  }
  return (
    <>

    </>
  )
}

export default Element