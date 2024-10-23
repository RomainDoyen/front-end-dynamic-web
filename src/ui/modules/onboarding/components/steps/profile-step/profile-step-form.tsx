import { FormType } from "@/types/forms"
import Input from "@/ui/design-system/forms/input";
import Textarea from "@/ui/design-system/forms/textarea";

type ProfileStepFormProps = {
  form: FormType;
}

export default function ProfileStepForm({ form }: ProfileStepFormProps) {

  const { errors, register, isLoading } = form;

  return (
    <form className="w-full max-w-md space-y-4">
      <Input
        label="Nom d'utilisateur"
        placeholder="John Doe"
        type="text"
        isLoading={isLoading}
        errors={errors}
        register={register}
        errorMsg="Tu dois renseigner un nom d'utilisateur"
        id="displayName"
      />
      <Input
        label="Expertise"
        placeholder="Votre expertise"
        type="text"
        isLoading={isLoading}
        errors={errors}
        register={register}
        errorMsg="Tu dois renseigner une expertise"
        id="expertise"
      />
      <Textarea
        label="Biographie"
        placeholder="Indique une courte description de toi et de ton parcours..."
        isLoading={isLoading}
        errors={errors}
        register={register}
        errorMsg="Tu dois renseigner une biographie"
        rows={5}
        id="biography"
        required={false}
      />
    </form>
  )
}
