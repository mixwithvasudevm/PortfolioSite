import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Card, CardTitle, CardSubtitle, CardText } from "reactstrap";

const infoData = [
  {
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    title: "Elon Musk",
    subtitle: "CEO Tesla",
  },
  {
    para: "This is my testimonial for this company on behalf of being a CEO",
    title: "Sundar Pichai",
    subtitle: "CEO Google",
  },
  {
    para: "This is my testimonial for this company on behalf of being a CEO",
    title: "Satya Nadela",
    subtitle: "CEO Microsoft",
  },
  {
    para: "This is my testimonial for this company on behalf of being a CEO",
    title: "Jeff Bezos",
    subtitle: "CEO Amazon",
  },
  {
    para: "Mazaa aa gaya inke saath kaam karke. Saare paise vasool. Waah waah...",
    title: "Unknown",
    subtitle: "Manager",
  },
  {
    para: "Mere pyaare desh vaasiyon, ye log desh kaa naam roshan kr rhe h",
    title: "Narender Modi",
    subtitle: "PMO India",
  },
];

const slides = infoData.map((item, index) => {
  return (
    <Card key={index} className="my-3 ttm-card">
        <div className="mt-4">
          <CardTitle className="mx-lg-3" tag="h5">
            {item.title}
          </CardTitle>
          {/* <CardSubtitle tag="h6" className="text-center">
            {item.subtitle}
          </CardSubtitle> */}
    </div>
      <div className="ttm-card-body d-flex align-items-start flex-column">
        <div>
          <CardText className="p-4">
            <blockquote>{item.para}</blockquote>
          </CardText>
        </div>
       
      </div>
    </Card>
  );
});

//Owl Carousel Settings
const options = {
  margin: 90,
  responsiveClass: true,
  nav: true,
  loop: true,
  navText: ["<span></span>", "<span></span>"],
  navContainerClass: "custom-nav",
  autoplay: true,
  autoplayHoverPause: true,
  dots: false,
  touchDrag: false,
  mouseDrag: false,
  stagePadding: 0,
  smartSpeed: 1000,
  navSpeed: 500,
  responsive: {
    0: {
      items: 1,
    },
    700: {
      items: 1,
    },
    1024: {
      items: 1,
      margin: 40,
    },
    1200: {
      items: 3,
      margin: 30,
    },
  },
};

const Testimonials = () => {
  return (
    <div className="testimonials p-4">
    <div className="main-content ttm mb-5 mx-lg-5">
      <OwlCarousel className="owl-carousel" {...options}>
        {slides}
      </OwlCarousel>
    </div>
    </div>
  );
};

export default Testimonials;
