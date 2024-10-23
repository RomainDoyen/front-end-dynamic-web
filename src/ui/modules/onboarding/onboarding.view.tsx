import { BaseComponentProps } from "@/types/onboarding-steps-list";

export default function OnboardingView({ 
  getCurrentStep, 
  next, 
  prev, 
  isFirstStep, 
  isFinalStep, 
  stepList 
}: BaseComponentProps) {
    if (getCurrentStep()?.component) {
      const Component = getCurrentStep()?.component.step;
    return (
      <div>
        {Component && (
          <Component 
            next={next} 
            prev={prev} 
            isFirstStep={isFirstStep} 
            isFinalStep={isFinalStep} 
            stepList={stepList}
            getCurrentStep={getCurrentStep}
          />
        )}
      </div>
    )
  }
  return null;
}
