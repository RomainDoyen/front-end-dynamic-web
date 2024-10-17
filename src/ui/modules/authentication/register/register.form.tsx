import { FormType } from "@/types/forms"
import Button from "@/ui/design-system/button/button"
import Input from "@/ui/design-system/forms/input";

type RegisterType = {
  form: FormType
}

export default function registerform({ form }: RegisterType) {

  const {
    errors,
    register,
    isLoading,
    handleSubmit,
    onSubmit,
  } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
      <Input 
        type="email" 
        placeholder="Entrer votre email..." 
        isLoading={isLoading} 
        register={register}
        errors={errors}
        id="email"
        errorMsg="Tu dois remplir ce champ"
      />
      <Input 
        type="password" 
        placeholder="Entrer votre mots de passe..." 
        isLoading={isLoading} 
        register={register}
        errors={errors}
        id="password"
        errorMsg="Tu dois remplir ce champ"
      />
      <Input 
        type="text" 
        placeholder="Comment avez-vous entendu parler de nous ?" 
        isLoading={isLoading} 
        register={register}
        errors={errors}
        id="how_did_hear"
        errorMsg="Tu dois remplir ce champ"
      />
      <Button isLoading={isLoading} type="submit" fullWidth>
        S'inscrire
      </Button>
    </form>
  )
}
