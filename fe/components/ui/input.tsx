import * as React from "react";

import { cn } from "@/lib/utils";
import Image from "next/image";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

interface FloatingInputProps extends React.ComponentProps<"input"> {
  label: string;
  id?: string;
}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ className, type, label, placeholder, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(type === "password" ? false : true);
    const [hasValue, setHasValue] = React.useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(e.target.value !== "");
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value !== "");
      props.onChange?.(e);
    };

    const isLabelFloated = isFocused || hasValue;

    return (
      <div className="relative w-full">
        {/* Input field */}
        <input
          type={type === "password" && isVisible ? "text" : type}
          ref={ref}
          data-slot="input"
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-full border bg-transparent px-3 py-5 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            className
          )}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />

        <label
          className={cn(
            "text-muted-foreground pointer-events-none absolute left-2 px-1 transition-all duration-200 ease-in-out select-none",
            "origin-left transform text-sm",
            isLabelFloated
              ? "bg-background text-ring -top-2 scale-90"
              : "top-1/2 -translate-y-1/2 bg-transparent text-black/30",
            "before:bg-background before:absolute before:inset-0 before:-z-10"
          )}
        >
          {label}
        </label>

        {/* Optional placeholder when focused */}
        {placeholder && isFocused && !hasValue && (
          <div className="text-muted-foreground/50 pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-sm">
            {placeholder}
          </div>
        )}

        {/* Toggle visibility for password input */}
        {type === "password" && (
          <button
            type="button"
            className="absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer"
            onClick={() => setIsVisible((prev) => !prev)}
            aria-label="Toggle password visibility"
          >
            {isVisible ? (
              <Image src="images/show-password.svg" alt="Show Password" width={18} height={18} />
            ) : (
              <Image src="images/hide-password.svg" alt="hide Password" width={18} height={18} />
            )}
          </button>
        )}
      </div>
    );
  }
);

export { Input, FloatingInput };
