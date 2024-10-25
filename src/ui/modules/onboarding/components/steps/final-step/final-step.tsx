import { useAuth } from "@/context/AuthUserContext";
import Usetoggle from "@/hooks/use-toggle";
import { BaseComponentProps } from "@/types/onboarding-steps-list";
import Container from "@/ui/components/container/container";
import Typography from "@/ui/design-system/typography/typography";
import OnboardingFooter from "../../footer/onboarding-footer";
import Logo from "@/ui/design-system/logo/logo";
import { useCallback, useEffect, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import confetti from "canvas-confetti";
import { firestoreUpdateDocument } from "@/api/firestore";
import { toast } from "react-toastify";

export default function FinalStep({ isFinalStep }: BaseComponentProps) {

  const { authUser } = useAuth();

  const { value: isLoading, toggle } = Usetoggle({});

  const refAnimationInstance = useRef<((opts: any) => void) | null>(null);

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio: number, opts: any) => {
    if (refAnimationInstance.current !== null) {
      // refAnimationInstance.current({ 
      //   ...opts,
      //   origin: { y: 0.7 },
      //   particleCount: Math.floor(200 * particleRatio),
      // });
      confetti({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      })
    }
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    makeShot(0.2, {
      spread: 60,
    });
    makeShot(0.2, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  useEffect(() => {
    setTimeout(() => {
      fire();
    }, 50);
  }, []);

  const handleCloseOnboarding = async () => {
    toggle();

    const { error } = await firestoreUpdateDocument(
      "users", 
      authUser.uid, 
      { onboardingIsCompleted: true }
    );

    if (error) {
      toggle();
      toast.error(error.message);
      return;
    }
    toggle();
  }

  return (
    <>
      <ReactCanvasConfetti 
        onInit={getInstance}
        style={{
          zIndex: 1000,
          position: "fixed",
          top: -80,
          left: -0,
          width: "100%",
          height: "100%",
        }}
      />
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
    </>
  )
}
