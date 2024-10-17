import { useState } from "react";
import Forgetpasswordview from "./forget-password.view"
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgetPasswordFormFieldType } from "@/types/forms";

export default function Forgetpasswordcontainer() {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {  
    handleSubmit, 
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<ForgetPasswordFormFieldType>()
  
  const onSubmit: SubmitHandler<ForgetPasswordFormFieldType> = async (formData) => {
    setIsLoading(true);
  }

  return (
    <Forgetpasswordview 
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
