import axios from "axios";
import { useEffect, useState } from "react"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Trending = () => {
    const [dealsData, setDealsData] = useState([]);

    const getDeals = async () => {
        const options = {
            method: 'GET',
            url: 'https://real-time-amazon-data.p.rapidapi.com/deals-v2',
            params: {
              country: 'US',
              min_product_star_rating: 'ALL',
              price_range: 'ALL',
              discount_range: 'ALL'
            },
            headers: {
              'x-rapidapi-key': 'cb68d03c14msh07750a08ee12301p104ef5jsna08e90616ab8',
              'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
            }
          };
          try {
            const response = await axios.request(options);
            setDealsData(response.data.data.deals);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getDeals();
    }, []);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div> 
            <h2 className="text-4xl font-titleFont font-semibold">Deals</h2>
            {
                <Carousel additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={1}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                customTransition="all 1s linear"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive} >
                  {dealsData.map((deal, index) => (
                        <div key={index} className="flex justify-center items-center p-2">
                            <img src={deal.deal_photo} alt={`Deal ${index}`} className="w-full h-72 object-cover" />
                        </div>
                    ))}
                </Carousel>
            }
          
        </div>
       
    )
}

export default Trending;
