
import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"

// Define the types based on the useEmblaCarousel hook
export type CarouselApi = ReturnType<typeof useEmblaCarousel>[1]
export type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
export type CarouselOptions = NonNullable<UseCarouselParameters[0]>
export type CarouselPlugin = NonNullable<UseCarouselParameters[1]>[number]

export type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin[]
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

export type CarouselContextProps = {
  carouselRef: React.RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void)
  api: CarouselApi | null
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

// Create the context with clearer types
export const CarouselContext = React.createContext<CarouselContextProps | null>(null)

export function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}
