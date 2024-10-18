import Forgetpasswordview from "./forget-password.view"
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgetPasswordFormFieldType } from "@/types/forms";
import Usetoggle from "@/hooks/use-toggle";

export default function Forgetpasswordcontainer() {

  const { value: isLoading, setValue: setIsLoading } = Usetoggle({});

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
