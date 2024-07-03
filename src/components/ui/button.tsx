import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex justify-center items-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition colors",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--main-color)] text-[var(--filled-button-text-color)] hover:bg-button-hover",
        outline:
          "border border-[var(--main-color)] bg-transparent text-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-[var(--filled-button-text-color)]",
      },
      size: {
        default: "h-[44px] px-6 py-2",
        md: "h-[48px] px-6 py-2",
        lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
