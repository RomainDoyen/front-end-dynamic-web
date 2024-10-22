/* eslint-disable react-hooks/rules-of-hooks */
import { auth, db } from '@/config/firebase.config';
import { UserDocumentType, UserType } from '@/types/users';
import { onAuthStateChanged, User } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function usefirebaseauth() {

  const [authUser, setAuthUser] = useState<UserType | null >(null);
  const [authUserIsloading, setAuthUserIsloading] = useState<boolean>(true);

  const getUserDocument = async (user: UserType) => {
    if (auth.currentUser) {
      const documentRef = doc(db, "users", auth.currentUser.uid);
      const usercompact = user;
      onSnapshot(documentRef, (doc) => {
        if (doc.exists()) {
          usercompact.userDocument = doc.data() as UserDocumentType;
        }
        setAuthUser((prevAuthUser) => (
          {...prevAuthUser, ...usercompact}
        ));
        setAuthUserIsloading(false);
      });
    }
  }

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
    await getUserDocument(formatedUser);
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

