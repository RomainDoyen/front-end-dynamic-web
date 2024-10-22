import Loginview from "./login.view"
import { LoginFormFieldType } from "@/types/forms";
import { SubmitHandler, useForm } from "react-hook-form";
import Usetoggle from "@/hooks/use-toggle";
import { toast } from "react-toastify";
import { firebaseLogin } from "@/api/authentication";
import { useRouter } from "next/router";

export default function Logincontainer() {

  const router = useRouter();

  const { value: isLoading, setValue: setIsLoading } = Usetoggle({});

  const {  
    handleSubmit, 
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFieldType>()
  
  const handleLoginUserAuthentification = async ({email, password}: LoginFormFieldType) => {
    const { error } = await firebaseLogin(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success("Vous êtes connecté avec succès");
    setIsLoading(false);
    reset();
    router.push("/mon-espace");
  }
  
  const onSubmit: SubmitHandler<LoginFormFieldType> = async (formData) => {
    setIsLoading(true);

    const { password } = formData;

    if (password.length <= 5) {
      setError("password", {
        type: "manual",
        message: "Le mot de passe doit contenir au moins 6 caractères",
      });
      setIsLoading(false);
      return;
    }
    handleLoginUserAuthentification(formData);
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
