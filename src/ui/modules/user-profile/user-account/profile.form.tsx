import { FormType } from "@/types/forms";
import UploadAvatar from "@/ui/components/upload-avatar/upload.avatar";
import Button from "@/ui/design-system/button/button";
import Input from "@/ui/design-system/forms/input";
import Textarea from "@/ui/design-system/forms/textarea";
import Typography from "@/ui/design-system/typography/typography";
import { ChangeEvent } from "react";

type ProfileViewProps = {
  form: FormType;
}

export default function ProfileForm({ form }: ProfileViewProps) {

  const { 
    errors, 
    control, 
    register, 
    isLoading, 
    handleSubmit, 
    onSubmit 
  } = form;

  function handleImageSelect(e: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">

      <div className="flex items-center justify-between py-5">
        <div>
          <UploadAvatar 
            handleImageSelect={handleImageSelect} 
            imagePreview={null} 
            uploadProgress={0} 
            isLoading={isLoading} 
          />
        </div>
        <div className="flex items-end gap-1">
          <Typography 
            variant="h1"
            component="div"
          >
            0
          </Typography>
          <Typography 
            variant="caption4"
            component="div"
            theme="gray-600"
            className="mb-3"
          >
            abonnés
          </Typography>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-6 space-y-4">
          <Input 
            label="Nom d'utilisateur"
            placeholder="Nom d'utilisateur"
            isLoading={isLoading}
            type="text" 
            register={register} 
            errors={errors} 
            id="displayName"
            errorMsg="Tu dois renseigner un nom d'utilisateur"
          />
          <Input 
            label="Expertise"
            placeholder="Expertise"
            isLoading={isLoading}
            type="text" 
            register={register} 
            errors={errors} 
            id="expertise"
            errorMsg="Tu dois renseigner ton expertise"
          />
        </div>
        <div className="col-span-6 space-y-4">
        <Input 
            label="Linkedin"
            placeholder="linkedin.com/in/tonprofil"
            isLoading={isLoading}
            type="url" 
            register={register} 
            errors={errors} 
            id="linkedin"
            required={false}
            errorMsg="Tu dois renseigner ton profil Linkedin"
          />
          <Input 
            label="Github"
            placeholder="github.com/tonprofil"
            isLoading={isLoading}
            type="url" 
            register={register} 
            errors={errors} 
            id="github"
            required={false}
            errorMsg="Tu dois renseigner ton profil Github"
          />
        </div>
      </div>

      <Textarea 
        label="Biographie"
        placeholder="Indique ta biographie" 
        rows={16}
        isLoading={isLoading} 
        register={register} 
        errors={errors}
        errorMsg="Tu dois renseigner ta biographie"
        required={false} 
        id="biography" 
      />

      <div className="flex justify-end">
        <Button
          type="submit"
          isLoading={isLoading}
        >
          Enregistrer
        </Button>
      </div>
    </form>
  )
}
