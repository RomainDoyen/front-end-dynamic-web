import { useAuth } from "@/context/AuthUserContext";
import Usetoggle from "@/hooks/use-toggle";
import { BaseComponentProps } from "@/types/onboarding-steps-list";
import OnboardingFooter from "../../footer/onboarding-footer";
import Container from "@/ui/components/container/container";
import OnboardingTabs from "../../tabs/onboarding-tabs";
import Typography from "@/ui/design-system/typography/typography";
import UploadAvatar from "@/ui/components/upload-avatar/upload.avatar";
import { useState } from "react";
import { getDownloadURL, ref, StorageReference, uploadBytesResumable, UploadTask } from "firebase/storage";
import { storage } from "@/config/firebase.config";
import { toast } from "react-toastify";
import { updateUserIdentificationData } from "@/api/authentication";
import { firestoreUpdateDocument } from "@/api/firestore";

export default function AvatarStep({
  prev, 
  next,  
  isFinalStep, 
  stepList, 
  getCurrentStep 
}: BaseComponentProps) {
  const { authUser } = useAuth();
  const { value: isLoading, toggle } = Usetoggle({});

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

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

  const updateUserDocument = async (photoURL: string) => {
    const body = {
      photoURL: photoURL
    }
    await updateUserIdentificationData(authUser.uid, body);

    const { error } = firestoreUpdateDocument("users", authUser.uid, body);

    if (error) {
      toggle();
      toast.error(error.message);
      return;
    }

    toggle();
    next();
  }

  const handleImageUpload = () => {
    let storageRef: StorageReference;
    let uploadTask: UploadTask;

    if (selectedImage !== null) {
      toggle();
      storageRef = ref(
        storage,
        `users-medias/${authUser.uid}/avatar/avatar-${authUser.uid}`
      );
      uploadTask = uploadBytesResumable(storageRef, selectedImage);

      uploadTask.on("state_changed", (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log(`Upload is ${progress}% done`);
        setUploadProgress(progress);
      }, (error) => {
        console.error(error);
        toggle();
        toast.error("Une erreur s'est produite lors du téléchargement de l'image");
      },() => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // console.log("File available at", downloadURL);
          updateUserDocument(downloadURL);
        });
      });
    } else {
      next();
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
                uploadProgress={uploadProgress}
                isLoading={isLoading}
              />
            </div>
          </div>
        </Container>
      </div>
      <OnboardingFooter 
        prev={prev}
        next={handleImageUpload} 
        isFinalStep={isFinalStep}
        isLoading={isLoading}
      />
    </div>
  )
}
