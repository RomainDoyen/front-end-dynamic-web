import { useAuth } from "@/context/AuthUserContext";
import Usetoggle from "@/hooks/use-toggle";
import { BaseComponentProps } from "@/types/onboarding-steps-list";
import OnboardingFooter from "../../footer/onboarding-footer";
import Container from "@/ui/components/container/container";
import OnboardingTabs from "../../tabs/onboarding-tabs";
import Typography from "@/ui/design-system/typography/typography";
import UploadAvatar from "@/ui/components/upload-avatar/upload.avatar";
import { useState } from "react";

export default function AvatarStep({
  prev, 
  next,  
  isFinalStep, 
  stepList, 
  getCurrentStep 
}: BaseComponentProps) {
  const { authUser } = useAuth();
  const { value: isLoading, setValue: setLoading } = Usetoggle({});

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        let imgDataUrl: string | ArrayBuffer | null = null;
        if (e.target) {
          imgDataUrl = e.target.result;
        }
        setImagePreview(imgDataUrl);
      }
      reader.readAsDataURL(file);
    }
    
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
                Dèrnièr étape !
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
            <div className="flex justify-center w-full">
              <UploadAvatar 
                handleImageSelect={handleImageSelect}
                imagePreview={imagePreview}
              />
            </div>
          </div>
        </Container>
      </div>
      <OnboardingFooter 
        prev={prev}
        next={next} 
        isFinalStep={isFinalStep}
        isLoading={isLoading}
      />
    </div>
  )
}
