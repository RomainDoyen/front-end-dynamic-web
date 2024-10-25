import { useAuth } from "@/context/AuthUserContext";
import ProfileView from "./profile.view";
import Usetoggle from "@/hooks/use-toggle";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserProfileFormFieldType } from "@/types/forms";

export default function Useraccountcontainer() {

  const { authUser } = useAuth();

  const { value: isLoading, setValue: setLoading } = Usetoggle({});

  const {
    handleSubmit,
    control,
    formState: { errors },
    register,
    setValue,
    setError,
  } = useForm<UserProfileFormFieldType>();

  const handleUpdateUserDocument = async (formData: UserProfileFormFieldType) => {
    setLoading(true);
    console.log(formData);
    setLoading(false);
  }

  const onSubmit: SubmitHandler<UserProfileFormFieldType> = async (formData) => {
    handleUpdateUserDocument(formData);
    return;
  }

  return (
    <div className="">
      <ProfileView
        form={{
          errors,
          control,
          register,
          isLoading,
          handleSubmit,
          onSubmit,
        }}
      />
    </div>
  )
}
