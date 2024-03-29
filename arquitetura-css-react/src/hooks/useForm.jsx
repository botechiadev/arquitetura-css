import { useState } from "react"; 
export  function useForm(initialForm ={}) {

  const [formState, setFormState] = useState(initialForm );

  const handleInputChange = ({target}) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

const handleResetForm =()=>{
  setFormState(initialForm);
}

  return (
   {
     formState,
     handleInputChange,
    handleResetForm
   }
  )
}
