import usefirebaseauth from "@/hooks/use-firebase-auth"
import { UserDocumentType } from "@/types/users"
import { useContext, createContext } from "react"

const init = {
  uid: "",
  email: "",
  displayName: "",
  emailVerified: false,
  phoneNumber: "",
  photoURL: "",
  userDocument: {} as UserDocumentType,
}

const authUserContext = createContext({
  authUser: init,
  authUserIsLoading: true,
  reloadAuthUserDate: () => {},
})

type AuthUserProviderProps = {
  children: React.ReactNode
}

export default function AuthUserProvider({ children }: AuthUserProviderProps) {

  const auth = usefirebaseauth()

  return (
    <authUserContext.Provider
      value={{
        authUser: auth.authUser as {
          uid: string,
          email: string,
          displayName: string,
          emailVerified: boolean,
          phoneNumber: string,
          photoURL: string,
          userDocument: UserDocumentType,
        },
        authUserIsLoading: auth.authUserIsloading as boolean,
        reloadAuthUserDate: auth.reloadAuthUserDate as () => void,
      }}
    >
      {children}
    </authUserContext.Provider>
  )
}

export const useAuth = () => useContext(authUserContext);