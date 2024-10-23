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
  finalStep: () => boolean;
  stepList: OnboardingStepsList[];
  getCurrentStep: () => OnboardingStepsList | undefined;
};