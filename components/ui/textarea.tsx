import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-foreground placeholder:text-muted-foreground aria-invalid:border-destructive aria-invalid:bg-destructive/10 bg-card flex field-sizing-content min-h-16 w-full rounded-xl border-2 px-3 py-2 font-sans text-base outline-none focus-visible:shadow-hard-sm focus-visible:-translate-x-0.5 focus-visible:-translate-y-0.5 focus-visible:bg-secondary/30 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
