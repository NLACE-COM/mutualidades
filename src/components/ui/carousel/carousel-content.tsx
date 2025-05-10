
import * as React from "react"
import { cn } from "@/lib/utils"
import { useCarousel } from "./carousel-context"

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex will-change-transform", // Added will-change for smoother animations
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        style={{ 
          transition: "transform 0.5s ease" // Add smooth transition for content
        }}
        {...props}
      />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"
