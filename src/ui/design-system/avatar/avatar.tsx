type avatarProps = {
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  src: string;
  alt: string;
  isLoading?: boolean;
}

import clsx from "clsx";
import Image from "next/image";
import Spinner from "../spinner/spinner";

export default function avatar({ size = 'medium', src, alt, isLoading }: avatarProps) {

  let sizeAvatar: string = "";

  switch (size) {
    case 'small':
      sizeAvatar = "w-[24px] h-[24px]";
      break;
    case 'medium':
      sizeAvatar = "w-[34px] h-[34px]";
      break;
    case 'large':
      sizeAvatar = "w-[54px] h-[54px]";
      break;
    case 'extra-large':
      sizeAvatar = "w-[130px] h-[130px]";
      break;
  }

  return (
    <div className={clsx(
      sizeAvatar,
      isLoading && "flex items-center justify-center",
      "bg-gray-300 rounded-full relative overflow-hidden"
    )}>
      <div className={clsx(
        isLoading ? "opacity-40" : "opacity-0",
        "absolute z-10 w-full h-full bg-white animate"
      )} />
      <Image
        fill
        src={src ? src : "/images/avatar.png"}
        alt={alt}
        className={clsx(
          isLoading && "blur-[2px]",
          "object-cover object-center rounded-full animate"
        )}
      />
      {isLoading && <Spinner className="relative z-20"/>}
    </div>
  )
}
