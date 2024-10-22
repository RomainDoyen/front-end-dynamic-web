/* eslint-disable react-hooks/rules-of-hooks */
import { auth } from '@/config/firebase.config';
import { UserType } from '@/types/users';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';

export default function usefirebaseauth() {

  const [authUser, setAuthUser] = useState<UserType | null >(null);
  const [authUserIsloading, setAuthUserIsloading] = useState<boolean>(true);

  const formatAuthUser = (user: UserType) => ({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
  })

  const authStateChanged = async (authState: UserType | User | null) => {
    if (!authState) {
      setAuthUser(null);
      setAuthUserIsloading(false);
      return;
    }

    setAuthUserIsloading(true);

    const formatedUser = formatAuthUser(authState);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    authUserIsloading,
  }
}
