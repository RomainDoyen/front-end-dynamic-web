import clsx from "clsx";
import Typography from "../typography/typography";

type InputType = {
  type?: "email" | "password" | "text";
  placeholder: string;
  isLoading: boolean;
  register: any;
  isAutoComplete?: boolean;
  className?: string;
  errors: any;
  errorMsg?: string;
  id: string;
  required?: boolean;
  label?: string;
}

export default function Input({ 
  type = "text", 
  placeholder, 
  isLoading, 
  register, 
  isAutoComplete = false, 
  className,
  errors,
  errorMsg = "Tu dois remplir ce champ",
  id,
  required = true,
  label,
}: InputType) {
  return (
    <div className="space-y-2">
      {label && (
        <Typography
          variant="caption3"
          component="div"
          theme={errors[id] ? "danger" : "gray-600"}
        >
          {label}
        </Typography>
      )}
      <input 
        type={type} 
        placeholder={placeholder} 
        disabled={isLoading} 
        {...register(id, { required: {
            value: required,
            message: errorMsg
        }})}
        autoComplete={isAutoComplete ? "on" : "off"}
        className={clsx(
          isLoading ? "cursor-not-allowed" : "cursor-pointer",
          errors[id] ? "placeholder-alert-danger text-alert-danger" : "placeholder-gray-600",
          "w-full p-4 font-light border border-gray-500 rounded focus:outline-none focus:ring-1 focus:ring-primary",
          className
        )}
      />
      {errors[id] && (
        <Typography 
          variant="caption4" 
          component="div" 
          theme="danger"
        >
          {errors[id]?.message}
        </Typography>
      )}
    </div>
  )
}
