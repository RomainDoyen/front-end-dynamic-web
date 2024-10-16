import clsx from "clsx";
import { iconProps } from "@/types/iconProps";
import Spinner from "../spinner/spinner";
import { linkType, linkTypes } from "@/lib/link-type";
import Link from "next/link";

type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  variant?: 'accent' | 'secondary' | 'outline' | 'disabled' | 'ico';
  icon?: iconProps;
  iconTheme?: 'accent' | 'secondary' | 'gray';
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  baseUrl?: string;
  linkType?: linkType;
  action?: () => void;
};

export default function button({
  size = 'medium',
  variant = 'accent',
  icon,
  iconTheme = 'accent',
  iconPosition = 'right',
  disabled,
  isLoading,
  children, 
  baseUrl,
  linkType = 'internal',
  action = () => {},
}: ButtonProps) {

  let variantStyle: string = "", 
  sizeStyle: string = "", 
  icoSize: number = 0;

  switch (variant) {
    case 'accent':
      variantStyle = 'bg-primary hover:bg-primary-400 text-white rounded';
      break;
    case 'secondary':
      variantStyle = 'bg-primary-200 hover:bg-primary-300/50 text-primary rounded';
      break;
    case 'outline':
      variantStyle = 'bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded';
      break;
    case 'disabled':
      variantStyle = 'bg-gray-300 border border-gray-500 text-gray-600 rounded cursor-not-allowed';
      break;
    case 'ico':
      if (iconTheme === 'accent') {
        variantStyle = 'bg-primary hover:bg-primary-400 text-white rounded-full';
      } else if (iconTheme === 'secondary') {
        variantStyle = 'bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full';
      } else if (iconTheme === 'gray') {
        variantStyle = 'bg-gray-800 hover:bg-gray-700/50 text-white rounded-full';
      }
      break;
  }

  switch (size) {
    case 'small':
      sizeStyle = `text-caption3 font-medium ${
        variant === 'ico' ? "flex items-center justify-center w-[40px] h-[40px]" : "px-[14px] py-[12px]"
      }`;
      icoSize = 18;
      break;
    case 'medium':
      sizeStyle = `text-caption2 font-medium ${
        variant === 'ico' ? "flex items-center justify-center w-[50px] h-[50px]" : "px-[18px] py-[15px]"
      }`;
      icoSize = 20;
      break;
    case 'large':
      sizeStyle = `text-caption1 font-medium ${
        variant === 'ico' ? "flex items-center justify-center w-[60px] h-[60px]" : "px-[22px] py-[18px]"
      }`;
      icoSize = 24;
      break;
  }

  const handleClick = () => {
    if (action) {
      action();
    }
  };

  const buttonContent = (
    <>
    {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          {variant === "accent" || variant === 'ico' ? (
            <Spinner size="small" variant="white"/>
            ) : (
            <Spinner size="small" />
          )}
        </div>
      )}
      <div className={clsx(isLoading && "invisible")}>
        {icon && variant === 'ico' ? (
          <icon.icon size={icoSize} />
        ) : (
          <div className={clsx(icon && "flex items-center gap-1")}>
            {icon && iconPosition === 'left' && (
              <icon.icon size={icoSize} />
            )}
            {children}
            {icon && iconPosition === 'right' && (
              <icon.icon size={icoSize} />
            )}
          </div>
        )}
      </div>
    </>
  );

  const buttonElement = (
    <button 
      onClick={handleClick}
      type="button"
      className={clsx(variantStyle, sizeStyle, icoSize, isLoading && "cursor-wait", "relative animate")}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );

  if (baseUrl) {
    if (linkType === linkTypes.external) {
      return (
        <a href={baseUrl} target="_blank">
          {buttonElement}
        </a>
      );
    } else if (linkType === linkTypes.internal) {
      return (
        <Link href={baseUrl}>
          {buttonElement}
        </Link>
      )
    }
  }

  return buttonElement;
}
