import { SubmitHandler, useForm } from "react-hook-form"
import Registerview from "./register.view"
import { RegisterFormFieldType } from "@/types/forms"

export default function RegisterContainer() {

  const isLoading = false;

  const {  
    handleSubmit, 
    control,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFieldType>()
  
  const onSubmit: SubmitHandler<RegisterFormFieldType> = async (formData) => {
    try {
      // Call the API
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Registerview 
        form={{
          errors,
          control,
          register,
          handleSubmit,
          onSubmit,
        }}
      />
    </div>
  )
}
