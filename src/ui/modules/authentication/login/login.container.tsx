import { useState } from "react";
import Loginview from "./login.view"
import { LoginFormFieldType } from "@/types/forms";
import { SubmitHandler, useForm } from "react-hook-form";

export default function Logincontainer() {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {  
    handleSubmit, 
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFieldType>()
  
  const onSubmit: SubmitHandler<LoginFormFieldType> = async (formData) => {
    setIsLoading(true);
  }

  return (
    <Loginview 
      form={{
        errors,
        register,
        handleSubmit,
        onSubmit,
        isLoading,
      }}
    />
  )
}
