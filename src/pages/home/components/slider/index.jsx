import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.scss";

export const CustomSlider = ({ sliderListData }) => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="sliderComponent">
      <Slider {...settings}>
        {sliderListData.map((item, index) => {
          return (
            <div className="sliderContainer" key={index}>
              <div className="sliderImg" style={{ backgroundImage: `url('${item.slideImage}')` }}>
                <div className="sliderText">
                  <h2>{item.tittle}</h2>
                  <p>{item.description}</p>
                  <button>{item.submit}</button>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
