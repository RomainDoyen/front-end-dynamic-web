import Button from "@/ui/design-system/button/button";
import clsx from "clsx";

type OnboardingFooterProps = {
    next?: () => void;
    prev?: () => void;
    isFirstStep?: () => boolean;
    isFinalStep?: () => boolean;
    isLoading?: boolean;
}

export default function OnboardingFooter({ 
  next, 
  prev, 
  isFirstStep, 
  isFinalStep,
  isLoading
}: OnboardingFooterProps) {

  let actionButtonTitle: string;

  if (isFirstStep && isFirstStep()) {
    actionButtonTitle = "Démarrer";
  } else if (isFinalStep && isFinalStep()) {
    actionButtonTitle = "Terminer";
  } else {
    actionButtonTitle = "Continuer";
  }

  return (
    <div className="absolute bottom-0 left-0 w-full p-5 bg-white border-t border-gray-400">
      <div className={clsx(
        prev && !next && "justify-start",
        !prev && next && "justify-end",
        prev && next && "justify-between",
        "flex items-center gap-5"
      )}>
        {prev && (
          <Button
            disabled={isLoading}
            variant={!isLoading ? "outline" : "disabled"}
            action={prev}
          >
            Retour
          </Button>
        )}
        {next && (
          <Button
            disabled={isLoading}
            action={next}
          >
            {actionButtonTitle}
          </Button>
        )}
      </div>
    </div>
  )
}
