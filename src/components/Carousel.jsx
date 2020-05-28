import React, { Fragment } from "react";
import Carousel from "react-multi-carousel";
import "../css/Carousel.css";

import "react-multi-carousel/lib/styles.css";

const CarouselHome = () => {
  return (
    <Fragment>
      <div className="korsel text-center">
        <h1>What They Said about Bridestory</h1>
        <Carousel
          className="mt-5 mb-5"
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 2,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className="cor">
            <p>"Bridestory Market is like Disneyland for bride-to-be."</p>
            <br />
            <span>Raisa Andriana</span>
          </div>
          <div className="cor">
            <p>"This is one stop solution for those who plan their wedding."</p>
            <br />
            <span>Monita Tahalea</span>
          </div>
          <div className="cor">
            <p>
              "Offers you complete list of vendors, so it is possible for the
              bride-to-be to check all her wedding checklist!"
            </p>
            <br />
            <span>Gita Savitri</span>
          </div>
          <div className="cor">
            <p>
              "Bridestory Pay helps me to do transaction with the vendors
              although we are not in Jakarta"
            </p>
            <br />
            <span>Tasya Kamila & Randi</span>
          </div>
          <div className="cor">
            <p>"The best part is the best deals that Hilda offers!"</p>
            <br />
            <span>Hamediana & Christopher</span>
          </div>
          <div className="cor">
            <p>
              "A lot of useful information from Bridestory magazine that helped
              me in preparing my wedding."
            </p>
            <br />
            <span>Ririn Agustin & Dwikie Pinontoan</span>
          </div>
          <div className="cor">
            <p>
              "I can find vendors informations without going outside. Helpful
              for those who have limited time due to a hectic day."
            </p>
            <br />
            <span>Citro Utomo dan Bragita Gunawan</span>
          </div>
          <div className="cor">
            <p>
              "I love that you can filter your search as specific as categories
              and colour theme you're going for."
            </p>
            <br />
            <span>Tasia</span>
          </div>
        </Carousel>
      </div>
    </Fragment>
  );
};
export default CarouselHome;
