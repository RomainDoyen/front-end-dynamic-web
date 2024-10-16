type avatarProps = {
  size?: 'small' | 'medium' | 'large';
  src: string;
  alt: string;
}

import clsx from "clsx";
import Image from "next/image";

export default function avatar({ size = 'medium', src, alt }: avatarProps) {

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
  }

  return (
    <div className={clsx(sizeAvatar, "bg-gray-400 rounded-full relative")}>
      <Image
        fill
        src={src}
        alt={alt}
        className="object-cover object-center rounded-full"
      />
    </div>
  )
}
