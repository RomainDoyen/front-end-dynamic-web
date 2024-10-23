import { BaseComponentProps } from "@/types/onboarding-steps-list";
import Button from "@/ui/design-system/button/button";

export default function ProfileStep({ prev }: BaseComponentProps) {
  return (
    <div>
      Welcome step Profile
      <Button
        type="button"
        action={prev}
      >
        Précédent
      </Button>
    </div>
  )
}