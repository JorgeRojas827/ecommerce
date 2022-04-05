import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Card } from '../UI/Card'
import { useWindowSize } from '../../hooks/useWindowSize'
import { useQuery } from '@apollo/client'
import { IFeaturedProducts } from '../../interfaces/IFeaturedProducts'
import { GET_FEATURED_PRODUCTS } from '../../helpers/queries'

export const FeaturedSection = () => {
  const { width } = useWindowSize()
  const { data: featuredProducts } = useQuery<IFeaturedProducts>(
    GET_FEATURED_PRODUCTS
  )

  return (
    <div id="featured" className=" bg-bkg py-10 px-10 md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-around space-y-5 space-x-5 lg:flex-row">
        <h2
          style={{
            WebkitTextStroke: 1,
            WebkitTextStrokeColor: '#C4C4C4',
          }}
          className="font-morganite text-9xl font-extrabold text-bkg md:text-titleSection"
        >
          featured
        </h2>
        <p className="max-w-3xl font-montserrat text-3xl font-semibold text-letter md:text-5xl">
          A selection of the best sellers, only cool boys wear it.
        </p>
      </div>
      <Carousel
        showIndicators={false}
        showStatus={false}
        centerMode
        showThumbs={false}
        centerSlidePercentage={width < 1024 ? 100 : 33.3}
      >
        {featuredProducts?.products.data.map(
          ({ id, attributes: { title, price, image, image_color } }, i) => {
            return (
              <Card
                key={i}
                title={title}
                price={price}
                image={image}
                id={id}
                image_color={image_color}
              />
            )
          }
        )}
      </Carousel>
    </div>
  )
}
