import { useAuth } from "@/context/AuthUserContext";
import { GUEST, REGISTERED } from "@/lib/session-status";
import { SessionStatusTypes } from "@/types/session-status-types";
import ScreenSpinner from "@/ui/design-system/spinner/screen-spinner"
import { useRouter } from "next/router";

type SessionProps = {
  children: React.ReactNode;
  sessionStatus?: SessionStatusTypes;
}

export default function Session({ children, sessionStatus }: SessionProps) {
  const router = useRouter();
  const { authUserIsLoading, authUser } = useAuth();

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
