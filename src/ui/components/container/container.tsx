import clsx from "clsx";

type containerProps = {
  children: React.ReactNode;
  className?: string;
}

export default function container({ children, className }: containerProps) {
  return (
    <div className={clsx("w-full max-w-7xl mx-auto px-5 lg:px-10", className,  )}>
      {children}
    </div>
  )
}
