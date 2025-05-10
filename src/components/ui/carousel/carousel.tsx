
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
    // Define default options
    const defaultOptions = {
      loop: true,
      align: "center" as const,
      containScroll: "trimSnaps" as const,
      dragFree: true,
    }

    // Create a ref for the carousel
    const emblaNodeRef = React.useRef<HTMLDivElement>(null)
    
    // Use the embla carousel hook with properly typed options
    const [_, emblaApi] = useEmblaCarousel(
      {
        ...defaultOptions,
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    )
    
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback(() => {
      if (!emblaApi) return
      
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }, [emblaApi])

    const scrollPrev = React.useCallback(() => {
      emblaApi?.scrollPrev()
    }, [emblaApi])

    const scrollNext = React.useCallback(() => {
      emblaApi?.scrollNext()
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
          carouselRef: emblaNodeRef,
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
