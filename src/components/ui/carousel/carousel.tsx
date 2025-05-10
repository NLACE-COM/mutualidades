
import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { CarouselContext, type CarouselProps } from "./carousel-context"
import { cn } from "@/lib/utils"

export const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Define simplified options with explicit type assertions
    const defaultOptions = {
      loop: true,
      align: "center" as const,
      containScroll: "trimSnaps" as const,
      slidesToScroll: 1,
      duration: 25, // Increased transition duration for smoother slides
      skipSnaps: false,
    }

    // Use the embla carousel hook with properly typed options
    const [emblaRef, emblaApi] = useEmblaCarousel(
      {
        ...defaultOptions,
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(true) // Default to true to ensure buttons work

    // Log when API is initialized for debugging
    React.useEffect(() => {
      if (emblaApi) {
        console.log("Embla API initialized successfully")
      }
    }, [emblaApi])

    const onSelect = React.useCallback(() => {
      if (!emblaApi) return
      
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }, [emblaApi])

    const scrollPrev = React.useCallback(() => {
      if (emblaApi) {
        emblaApi.scrollPrev()
        console.log("Scrolling to previous slide")
      }
    }, [emblaApi])

    const scrollNext = React.useCallback(() => {
      if (emblaApi) {
        emblaApi.scrollNext()
        console.log("Scrolling to next slide")
      }
    }, [emblaApi])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault()
          scrollPrev()
        } else if (event.key === "ArrowRight") {
          event.preventDefault()
          scrollNext()
        }
      },
      [scrollPrev, scrollNext]
    )

    // Effect for external API access
    React.useEffect(() => {
      if (!emblaApi || !setApi) {
        return
      }
      
      setApi(emblaApi)
    }, [emblaApi, setApi])

    // Effect for event handlers
    React.useEffect(() => {
      if (!emblaApi) {
        return
      }

      onSelect()
      emblaApi.on("select", onSelect)
      emblaApi.on("reInit", onSelect)

      return () => {
        emblaApi.off("select", onSelect)
        emblaApi.off("reInit", onSelect)
      }
    }, [emblaApi, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef: emblaRef,
          api: emblaApi,
          opts,
          orientation: orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"
