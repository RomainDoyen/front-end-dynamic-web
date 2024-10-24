import { BaseComponentProps } from "@/types/onboarding-steps-list";
import OnboardingFooter from "../../footer/onboarding-footer"
import OnboardingTabs from "../../tabs/onboarding-tabs";
import Container from "@/ui/components/container/container";
import Typography from "@/ui/design-system/typography/typography";
import ProfileStepForm from "./profile-step-form";
import { SubmitHandler, useForm } from "react-hook-form";
import { OnboardingProfileFormFieldType } from "@/types/forms";
import Usetoggle from "@/hooks/use-toggle";
import { firestoreUpdateDocument } from "@/api/firestore";
import { useAuth } from "@/context/AuthUserContext";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { updateUserIdentificationData } from "@/api/authentication";

export default function ProfileStep({ 
  prev, 
  next, 
  isFirstStep, 
  isFinalStep, 
  stepList, 
  getCurrentStep 
}: BaseComponentProps) {
  const { authUser } = useAuth();
  const { value: isLoading, setValue: setLoading } = Usetoggle({});
  const {
    handleSubmit, 
    control, 
    formState: { errors },
    register,
    reset,
    setValue,
  } = useForm<OnboardingProfileFormFieldType>();

  const { displayName, expertise, biography } = authUser.userDocument;

  useEffect(() => {

    const fieldsToUpdate: ("displayName" | "expertise" | "biography")[] = [
      "displayName", 
      "expertise", 
      "biography"
    ];

    for (const field of fieldsToUpdate) {
      setValue(field, authUser.userDocument[field]);
    }
  }, []);

  const handleUpdateUserDocument = async (formData: OnboardingProfileFormFieldType) => {

    const { error } = await firestoreUpdateDocument(
      "users",
      authUser.uid, 
      formData
    );

    if (error) {
      setLoading(false);
      toast.error(error.message);
      return;
    }
    setLoading(false);
    reset();
    next();
  }

  const onSubmit: SubmitHandler<OnboardingProfileFormFieldType> = async (formData) => {
    setLoading(true);

    if (displayName !== formData.displayName 
      || expertise !== formData.expertise 
      || biography !== formData.biography) {
      if (displayName !== formData.displayName 
        || authUser.displayName !== formData.displayName
      ) {
        const data = {
          displayName: formData.displayName,
        }

        const { error } = await updateUserIdentificationData(authUser.uid, data);

        if (error) {
          setLoading(false);
          toast.error(error.message);
          return;
        }
      }
      handleUpdateUserDocument(formData);
    }
    setLoading(false);
    next();
  }

  return (
    <div className="relative h-screen pb-[91px]">
      <div className="h-full overflow-auto">
        <Container className="grid h-full grid-cols-12">
          <div className="relative z-10 flex items-center h-full col-span-6 py-10">
            <div className="w-full space-y-5 pb-4.5">
              <OnboardingTabs 
                tabs={stepList} 
                getCurrentStep={getCurrentStep}
              />
              <Typography 
                variant="h1"
                component="h1"
              >
                Présente-toi !
              </Typography>
              <Typography 
                variant="body-base"
                component="p"
                theme="gray"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Tenetur laborum debitis fugiat aspernatur nihil eveniet in blanditiis ducimus quos totam.
              </Typography>
            </div>
          </div>
          <div className="flex items-center h-full col-span-6">
            <div className="flex justify-end w-full">
              <ProfileStepForm 
                form={
                  {
                    errors,
                    control,
                    register,
                    handleSubmit,
                    onSubmit,
                    isLoading,
                  }
                }
              />
            </div>
          </div>
        </Container>
      </div>
      <OnboardingFooter 
        prev={prev}
        next={handleSubmit(onSubmit)} 
        isFirstStep={isFirstStep}
        isFinalStep={isFinalStep}
        isLoading={isLoading}
      />
    </div>
  )
}