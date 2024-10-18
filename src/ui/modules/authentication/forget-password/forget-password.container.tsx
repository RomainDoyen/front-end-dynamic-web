import Forgetpasswordview from "./forget-password.view"
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgetPasswordFormFieldType } from "@/types/forms";
import Usetoggle from "@/hooks/use-toggle";
import { toast } from "react-toastify";
import { firebaseForgetPassword } from "@/api/authentication";
import { useRouter } from "next/router";

export default function Forgetpasswordcontainer() {

  const { value: isLoading, setValue: setIsLoading } = Usetoggle({});

  const router = useRouter();

  const {  
    handleSubmit, 
    formState: { errors },
    register,
    reset,
  } = useForm<ForgetPasswordFormFieldType>()

  const handleResetPassword = async ({email}: ForgetPasswordFormFieldType) => {
    const { error } = await firebaseForgetPassword(email);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success(`Un email de réinitialisation de mot de passe a été envoyé à ${email}`);
    setIsLoading(false);
    reset();
    router.push("/connexion");
  }
  
  const onSubmit: SubmitHandler<ForgetPasswordFormFieldType> = async (formData) => {
    setIsLoading(true);
    handleResetPassword(formData);
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
