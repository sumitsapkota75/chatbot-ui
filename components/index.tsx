import * as React from "react";
import Image from "next/image";

// packages
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

// components
import { Spinner } from "..";

const buttonVariants = cva(
  "inline-flex h-[48px] px-[33px] items-center rounded-full border justify-center text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-primary-8 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: cn(
          // base style
          "bg-primary border-primary-6 text-primary-foreground text-base",

          // hover style
          "hover:border-primary-11 hover:bg-primary-12",

          // focus style
          "focus-visible:bg-primary-7 focus-visible:border-primary-7",

          // active style
          "active:bg-primary-5 active:border-primary-5 active:shadow-active-btn-shadow",

          // disabled style
          "disabled:border-neutral disabled:bg-neutral disabled:text-neutral-2",
        ),
        outline: cn(
          // base style
          "border-primary-6 bg-base text-primary-6 text-base",

          // hover style
          "hover:border-neutral-3 hover:text-neutral-3",

          // focus style
          "focus-visible:border-neutral-4 focus-visible:text-neutral-4",

          // active style
          "active:shadow-active-btn-shadow",

          // disabled style
          "disabled:bg-neutral-1 disabled:border-border disabled:text-neutral-2",
        ),
        shadedOutline: cn(
          // base style
          "border-primary-4 bg-outline-shaded text-primary body-medium",

          // disabled style
          "disabled:bg-neutral-1 disabled:border-border disabled:text-neutral-2",
        ),
        link: cn("bg-transparent border-none p-0 h-auto"),
      },
      hasLeadingIcon: {
        true: "gap-3 px-[17px]",
        false: "",
      },
      isLoading: {
        true: "gap-3 px-[17px] opacity-60 pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      hasLeadingIcon: false,
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    icon?: "apple" | "google" | "facebook" | "share" | "edit" | "camera";
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      isLoading,
      hasLeadingIcon,
      icon = "google",
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    if (hasLeadingIcon) {
      const { children, disabled } = props;
      return (
        <Comp
          className={cn(
            buttonVariants({ variant, hasLeadingIcon, isLoading, className }),
          )}
          ref={ref}
          {...props}
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <Image
              src={`/assets/buttonLeadingIcons/${icon ? icon : "google"}.svg`}
              width={20}
              height={20}
              alt={`${icon} icon`}
              className={cn({
                "opacity-40": disabled,
              })}
            />
          )}
          {children}
        </Comp>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, isLoading, className }))}
        ref={ref}
        {...props}
      >
        {asChild ? (
          props.children
        ) : (
          <>
            {isLoading ? <Spinner /> : null}
            {props.children}
          </>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
