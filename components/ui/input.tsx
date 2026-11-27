import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-foreground bg-card flex h-11 w-full min-w-0 rounded-xl border-2 px-3 py-1 font-sans text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:shadow-hard-sm focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5 focus-visible:bg-secondary/30",
        "aria-invalid:border-destructive aria-invalid:bg-destructive/10",
        className
      )}
      {...props}
    />
  )
}

export { Input }
