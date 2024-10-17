import clsx from "clsx";

type BoxProps = {
  children: React.ReactNode,
  className?: string,
  padding_x?: string,
  padding_y?: string,
};

export default function box({ children, className, padding_x = "px-9", padding_y = "py-9" }: BoxProps) {
  return (
    <div className={clsx("w-full border border-gray-400 rounded", padding_x, padding_y, className)}>
      {children}
    </div>
  )
}
