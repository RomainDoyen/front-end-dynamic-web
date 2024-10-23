import { Timestamp } from "firebase/firestore"

export type UserType = {
  uid: string,
  email: string | null,
  displayName: string | null,
  emailVerified: boolean,
  phoneNumber: string | null,
  photoURL: string | null,
  userDocument?: UserDocumentType,
}

export type UserDocumentType = {
  uid: string,
  email: string,
  how_did_hear: string,
  creation_date: Timestamp,
  onboardingIsCompleted: boolean,
  displayName: string,
  expertise: string,
  biography: string,
}