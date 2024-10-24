import Avatar from "@/ui/design-system/avatar/avatar";
import { RiCamera2Fill } from "react-icons/ri";

type UploadAvatarProps = {
  handleImageSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imagePreview: string | ArrayBuffer | null;
}

export default function UploadAvatar({ handleImageSelect, imagePreview }: UploadAvatarProps) {
  return (
    <div className="flex items-center gap-5">
      <label className="inline-block bg-primary hover:bg-primary-400 text-white rounded px-[18px] py-[15px] text-caption5 font-medium cursor-pointer animate">
        <div className="flex items-center gap-2">
          <RiCamera2Fill />
          <span>Charger une photo</span>
        </div>
        <input type="file" className="hidden" onChange={handleImageSelect} />
      </label>
      <Avatar
        src={
          imagePreview ? 
          typeof imagePreview === "string" 
          ? imagePreview: String(imagePreview) : "/svg/Camera.svg"
        }
        alt="Avatar"
        size="extra-large"
      />
    </div>
  )
}
