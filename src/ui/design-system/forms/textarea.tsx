import clsx from "clsx";
import Typography from "../typography/typography";

type TextareaProps = {
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
  rows?: number;
}

export default function Textarea({
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
  rows = 5
}: TextareaProps) {
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
      <textarea 
        rows={rows}
        placeholder={placeholder}
        disabled={isLoading}
        {...register(id, { required: {
            value: required,
            message: errorMsg
        }})}
        autoComplete={isAutoComplete ? "on" : "off"}
        className={clsx(
          isLoading ? "bg-gray-300 focus:ring-gray-300 cursor-not-allowed" : "bg-white",
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
