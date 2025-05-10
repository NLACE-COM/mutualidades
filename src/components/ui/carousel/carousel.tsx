
import * as React from "react"
import useEmblaCarousel, { 
  type UseEmblaCarouselType
} from "embla-carousel-react"
import { CarouselContext, type CarouselProps, type CarouselOptions } from "./carousel-context"
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
    // Default carousel options for smooth scrolling
    const defaultOptions: CarouselOptions = {
      loop: false,
      dragFree: false,
      inViewThreshold: 0.5,
    }

    // Create a ref that will be passed to useEmblaCarousel and the context
    const emblaRef = React.useRef<HTMLDivElement>(null)
    
    const [api, setInternalApi] = React.useState<UseEmblaCarouselType[1] | null>(null)

    // Initialize the carousel
    React.useEffect(() => {
      if (!emblaRef.current) return

      const [emblaNode, emblaApi] = useEmblaCarousel(
        {
          ...defaultOptions,
          ...opts,
          axis: orientation === "horizontal" ? "x" : "y",
        },
        plugins
      )

      if (emblaRef.current && emblaNode) {
        Object.keys(emblaNode).forEach(key => {
          // @ts-ignore - assign all properties from emblaNode to emblaRef.current
          emblaRef.current[key] = emblaNode[key];
        })
      }

      setInternalApi(emblaApi)

      return () => {
        emblaApi?.destroy()
      }
    }, [defaultOptions, opts, orientation, plugins])

    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback(() => {
      if (!api) return
      
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [api])

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
      api?.scrollNext()
    }, [api])

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

    React.useEffect(() => {
      if (!api || !setApi) {
        return
      }

      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) {
        return
      }

      onSelect()
      api.on("select", onSelect)
      api.on("reInit", onSelect)

      return () => {
        api.off("select", onSelect)
        api.off("reInit", onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef: emblaRef,
          api: api,
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
