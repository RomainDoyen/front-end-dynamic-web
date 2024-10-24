import { useAuth } from "@/context/AuthUserContext";
import Avatar from "@/ui/design-system/avatar/avatar";
import clsx from "clsx";
import { RiCamera2Fill } from "react-icons/ri";

type UploadAvatarProps = {
  handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imagePreview: string | ArrayBuffer | null;
  uploadProgress: number;
  isLoading: boolean;
}

export default function UploadAvatar({ 
  handleImageSelect, 
  imagePreview, 
  uploadProgress, 
  isLoading 
}: UploadAvatarProps) {

  const { authUser } = useAuth();

  const uploadProgressBarStyle = `fixed top-0 left-0 w-full h-1 bg-secondary animate ${uploadProgress > 0 ? "" : "hidden"}`;

  return (
    <div className="flex items-center gap-5">
      <div className={uploadProgressBarStyle} style={{ width: `${uploadProgress}%` }} />
      <label className={clsx(
        isLoading ? "cursor-not-allowed" : "cursor-pointer",
        "inline-block bg-primary hover:bg-primary-400 text-white rounded px-[18px] py-[15px] text-caption5 font-medium animate"
      )}>
        <div className="flex items-center gap-2">
          <RiCamera2Fill />
          <span>Charger une photo</span>
        </div>
        <input 
          type="file" 
          className="hidden" 
          onChange={handleImageSelect}
          disabled={isLoading} 
        />
      </label>
      <Avatar
        src={
          imagePreview 
          ? typeof imagePreview === "string" 
            ? imagePreview
            : String(imagePreview) 
            : authUser.userDocument.photoURL ? authUser.userDocument.photoURL
            : "/svg/Camera.svg"
        }
        isLoading={isLoading}
        alt="Avatar"
        size="extra-large"
      />
    </div>
  )
}
