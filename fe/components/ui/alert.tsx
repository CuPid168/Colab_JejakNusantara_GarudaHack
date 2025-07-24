import * as React from "react"
import { cn } from "@/lib/utils"

const Alert = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(
        "relative w-full rounded-lg border border-destructive/20 bg-destructive/10 px-4 py-3 text-destructive text-sm font-medium",
        className
      )}
      {...props}
    />
  )
)
Alert.displayName = "Alert"

export { Alert } 