import { BaseComponentProps } from "@/types/onboarding-steps-list"
import OnboardingFooter from "../../footer/onboarding-footer"
import Container from "@/ui/components/container/container"
import Typography from "@/ui/design-system/typography/typography"
import Image from "next/image"
import OnboardingTabs from "../../tabs/onboarding-tabs"

export default function WelcomeStep({ 
  next, 
  isFirstStep, 
  isFinalStep, 
  stepList, 
  getCurrentStep 
}: BaseComponentProps) {
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
                Bienvenue sur l'appli Dynamic Web !
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
            <div className="w-full">
              <Image
                src="/svg/rocket.svg"
                alt="Welcome"
                width={811}
                height={596}
                layout="responsive"
              />
            </div>
          </div>
        </Container>
      </div>
      <OnboardingFooter 
        next={next} 
        isFirstStep={isFirstStep}
        isFinalStep={isFinalStep}
      />
    </div>
  )
}
