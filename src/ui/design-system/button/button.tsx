import clsx from "clsx";

type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  variant?: 'accent' | 'secondary' | 'outline' | 'disabled' | 'ico';
  icon?: any;
  iconTheme?: 'accent' | 'secondary' | 'gray';
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
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
  onClick 
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
      variantStyle = '';
      break;
  }

  switch (size) {
    case 'small':
      sizeStyle = 'text-caption3 font-medium px-[14px] py-[12px]';
      break;
    case 'medium':
      sizeStyle = 'text-caption2 font-medium px-[18px] py-[15px]';
      break;
    case 'large':
      sizeStyle = 'text-caption1 font-medium px-[22px] py-[18px]';
      break;
  }

  return (
    <button 
      onClick={onClick}
      type="button"
      className={clsx(variantStyle, sizeStyle, icoSize)}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
