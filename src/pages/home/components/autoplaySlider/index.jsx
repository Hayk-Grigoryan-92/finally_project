import Slider from "react-slick";
import "./style.scss";

export const CustomAutoplaySlider = ({ sliderItems, slideToShow = 6 }) => {
  const settings = {
    infinite: true,
    slidesToShow: slideToShow,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div>
      <Slider {...settings}>
        {sliderItems.map((item, index) => {
          return (
            <div className="autoSlide" key={index}>
              <div
                className="sliderItem"
                style={{ backgroundImage: `url('${item}')` }}
              ></div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
