import Typography from "@/ui/design-system/typography/typography";
import ProfileForm from "./profile.form";
import { FormType } from "@/types/forms";

type ProfileViewProps = {
  form: FormType;
}

export default function ProfileView({ form }: ProfileViewProps) {
  return (
    <div className="space-y-5">
      <Typography 
        variant="h1" 
        component="h1"
        className="text-center"
      >
        Mon compte
      </Typography>
      <ProfileForm form={form} />
    </div>
  )
}
