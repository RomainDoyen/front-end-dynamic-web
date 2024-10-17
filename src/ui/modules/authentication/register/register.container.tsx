import { SubmitHandler, useForm } from "react-hook-form"
import Registerview from "./register.view"
import { RegisterFormFieldType } from "@/types/forms"
import { useState } from "react";

export default function RegisterContainer() {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {  
    handleSubmit, 
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFieldType>()
  
  const onSubmit: SubmitHandler<RegisterFormFieldType> = async (formData) => {
    setIsLoading(true);
  }

  return (
    <div>
      <Registerview 
        form={{
          errors,
          register,
          handleSubmit,
          onSubmit,
          isLoading,
        }}
      />
    </div>
  )
}
