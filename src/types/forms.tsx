export type FormType = {
  form: {
    errors: any;
    control?: any;
    register: any;
    isLoading: boolean;
    handleSubmit: any;
    onSubmit: any;
  }
}

export type RegisterFormFieldType = {
  email: string;
  password: string;
  how_did_hear: string;
}

export type LoginFormFieldType = {
  email: string;
  password: string;
}

export type ForgetPasswordFormFieldType = {
  email: string;
}

export type OnboardingProfileFormFieldType = {
  displayName: string;
  expertise: string;
  biography: string;
}

export type UserProfileFormFieldType = {
  displayName: string;
  expertise: string;
  biography: string;
  github: string;
  linkedin: string;
}