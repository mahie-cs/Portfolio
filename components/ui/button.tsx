import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold tracking-wide disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "border-2 border-foreground bg-primary text-primary-foreground shadow-hard-sm hover-hard",
        destructive:
          "border-2 border-foreground bg-destructive text-white shadow-hard-sm hover-hard",
        outline:
          "border-2 border-foreground bg-background text-foreground shadow-hard-sm hover-hard hover:bg-secondary hover:text-secondary-foreground",
        secondary:
          "border-2 border-foreground bg-secondary text-secondary-foreground shadow-hard-sm hover-hard",
        ghost:
          "border-2 border-transparent hover:border-foreground hover:bg-secondary hover:text-secondary-foreground",
        link: "text-foreground underline decoration-4 decoration-primary underline-offset-4 hover:bg-secondary hover:text-secondary-foreground",
      },
      size: {
        default: "h-10 px-5 py-2 has-[>svg]:px-3",
        sm: "h-9 gap-1.5 px-3 text-xs has-[>svg]:px-2.5",
        lg: "h-12 px-7 text-base has-[>svg]:px-5",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
