import { FormType } from "@/types/forms"
import Button from "@/ui/design-system/button/button"

type RegisterType = {
  form: FormType
}

export default function registerform({ form }: RegisterType) {

  const {
    errors,
    control,
    register,
    isLoading,
    handleSubmit,
    onSubmit,
  } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        type="email" 
        placeholder="Entrer vôtre email..." 
        disabled={isLoading} 
        {...register("email", { required: {
          value: true,
          message: "Ce champ est requis"
        }})}
        autoComplete="off"
      />
      <input 
        type="password" 
        placeholder="Entrer vôtre mot de passe..." 
        disabled={isLoading} 
        {...register("password", { required: {
          value: true,
          message: "Ce champ est requis"
        }})}
        autoComplete="off"
      />
      <input 
        type="text" 
        placeholder="Comment avez-vous entendu parler de nous ?" 
        disabled={isLoading} 
        {...register("how_did_hear", { required: {
          value: true,
          message: "Ce champ est requis"
        }})}
        autoComplete="off"
      />
      <Button isLoading={isLoading} type="submit" fullWidth>
        S'inscrire
      </Button>
    </form>
  )
}
