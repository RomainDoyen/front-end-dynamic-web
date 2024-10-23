import { BaseComponentProps } from "@/types/onboarding-steps-list"
import Button from "@/ui/design-system/button/button"

export default function WelcomeStep({ next }: BaseComponentProps) {
  return (
    <div>
      Welcome step
      <Button
        type="button"
        action={next}
      >
        Suivant
      </Button>
    </div>
  )
}
