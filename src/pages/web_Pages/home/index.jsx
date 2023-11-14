import "./style.scss";
import { CustomSlider } from "./components/slider";
import img1 from "../../../assets/images/carousel-1.jpg";
import img2 from "../../../assets/images/carousel-2.jpg";
import img3 from "../../../assets/images/carousel-3.jpg";
import { SpecialOffer } from "./components/specialOffer";
import { ProductList } from "../../../components/productList";
import offerImg1 from "../../../assets/images/specOffer-1.jpg";
import offerImg2 from "../../../assets/images/specOffer-2.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CustomAutoplaySlider } from "./components/autoplaySlider";
import cat1 from "../../../assets/images/cat-1.jpg";
import cat2 from "../../../assets/images/cat-2.jpg";
import cat3 from "../../../assets/images/cat-3.jpg";
import cat4 from "../../../assets/images/cat-4.jpg";
import product1 from "../../../assets/images/product-1.jpg";
import product2 from "../../../assets/images/product-2.jpg";
import product3 from "../../../assets/images/product-3.jpg";
import product4 from "../../../assets/images/product-4.jpg";
import product5 from "../../../assets/images/product-5.jpg";
import product6 from "../../../assets/images/product-6.jpg";
import product7 from "../../../assets/images/product-7.jpg";
import product8 from "../../../assets/images/product-8.jpg";
import sliderLogo1 from "../../../assets/images/autoSlider-1.jpg";
import sliderLogo2 from "../../../assets/images/autoSlider-2.jpg";
import sliderLogo3 from "../../../assets/images/autoSlider-3.jpg";
import sliderLogo4 from "../../../assets/images/autoSlider-4.jpg";
import sliderLogo5 from "../../../assets/images/autoSlider-5.jpg";
import sliderLogo6 from "../../../assets/images/autoSlider-6.jpg";
import sliderLogo7 from "../../../assets/images/autoSlider-7.jpg";
import sliderLogo8 from "../../../assets/images/autoSlider-8.jpg";

export const Home = () => {
  const [infoColumData, setInfoColumData] = useState([
    {
      icon: "icon-done",
      text: "Quality Product",
    },
    {
      icon: "icon-shipping",
      text: "Free Shipping",
    },
    {
      icon: "icon-sync",
      text: "14-Day Return",
    },
    {
      icon: "icon-calling",
      text: "24/7 Support",
    },
  ]);

  const [sliderData, setSliderData] = useState([
    {
      slideImage: `${img1}`,
      tittle: "Men Fashion",
      description:
        "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
      submit: "Shop Now",
    },
    {
      slideImage: `${img2}`,
      tittle: "Woman Fashion",
      description:
        "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
      submit: "Shop Now",
    },
    {
      slideImage: `${img3}`,
      tittle: "Kids Fashion",
      description:
        "Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam",
      submit: "Shop Now",
    },
  ]);

  const [categoriesList, setCategoriesList] = useState([
    {
      icon: `${cat1}`,
      tittle: "Category Name",
      description: "100 Products",
    },
    {
      icon: cat2,
      tittle: "Category Name",
      description: "100 Products",
    },
    {
      icon: cat3,
      tittle: "Category Name",
      description: "100 Products",
    },
    {
      icon: cat4,
      tittle: "Category Name",
      description: "100 Products",
    },
    {
      icon: cat4,
      tittle: "Category Name",
      description: "100 Products",
    },
    {
      icon: cat3,
      tittle: "Category Name",
      description: "100 Products",
    },
    {
      icon: cat2,
      tittle: "Category Name",
      description: "100 Products",
    },
    {
      icon: cat1,
      tittle: "Category Name",
      description: "100 Products",
    },
    {
      icon: cat3,
      tittle: "Category Name",
      description: "100 Products",
    },
    {
      icon: cat1,
      tittle: "Category Name",
      description: "100 Products",
    },
    {
      icon: cat4,
      tittle: "Category Name",
      description: "100 Products",
    },
    {
      icon: cat2,
      tittle: "Category Name",
      description: "100 Products",
    },
  ]);

  const [productList, setProductList] = useState([
    {
      productImg: `${product1}`,
      productTittle: "Product Name Goes Here",
      productNewPrice: "$123.00",
      rate: 5,
      id: "s7d15a4d56",
    },
    {
      productImg: `${product2}`,
      productTittle: "Product Name Goes Here",
      productNewPrice: "$123.00",
      rate: 5,
      id: "s7489a4d56",
    },
    {
      productImg: `${product3}`,
      productTittle: "Product Name Goes Here",
      productNewPrice: "$123.00",
      rate: 4,
      id: "s7d15s8d56",
    },
    {
      productImg: `${product4}`,
      productTittle: "Product Name Goes Here",
      productNewPrice: "$123.00",
      rate: 3,
      id: "s7d15aw8416",
    },
    {
      productImg: `${product5}`,
      productTittle: "Product Name Goes Here",
      productNewPrice: "$123.00",
      rate: 3,
      id: "s7d15a8f9g6",
    },
    {
      productImg: `${product6}`,
      productTittle: "Product Name Goes Here",
      productNewPrice: "$123.00",
      rate: 4,
      id: "s7d151sbg56",
    },
    {
      productImg: `${product7}`,
      productTittle: "Product Name Goes Here",
      productNewPrice: "$123.00",
      rate: 5,
      id: "s7d15ah6892",
    },
    {
      productImg: `${product8}`,
      productTittle: "Product Name Goes Here",
      productNewPrice: "$123.00",
      rate: 5,
      id: "s7d15a36d16",
    },
  ]);

  return (
    <div className="homePage G_container">
      <div className="bannerSection">
        <div className="slider">
          <CustomSlider sliderListData={sliderData} />
        </div>
        <div className="offerText">
          <SpecialOffer
            tittle="SAVE 20%"
            description="Special Offer"
            submit="Shop Now"
            image={offerImg1}
          />
          <SpecialOffer
            tittle="SAVE 20%"
            description="Special Offer"
            submit="Shop Now"
            image={offerImg2}
          />
        </div>
      </div>
      <div className="infoColumList">
        {infoColumData.map((item, index) => {
          return (
            <div className="colum" key={index}>
              <span className={item.icon}></span>
              <h5>{item.text}</h5>
            </div>
          );
        })}
      </div>
      <div className="categories">
        <span className="categoriesTittle">CATEGORIES</span>
        <span className="categoriesDashed"></span>
      </div>

      <div className="categoriesList">
        {categoriesList.map((item, index) => {
          return (
            <div className="categoriesData" key={index}>
              <Link>
                <div
                  className="categoriesIcon"
                  style={{ backgroundImage: `url(${item.icon})` }}
                ></div>
                <div className="categoriesText">
                  <h5>{item.tittle}</h5>
                  <span>{item.description}</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <h2 className="featuredText">Featured Products</h2>
      <div className="productList">
        {productList.map((item, index) => {
          return <ProductList key={index} data={item} />;
        })}
      </div>

      <div className="specialOfferBanner">
        <SpecialOffer
          tittle="SAVE 20%"
          description="Special Offer"
          submit="Shop Now"
          image={offerImg1}
        />
        <SpecialOffer
          tittle="SAVE 20%"
          description="Special Offer"
          submit="Shop Now"
          image={offerImg2}
        />
      </div>

      <div className="recentProducts">
        <h2 className="recentText">RECENT PRODUCTS</h2>

        <div className="productList">
          {productList.map((item, index) => {
            return <ProductList key={index} data={item} />;
          })}
        </div>
      </div>

      <div className="autoplaySlider">
        <CustomAutoplaySlider
          className="homePageSlider"
          sliderItems={[
            sliderLogo1,
            sliderLogo2,
            sliderLogo3,
            sliderLogo4,
            sliderLogo5,
            sliderLogo6,
            sliderLogo7,
            sliderLogo8,
          ]}
        />
      </div>
    </div>
  );
};