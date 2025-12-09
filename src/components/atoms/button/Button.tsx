import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium rounded-md transition-all active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none gap-2 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
        outline:
          "border border-gray-300 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-800",
        ghost:
          "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800",
        link:
          "text-blue-600 font-medium p-0 h-auto hover:underline dark:text-blue-400",
      },
      size: {
        sm: "text-sm px-3 py-1.5",
        md: "text-base px-4 py-2",
        lg: "text-lg px-5 py-3",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      rounded: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant,
      size,
      rounded,
      asChild = false,
      loading = false,
      disabled,
      leftIcon,
      rightIcon,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        className={cn(buttonVariants({ variant, size, rounded }), className)}
        {...props}
      >
        {/* Loading Spinner */}
        {loading ? (
          <span
            className={cn(
              "animate-spin rounded-full border-2 border-t-transparent",
              size === "sm" && "h-4 w-4",
              size === "md" && "h-5 w-5",
              size === "lg" && "h-6 w-6"
            )}
          />
        ) : (
          <>
            {/* Animated Left Icon */}
            {leftIcon && (
              <span className="transition-transform duration-200 group-hover:-translate-x-0.5">
                {leftIcon}
              </span>
            )}

            <span>{children}</span>

            {/* Animated Right Icon */}
            {rightIcon && (
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                {rightIcon}
              </span>
            )}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";
