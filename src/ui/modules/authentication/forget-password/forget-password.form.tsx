import Button from '@/ui/design-system/button/button'
import Input from '@/ui/design-system/forms/input'
import { FormType } from '@/types/forms'

type RegisterType = {
  form: FormType
}

export default function forgetpasswordform({ form }: RegisterType) {

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
      <Button isLoading={isLoading} type="submit" fullWidth>
        Envoyer
      </Button>
    </form>
  )
}
