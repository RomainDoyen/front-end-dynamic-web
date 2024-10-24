import { useAuth } from "@/context/AuthUserContext";
import { GUEST, REGISTERED } from "@/lib/session-status";
import { SessionStatusTypes } from "@/types/session-status-types";
import ScreenSpinner from "@/ui/design-system/spinner/screen-spinner"
import { on } from "events";
import { useRouter } from "next/router";

type SessionProps = {
  children: React.ReactNode;
  sessionStatus?: SessionStatusTypes;
}

export default function Session({ children, sessionStatus }: SessionProps) {
  const router = useRouter();
  const { authUserIsLoading, authUser } = useAuth();

  const onboardingIsCompleted = authUser?.userDocument?.onboardingIsCompleted;

  const shouldRedirectToOnboarding = () => {
    return (
      !authUserIsLoading &&
      authUser &&
      !onboardingIsCompleted &&
      router.asPath !== "/onboarding"
    )
  }

  const shouldNotRedirectToOnboarding = () => {
    return (
      !authUserIsLoading &&
      authUser &&
      onboardingIsCompleted &&
      router.asPath === "/onboarding"
    )
  }

  if (shouldRedirectToOnboarding()) {
    router.push("/onboarding");
    return <ScreenSpinner />;
  }

  if (shouldNotRedirectToOnboarding()) {
    router.push("/mon-espace");
    return <ScreenSpinner />;
  }

  if (sessionStatus === GUEST && !authUserIsLoading) {
    if (!authUser) {
      return <>{children}</>
    } else {
      router.push("/mon-espace");
    }
  }

  if (sessionStatus === REGISTERED && !authUserIsLoading) {
    if (authUser) {
      return <>{children}</>
    } else {
      router.push("/connexion");
    }
  }

  if (!sessionStatus && !authUserIsLoading) {
    return <>{children}</>
  }

  return <ScreenSpinner />
}
