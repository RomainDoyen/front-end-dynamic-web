export type OnboardingStepsList = {
  id: number;
  label: string;
  component: {
    step: React.ComponentType<BaseComponentProps>;
  };
};

export type BaseComponentProps = {
  next: () => void;
  prev: () => void;
  isFirstStep: () => boolean;
  isFinalStep: () => boolean;
  stepList: OnboardingStepsList[];
  getCurrentStep: () => OnboardingStepsList | undefined;
};