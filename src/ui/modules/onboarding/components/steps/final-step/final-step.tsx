import { useAuth } from "@/context/AuthUserContext";
import Usetoggle from "@/hooks/use-toggle";
import { BaseComponentProps } from "@/types/onboarding-steps-list";
import Container from "@/ui/components/container/container";
import Typography from "@/ui/design-system/typography/typography";
import OnboardingFooter from "../../footer/onboarding-footer";
import Logo from "@/ui/design-system/logo/logo";

export default function FinalStep({ isFinalStep }: BaseComponentProps) {

  const { authUser } = useAuth();

  const { value: isLoading, toggle } = Usetoggle({});

  const handleCloseOnboarding = async () => {
    // close
  }

  return (
    <div className="relative h-screen pb-[91px]">
      <div className="h-full overflow-auto">
        <Container className="h-full">
          <div className="relative z-10 flex items-center h-full p-10">
            <div className="w-full max-w-xl mx-auto space-y-5 pb-4.5">
              <div className="flex justify-center">
                <Logo 
                  size="large"
                />
              </div>
              <Typography 
                variant="h1"
                component="h1"
                className="text-center"
              >
                Félicitations {authUser?.displayName} !
              </Typography>
              <Typography 
                variant="body-base"
                component="p"
                theme="gray"
                className="text-center"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Tenetur laborum debitis fugiat aspernatur nihil eveniet in blanditiis ducimus quos totam.
              </Typography>
            </div>
          </div>
        </Container>
      </div>
      <OnboardingFooter  
        isFinalStep={isFinalStep}
        isLoading={isLoading}
        next={handleCloseOnboarding}
      />
    </div>
  )
}
