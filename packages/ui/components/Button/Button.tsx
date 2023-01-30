import React, { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { FocusRing } from "react-aria";
import ButtonLoadingIndicator from "./ButtonLoadingIndicator";
import type { IconType } from "react-icons/lib";
import { createPolymorphicComponent } from "../../utils/create-polymorphic-component";

const buttonCva = cva(
  "inline-flex items-center justify-center rounded font-medium outline-none select-none gap-x-2 text-white active:focus:scale-[0.98] ease-out duration-200 transition-transform",
  {
    variants: {
      variant: {
        primary: "bg-primary-200 hover:bg-primary-300",
        secondary: "bg-primary-400 hover:bg-primary-500",
        transparent:
          "bg-transparent text-primary-900 hover:text-primary-200 dark:text-white dark:hover:text-primary-200",
      },
      size: {
        sm: "text-sm px-2 py-2",
        md: "text-base px-3 py-2",
        lg: "text-lg px-4 py-3",
        xl: "text-xl px-5 py-4",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      isLoading: {
        true: "cursor-progress",
      },
      isDisabled: {
        true: "opacity-40 cursor-not-allowed",
      },
      isRounded: {
        true: "rounded-full",
      },
      isAspectSquare: {
        true: "aspect-square",
      },
    },
    compoundVariants: [
      {
        isLoading: true,
        isDisabled: true,
        className: "opacity-100 cursor-progress",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
      isDisabled: false,
      isRounded: false,
      isAspectSquare: false,
    },
  },
);

const ringCva = cva("outline-2 outline-offset-2", {
  variants: {
    variant: {
      primary: "outline-primary-200",
      secondary: "outline-primary-400",
      transparent: "outline-primary-100",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const iconCva = cva("outline-2 outline-offset-2", {
  variants: {
    size: {
      sm: "text-lg",
      md: "text-xl",
      lg: "text-2xl",
      xl: "text-3xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonCva> {
  children?: React.ReactNode;
  icon?: IconType;
  iconPosition?: "right" | "left";
  isDisabled?: boolean;
  isLoading?: boolean;
  loadingPosition?: "right" | "left";
  ref?: React.ForwardedRef<HTMLButtonElement>;
}

const _Button = forwardRef<HTMLButtonElement, ButtonProps & { component: any }>(
  (props, ref) => {
    const {
      children,
      variant,
      size,
      fullWidth,
      isDisabled,
      className = "",
      isLoading,
      loadingPosition = "left",
      icon,
      iconPosition = "left",
      isRounded,
      isAspectSquare,
      component,
      ...restProps
    } = props;

    const iconClassName = iconCva({ size });

    const renderLoadingIndicator = () => {
      let loadingIndicatorSize;

      switch (size) {
        case "sm":
          loadingIndicatorSize = 20;
          break;
        case "md":
          loadingIndicatorSize = 24;
          break;
        case "lg":
          loadingIndicatorSize = 28;
          break;
        case "xl":
          loadingIndicatorSize = 32;
          break;
        default:
          break;
      }

      return (
        <ButtonLoadingIndicator
          width={loadingIndicatorSize}
          height={loadingIndicatorSize}
          isIndeterminate
        />
      );
    };

    const Element = component || "button";

    return (
      <FocusRing focusRingClass={ringCva({ variant })}>
        <Element
          ref={ref}
          disabled={isDisabled || isLoading}
          className={`${className} ${buttonCva({
            variant,
            size,
            fullWidth,
            isRounded,
            isAspectSquare: isRounded || isAspectSquare,
            isLoading,
            isDisabled: isDisabled || isLoading,
          })}`}
          {...restProps}
        >
          {icon &&
            iconPosition === "left" &&
            !isLoading &&
            icon({ className: iconClassName })}

          {isLoading && loadingPosition === "left" && renderLoadingIndicator()}

          {children && children}

          {icon &&
            iconPosition === "right" &&
            !isLoading &&
            icon({ className: iconClassName })}

          {isLoading && loadingPosition === "right" && renderLoadingIndicator()}
        </Element>
      </FocusRing>
    );
  },
);

export default createPolymorphicComponent<"button", ButtonProps>(_Button);
