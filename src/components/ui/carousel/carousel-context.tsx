
import * as React from "react"
import useEmblaCarousel, {
  type UseEmblaCarouselType
} from "embla-carousel-react"

// Define the types
export type CarouselApi = UseEmblaCarouselType[1]
export type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
export type CarouselOptions = UseEmblaCarouselType[0]
export type CarouselPlugin = any // Embla plugins don't have a specific exported type

export type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin[]
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

export type CarouselContextProps = {
  carouselRef: React.RefObject<HTMLDivElement>
  api: CarouselApi | null
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

// Create the context
export const CarouselContext = React.createContext<CarouselContextProps | null>(null)

export function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}
