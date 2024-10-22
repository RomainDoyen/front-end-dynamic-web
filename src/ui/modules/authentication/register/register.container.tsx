import { SubmitHandler, useForm } from "react-hook-form"
import Registerview from "./register.view"
import { RegisterFormFieldType } from "@/types/forms"
import { firebaseCreateUser, sendEmailVerificationProcedure } from "@/api/authentication";
import { toast } from "react-toastify";
import Usetoggle from "@/hooks/use-toggle";
import { firestoreCreateDocument } from "@/api/firestore";

export default function RegisterContainer() {

  const { value: isLoading, setValue: setIsLoading } = Usetoggle({});

  const {  
    handleSubmit, 
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFieldType>()

  const handleCreateUserDocument = async (collectionName: string, documentId: string, document: object) => {
    const { error } = await firestoreCreateDocument(collectionName, documentId, document);

    if (error) {
      toast.error(error.message);
      setIsLoading(false);
      return;
    }

    toast.success("Votre compte a été créé avec succès");
    setIsLoading(false);
    reset();

    sendEmailVerificationProcedure();
  }

  const handleCreateUserAuthentification = async ({email, password, how_did_hear}: RegisterFormFieldType) => {
    const { data, error } = await firebaseCreateUser(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }

    // toast.success("Votre compte a été créé avec succès");
    // setIsLoading(false);
    // reset();

    const userDocumentData = {
      email: email,
      how_did_hear: how_did_hear,
      uid: data.uid,
      creation_date: new Date(),
    }

    handleCreateUserDocument("users", data.uid, userDocumentData);
  }
  
  const onSubmit: SubmitHandler<RegisterFormFieldType> = async (formData) => {
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
    handleCreateUserAuthentification(formData);
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
